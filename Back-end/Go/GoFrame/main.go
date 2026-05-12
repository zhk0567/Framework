package main

import (
	"crypto/rand"
	"embed"
	"encoding/hex"
	"encoding/json"
	"io"
	"net/http"
	"strings"
	"sync"
	"time"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
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

func corsAll(r *ghttp.Request) {
	r.Response.Header().Set("Access-Control-Allow-Origin", "*")
	r.Response.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	r.Response.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type")
	r.Response.Header().Set("Access-Control-Expose-Headers", "X-Feature-Box, X-GoFrame-Demo")
	if r.Method == http.MethodOptions {
		r.Response.WriteStatus(http.StatusNoContent)
		return
	}
	r.Middleware.Next()
}

func main() {
	s := g.Server()
	s.SetPort(3022)
	s.Use(corsAll)

	s.BindHandler("GET:/", func(r *ghttp.Request) {
		r.Response.Header().Set("Content-Type", "text/html; charset=utf-8")
		_, _ = r.Response.Write(indexHTML)
	})

	s.BindHandler("GET:/api/health", func(r *ghttp.Request) {
		r.Response.WriteJson(g.Map{"ok": true, "service": "framework-back-end-goframe"})
	})

	s.BindHandler("GET:/api/demo/lifecycle", func(r *ghttp.Request) {
		r.Response.Header().Set("X-GoFrame-Demo", "ghttp-handler")
		r.Response.WriteJson(g.Map{
			"message": "GoFrame：国内常用全家桶，ghttp 提供路由、中间件、ORM、配置等一体化能力。",
			"goFramePipeline": []string{
				"g.Server()",
				"BindHandler / Group 注册路由",
				"Response.WriteJson 输出 JSON",
			},
			"goFrameHighlights": []g.Map{
				{"title": "工程化", "detail": "日志、配置、链路、数据库等模块与路由同属一套生态。"},
				{"title": "与 Gin 对照", "detail": "Gin 偏薄路由；GoFrame 偏平台型全家桶。"},
			},
		})
	})

	s.BindHandler("GET:/api/items", func(r *ghttp.Request) {
		r.Response.WriteJson(g.Map{"items": store.list()})
	})

	s.BindHandler("POST:/api/items", func(r *ghttp.Request) {
		raw, err := io.ReadAll(r.Body)
		if err != nil {
			r.Response.Status = http.StatusBadRequest
			r.Response.WriteJson(g.Map{"error": err.Error()})
			return
		}
		var body struct {
			Title string `json:"title"`
		}
		if err := json.Unmarshal(raw, &body); err != nil {
			r.Response.Status = http.StatusBadRequest
			r.Response.WriteJson(g.Map{"error": err.Error()})
			return
		}
		t := strings.TrimSpace(body.Title)
		if t == "" || len(t) > 120 {
			r.Response.Status = http.StatusBadRequest
			r.Response.WriteJson(g.Map{"error": "title: required, 1-120 chars"})
			return
		}
		it := store.add(t)
		r.Response.Status = http.StatusCreated
		r.Response.WriteJson(g.Map{"item": it})
	})

	s.Group("/api/box", func(group *ghttp.RouterGroup) {
		group.Middleware(func(r *ghttp.Request) {
			r.Response.Header().Set("X-Feature-Box", "goframe-group-middleware")
			r.Middleware.Next()
		})
		group.GET("/inner", func(r *ghttp.Request) {
			r.Response.WriteJson(g.Map{
				"where": "/api/box/inner",
				"note":  "X-Feature-Box 仅挂在 /api/box/* 子树。",
			})
		})
	})

	s.Run()
}
