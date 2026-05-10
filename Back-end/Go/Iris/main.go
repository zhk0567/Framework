package main

import (
	"crypto/rand"
	"embed"
	"encoding/hex"
	"log"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"

	"github.com/kataras/iris/v12"
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
	store := &itemsStore{items: []item{{ID: "seed-1", Title: "示例条目（内存 + mutex）", CreatedAt: time.Now().UTC()}}}

	app := iris.New()
	app.UseGlobal(func(ctx iris.Context) {
		ctx.Header("Access-Control-Allow-Origin", "*")
		ctx.Header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		ctx.Header("Access-Control-Allow-Headers", "Content-Type, Origin")
		ctx.Header("Access-Control-Expose-Headers", "X-Feature-Box, x-iris-demo")
		ctx.Next()
	})

	app.Get("/", func(ctx iris.Context) {
		ctx.ContentType("text/html")
		_, _ = ctx.Write(indexHTML)
	})

	api := app.Party("/api")
	api.Get("/health", func(ctx iris.Context) {
		_ = ctx.JSON(iris.Map{"ok": true, "service": "framework-back-end-iris"})
	})
	api.Get("/demo/lifecycle", func(ctx iris.Context) {
		ctx.Header("x-iris-demo", "iris-handler")
		_ = ctx.JSON(iris.Map{
			"message": "Iris：Party 子路由 + 全局中间件；Context 提供丰富 API。",
			"irisPipeline": []string{
				"iris.New()",
				"app.UseGlobal / Party.Use",
				"HTTP 方法与路径注册",
				"ReadJSON / JSON 响应",
			},
			"irisHighlights": []map[string]string{
				{"title": "功能全面", "detail": "HTTP/2、WebSocket、MVC 等可按项目启用。"},
				{"title": "性能取向", "detail": "与 Echo/Fiber 同属高性能 HTTP 框架阵营。"},
			},
		})
	})
	api.Get("/items", func(ctx iris.Context) {
		_ = ctx.JSON(iris.Map{"items": store.list()})
	})
	api.Post("/items", func(ctx iris.Context) {
		var body struct {
			Title string `json:"title"`
		}
		if err := ctx.ReadJSON(&body); err != nil {
			ctx.StatusCode(http.StatusBadRequest)
			_ = ctx.JSON(iris.Map{"error": err.Error()})
			return
		}
		t := strings.TrimSpace(body.Title)
		if t == "" || len(t) > 120 {
			ctx.StatusCode(http.StatusBadRequest)
			_ = ctx.JSON(iris.Map{"error": "title: required, 1-120 chars"})
			return
		}
		it := store.add(t)
		ctx.StatusCode(http.StatusCreated)
		_ = ctx.JSON(iris.Map{"item": it})
	})

	box := api.Party("/box")
	box.Use(func(ctx iris.Context) {
		ctx.Header("X-Feature-Box", "iris-party-middleware")
		ctx.Next()
	})
	box.Get("/inner", func(ctx iris.Context) {
		_ = ctx.JSON(iris.Map{
			"where": "/api/box/inner",
			"note":  "X-Feature-Box 由 Party 中间件链写入。",
		})
	})

	host := os.Getenv("HOST")
	if host == "" {
		host = "127.0.0.1"
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = "3007"
	}
	if err := app.Listen(host + ":" + port); err != nil {
		log.Fatal(err)
	}
}
