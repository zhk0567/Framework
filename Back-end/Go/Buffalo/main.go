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

func cors(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type")
		w.Header().Set("Access-Control-Expose-Headers", "X-Feature-Box, X-Buffalo-Demo")
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func main() {
	store := &itemsStore{items: []item{{ID: "seed-1", Title: "示例条目（内存 + mutex）", CreatedAt: time.Now().UTC()}}}

	mux := http.NewServeMux()
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
			return
		}
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		_, _ = w.Write(indexHTML)
	})

	mux.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
			return
		}
		writeJSON(w, http.StatusOK, map[string]any{
			"ok":      true,
			"service": "framework-back-end-buffalo-guide",
			"note":    "HTTP 形态占位；完整 Buffalo 应用请用官方 CLI（见 BUFFALO-Go.md）。",
		})
	})

	mux.HandleFunc("/api/demo/lifecycle", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
			return
		}
		w.Header().Set("X-Buffalo-Demo", "buffalo-guide-handler")
		writeJSON(w, http.StatusOK, map[string]any{
			"message": "Buffalo：全栈约定式框架（路由、资源、POP ORM、Webpack 资产等）。本目录不提交 buffalo new 生成树。",
			"buffaloHighlights": []map[string]string{
				{"title": "官方脚手架", "detail": "buffalo new <app>，含 migrations、templates、actions。"},
				{"title": "与 Gin 对照", "detail": "Gin 偏 API；Buffalo 偏「页面 + API + 工具链」一体。"},
			},
		})
	})

	mux.HandleFunc("/api/items", func(w http.ResponseWriter, r *http.Request) {
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
	})

	box := http.NewServeMux()
	box.HandleFunc("/inner", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
			return
		}
		writeJSON(w, http.StatusOK, map[string]any{
			"where": "/api/box/inner",
			"note":  "X-Feature-Box 仅挂在 /api/box/* 子树。",
		})
	})
	mux.Handle("/api/box/", http.StripPrefix("/api/box", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("X-Feature-Box", "buffalo-guide-strip-prefix")
		box.ServeHTTP(w, r)
	})))

	host := os.Getenv("HOST")
	if host == "" {
		host = "127.0.0.1"
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = "3023"
	}
	addr := host + ":" + port
	log.Printf("Buffalo（形态占位）http://%s/", addr)
	log.Fatal(http.ListenAndServe(addr, cors(mux)))
}
