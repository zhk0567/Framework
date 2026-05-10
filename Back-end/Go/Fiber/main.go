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

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
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
	app := fiber.New(fiber.Config{DisableStartupMessage: true})
	app.Use(cors.New(cors.Config{
		AllowOrigins:     "*",
		AllowMethods:     "GET,POST,OPTIONS",
		AllowHeaders:     "Origin,Content-Type",
		ExposeHeaders:    "X-Feature-Box,X-Fiber-Demo",
		AllowCredentials: false,
	}))

	store := &itemsStore{items: []item{{ID: "seed-1", Title: "示例条目（内存 + mutex）", CreatedAt: time.Now().UTC()}}}

	app.Get("/", func(c *fiber.Ctx) error {
		c.Set("Content-Type", "text/html; charset=utf-8")
		return c.Send(indexHTML)
	})

	api := app.Group("/api")
	api.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"ok": true, "service": "framework-back-end-fiber"})
	})
	api.Get("/demo/lifecycle", func(c *fiber.Ctx) error {
		c.Set("X-Fiber-Demo", "fiber-handler")
		return c.JSON(fiber.Map{
			"message": "Fiber：App → 中间件链 → 路由 → Handler；Context 封装 Request/Response。",
			"fiberPipeline": []string{
				"创建 *fiber.App",
				"app.Use 全局中间件（如 CORS、Logger）",
				"app.Group 或 Method 注册路由",
				"Handler 返回 error，由框架写响应",
			},
			"fiberHighlights": []fiber.Map{
				{"title": "Express 风格 API", "detail": "Method + Path 与中间件顺序直观，迁移自 Node 生态成本低。"},
				{"title": "零值 net/http 适配", "detail": "底层仍基于 fasthttp（默认），性能取向与 Gin 类似。"},
				{"title": "BodyParser", "detail": "JSON 绑定到 struct；本示例对 title 做手写长度校验以减小依赖。"},
			},
		})
	})
	api.Get("/items", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"items": store.list()})
	})
	api.Post("/items", func(c *fiber.Ctx) error {
		var body struct {
			Title string `json:"title"`
		}
		if err := c.BodyParser(&body); err != nil {
			return c.Status(http.StatusBadRequest).JSON(fiber.Map{"error": err.Error()})
		}
		t := strings.TrimSpace(body.Title)
		if t == "" || len(t) > 120 {
			return c.Status(http.StatusBadRequest).JSON(fiber.Map{"error": "title: required, 1-120 chars"})
		}
		it := store.add(t)
		return c.Status(http.StatusCreated).JSON(fiber.Map{"item": it})
	})

	box := api.Group("/box", func(c *fiber.Ctx) error {
		c.Set("X-Feature-Box", "fiber-group-middleware")
		return c.Next()
	})
	box.Get("/inner", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"where": "/api/box/inner",
			"note":  "X-Feature-Box 由 /api/box 路由组前置中间件写入。",
		})
	})

	host := os.Getenv("HOST")
	if host == "" {
		host = "127.0.0.1"
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = "3003"
	}
	addr := host + ":" + port
	log.Printf("Fiber 演示：http://%s/", addr)
	log.Fatal(app.Listen(addr))
}
