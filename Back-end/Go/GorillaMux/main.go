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

	"github.com/gorilla/mux"
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

func corsMW(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type")
		w.Header().Set("Access-Control-Expose-Headers", "X-Feature-Box, X-Gorilla-Demo")
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func main() {
	store := &itemsStore{items: []item{{ID: "seed-1", Title: "示例条目（内存 + mutex）", CreatedAt: time.Now().UTC()}}}

	r := mux.NewRouter()
	r.Use(corsMW)

	r.HandleFunc("/", func(w http.ResponseWriter, _ *http.Request) {
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		_, _ = w.Write(indexHTML)
	}).Methods(http.MethodGet)

	r.HandleFunc("/api/health", func(w http.ResponseWriter, _ *http.Request) {
		writeJSON(w, http.StatusOK, map[string]any{"ok": true, "service": "framework-back-end-gorilla-mux"})
	}).Methods(http.MethodGet)

	r.HandleFunc("/api/demo/lifecycle", func(w http.ResponseWriter, _ *http.Request) {
		w.Header().Set("X-Gorilla-Demo", "gorilla-mux-handler")
		writeJSON(w, http.StatusOK, map[string]any{
			"message": "gorilla/mux：经典第三方路由器，子路由与正则、Host 约束等能力丰富。",
			"muxPipeline": []string{
				"mux.NewRouter()",
				"PathPrefix + Subrouter 组织 /api",
				"Methods() 限制 HTTP 动词",
				"Use() 注册中间件（与 chi 链式类似）",
			},
			"muxHighlights": []map[string]string{
				{"title": "成熟稳定", "detail": "大量遗留与微服务代码仍在使用 gorilla/mux。"},
				{"title": "与 chi 对照", "detail": "chi 更轻；mux 功能面更宽，部分项目逐步迁移到 chi 或 1.22+ ServeMux。"},
			},
		})
	}).Methods(http.MethodGet)

	r.HandleFunc("/api/items", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			writeJSON(w, http.StatusOK, map[string]any{"items": store.list()})
		case http.MethodPost:
			var body struct {
				Title string `json:"title"`
			}
			if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
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
		default:
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		}
	}).Methods(http.MethodGet, http.MethodPost)

	box := r.PathPrefix("/api/box").Subrouter()
	box.Use(func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("X-Feature-Box", "gorilla-subrouter-middleware")
			next.ServeHTTP(w, r)
		})
	})
	box.HandleFunc("/inner", func(w http.ResponseWriter, _ *http.Request) {
		writeJSON(w, http.StatusOK, map[string]any{
			"where": "/api/box/inner",
			"note":  "X-Feature-Box 仅挂在 /api/box/* 子树。",
		})
	}).Methods(http.MethodGet)

	host := os.Getenv("HOST")
	if host == "" {
		host = "127.0.0.1"
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = "3021"
	}
	addr := host + ":" + port
	log.Printf("gorilla/mux 演示：http://%s/", addr)
	log.Fatal(http.ListenAndServe(addr, r))
}
