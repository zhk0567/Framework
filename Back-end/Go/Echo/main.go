package main

import (
	"crypto/rand"
	"embed"
	"encoding/hex"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

//go:embed public/index.html
var indexHTML []byte

type item struct {
	ID        string    `json:"id"`
	Title     string    `json:"title"`
	CreatedAt time.Time `json:"createdAt"`
}

type itemsStore struct {
	mu    sync.Mutex
	items []item
}

func (s *itemsStore) list() []item {
	s.mu.Lock()
	defer s.mu.Unlock()
	out := make([]item, len(s.items))
	copy(out, s.items)
	return out
}

func (s *itemsStore) add(title string) item {
	s.mu.Lock()
	defer s.mu.Unlock()
	it := item{ID: newID(), Title: title, CreatedAt: time.Now().UTC()}
	s.items = append([]item{it}, s.items...)
	return it
}

func newID() string {
	b := make([]byte, 16)
	if _, err := rand.Read(b); err != nil {
		return hex.EncodeToString([]byte(time.Now().String()))
	}
	return hex.EncodeToString(b)
}

func main() {
	e := echo.New()
	e.HideBanner = true
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{http.MethodGet, http.MethodPost, http.MethodOptions},
		AllowHeaders:     []string{echo.HeaderOrigin, echo.HeaderContentType},
		ExposeHeaders:    []string{"X-Feature-Box", "X-Echo-Demo"},
		AllowCredentials: false,
	}))

	store := &itemsStore{items: []item{{ID: "seed-1", Title: "示例条目（内存 + mutex）", CreatedAt: time.Now().UTC()}}}

	e.GET("/", func(c echo.Context) error {
		return c.Blob(http.StatusOK, "text/html; charset=utf-8", indexHTML)
	})

	api := e.Group("/api")
	api.GET("/health", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]any{"ok": true, "service": "framework-back-end-echo"})
	})
	api.GET("/demo/lifecycle", func(c echo.Context) error {
		c.Response().Header().Set("X-Echo-Demo", "echo-handler")
		return c.JSON(http.StatusOK, map[string]any{
			"message": "Echo：Echo 实例 → 全局中间件 → 路由组 → Handler；Context 封装请求与响应。",
			"echoPipeline": []string{
				"echo.New()",
				"e.Use（Recover、CORS、Logger 等）",
				"Group 与 HTTP 方法注册",
				"Bind / JSON 返回",
			},
			"echoHighlights": []map[string]string{
				{"title": "简洁 API", "detail": "与 net/http 友好，中间件三参数 `(next echo.HandlerFunc) echo.HandlerFunc`。"},
				{"title": "Binder", "detail": "c.Bind 支持 JSON / form；本示例对手写 title 长度校验。"},
				{"title": "生态", "detail": "labstack 中间件与 JWT 等插件成熟。"},
			},
		})
	})
	api.GET("/items", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]any{"items": store.list()})
	})
	api.POST("/items", func(c echo.Context) error {
		var body struct {
			Title string `json:"title"`
		}
		if err := c.Bind(&body); err != nil {
			return c.JSON(http.StatusBadRequest, map[string]any{"error": err.Error()})
		}
		t := strings.TrimSpace(body.Title)
		if t == "" || len(t) > 120 {
			return c.JSON(http.StatusBadRequest, map[string]any{"error": "title: required, 1-120 chars"})
		}
		it := store.add(t)
		return c.JSON(http.StatusCreated, map[string]any{"item": it})
	})

	box := api.Group("/box")
	box.Use(func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			c.Response().Header().Set("X-Feature-Box", "echo-group-middleware")
			return next(c)
		}
	})
	box.GET("/inner", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]any{
			"where": "/api/box/inner",
			"note":  "X-Feature-Box 由 /api/box 组中间件写入。",
		})
	})

	host := os.Getenv("HOST")
	if host == "" {
		host = "127.0.0.1"
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = "3004"
	}
	e.Logger.Fatal(e.Start(host + ":" + port))
}
