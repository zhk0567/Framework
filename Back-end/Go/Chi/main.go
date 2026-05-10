package main

import (
	"crypto/rand"
	"embed"
	"encoding/hex"
	"encoding/json"
	"log"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
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

func writeJSON(w http.ResponseWriter, status int, v any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(v)
}

func main() {
	store := &itemsStore{items: []item{{ID: "seed-1", Title: "示例条目（内存 + mutex）", CreatedAt: time.Now().UTC()}}}

	r := chi.NewRouter()
	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders:   []string{"*"},
		ExposedHeaders:   []string{"X-Feature-Box", "X-Chi-Demo"},
		AllowCredentials: false,
	}))

	r.Get("/", func(w http.ResponseWriter, req *http.Request) {
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		_, _ = w.Write(indexHTML)
	})

	r.Route("/api", func(r chi.Router) {
		r.Get("/health", func(w http.ResponseWriter, _ *http.Request) {
			writeJSON(w, http.StatusOK, map[string]any{"ok": true, "service": "framework-back-end-chi"})
		})
		r.Get("/demo/lifecycle", func(w http.ResponseWriter, _ *http.Request) {
			w.Header().Set("X-Chi-Demo", "chi-handler")
			writeJSON(w, http.StatusOK, map[string]any{
				"message": "Chi：轻量路由树，完全基于标准 net/http；中间件即 Handler 包装。",
				"chiPipeline": []string{
					"chi.NewRouter()",
					"r.Use 全局中间件（RequestID、Logger、Recoverer、CORS）",
					"r.Route / r.Group 组织子路由",
					"http.HandlerFunc 写响应",
				},
				"chiHighlights": []map[string]string{
					{"title": "与 stdlib 对齐", "detail": "便于与现有 http.Server、反向代理、测试工具组合。"},
					{"title": "可组合中间件", "detail": "闭包包装 `http.Handler`，顺序与 Gin/Fiber 概念一致。"},
					{"title": "微服务网关常用", "detail": "许多项目在边缘网关或 BFF 层选 Chi。"},
				},
			})
		})
		r.Get("/items", func(w http.ResponseWriter, _ *http.Request) {
			writeJSON(w, http.StatusOK, map[string]any{"items": store.list()})
		})
		r.Post("/items", func(w http.ResponseWriter, req *http.Request) {
			var body struct {
				Title string `json:"title"`
			}
			if err := json.NewDecoder(req.Body).Decode(&body); err != nil {
				writeJSON(w, http.StatusBadRequest, map[string]any{"error": err.Error()})
				return
			}
			t := strings.TrimSpace(body.Title)
			if t == "" || len(t) > 120 {
				writeJSON(w, http.StatusBadRequest, map[string]any{"error": "title: required, 1-120 chars"})
				return
			}
			it := store.add(t)
			writeJSON(w, http.StatusCreated, map[string]any{"item": it})
		})

		r.Route("/box", func(r chi.Router) {
			r.Use(func(next http.Handler) http.Handler {
				return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
					w.Header().Set("X-Feature-Box", "chi-group-middleware")
					next.ServeHTTP(w, req)
				})
			})
			r.Get("/inner", func(w http.ResponseWriter, _ *http.Request) {
				writeJSON(w, http.StatusOK, map[string]any{
					"where": "/api/box/inner",
					"note":  "X-Feature-Box 仅挂在 /api/box/* 子树。",
				})
			})
		})
	})

	host := os.Getenv("HOST")
	if host == "" {
		host = "127.0.0.1"
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = "3005"
	}
	addr := host + ":" + port
	log.Printf("Chi 演示：http://%s/", addr)
	log.Fatal(http.ListenAndServe(addr, r))
}
