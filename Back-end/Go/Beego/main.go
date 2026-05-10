package main

import (
	"crypto/rand"
	"embed"
	"encoding/hex"
	"encoding/json"
	"log"
	"strings"
	"sync"
	"time"

	"github.com/beego/beego/v2/server/web"
	"github.com/beego/beego/v2/server/web/context"
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

var store = &itemsStore{items: []item{{ID: "seed-1", Title: "示例条目（内存 + mutex）", CreatedAt: time.Now().UTC()}}}

type IndexController struct {
	web.Controller
}

func (c *IndexController) Get() {
	_ = c.Ctx.Output.Header("Content-Type", "text/html; charset=utf-8")
	_, _ = c.Ctx.ResponseWriter.Write(indexHTML)
}

type HealthController struct {
	web.Controller
}

func (c *HealthController) Get() {
	_ = c.Ctx.Output.JSON(map[string]any{"ok": true, "service": "framework-back-end-beego"}, false, false)
}

type DemoController struct {
	web.Controller
}

func (c *DemoController) Get() {
	_ = c.Ctx.Output.Header("X-Beego-Demo", "beego-handler")
	_ = c.Ctx.Output.JSON(map[string]any{
		"message": "Beego：MVC 风格 Controller + Router 映射；Filter 可做全局/前缀中间件。",
		"beegoPipeline": []string{
			"web.Router 注册 URL → Controller 方法",
			"InsertFilter 在 BeforeRouter 等阶段织入逻辑",
			"Controller.Ctx 访问请求与响应",
		},
		"beegoHighlights": []map[string]string{
			{"title": "全家桶取向", "detail": "ORM、session、日志等可渐进启用；本示例仅用最小子集。"},
			{"title": "工程习惯", "detail": "适合习惯「控制器 + 映射字符串」的团队。"},
		},
	}, false, false)
}

type ItemsController struct {
	web.Controller
}

func (c *ItemsController) List() {
	_ = c.Ctx.Output.JSON(map[string]any{"items": store.list()}, false, false)
}

func (c *ItemsController) Create() {
	var body struct {
		Title string `json:"title"`
	}
	if err := json.Unmarshal(c.Ctx.Input.RequestBody, &body); err != nil {
		c.Ctx.Output.SetStatus(400)
		_ = c.Ctx.Output.JSON(map[string]any{"error": err.Error()}, false, false)
		return
	}
	t := strings.TrimSpace(body.Title)
	if t == "" || len(t) > 120 {
		c.Ctx.Output.SetStatus(400)
		_ = c.Ctx.Output.JSON(map[string]any{"error": "title: required, 1-120 chars"}, false, false)
		return
	}
	it := store.add(t)
	c.Ctx.Output.SetStatus(201)
	_ = c.Ctx.Output.JSON(map[string]any{"item": it}, false, false)
}

type BoxController struct {
	web.Controller
}

func (c *BoxController) Inner() {
	_ = c.Ctx.Output.JSON(map[string]any{
		"where": "/api/box/inner",
		"note":  "X-Feature-Box 由 InsertFilter 匹配 /api/box/* 写入。",
	}, false, false)
}

func main() {
	web.InsertFilter("*", web.BeforeRouter, func(ctx *context.Context) {
		_ = ctx.Output.Header("Access-Control-Allow-Origin", "*")
		_ = ctx.Output.Header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		_ = ctx.Output.Header("Access-Control-Allow-Headers", "Content-Type, Origin")
		_ = ctx.Output.Header("Access-Control-Expose-Headers", "X-Feature-Box, X-Beego-Demo")
	})
	web.InsertFilter("/api/box/*", web.BeforeRouter, func(ctx *context.Context) {
		_ = ctx.Output.Header("X-Feature-Box", "beego-insertfilter")
	})

	web.Router("/", &IndexController{}, "get:Get")
	web.Router("/api/health", &HealthController{}, "get:Get")
	web.Router("/api/demo/lifecycle", &DemoController{}, "get:Get")
	web.Router("/api/items", &ItemsController{}, "get:List;post:Create")
	web.Router("/api/box/inner", &BoxController{}, "get:Inner")

	web.BConfig.Listen.HTTPAddr = "127.0.0.1"
	web.BConfig.Listen.HTTPPort = 3006
	log.Println("Beego 演示：http://127.0.0.1:3006/")
	web.Run()
}
