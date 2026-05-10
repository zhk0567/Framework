package main

import (
	"context"
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

	"github.com/go-kit/kit/endpoint"
	kithttp "github.com/go-kit/kit/transport/http"
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

func encodeJSON(_ context.Context, w http.ResponseWriter, resp interface{}) error {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Expose-Headers", "X-Feature-Box, x-go-kit-demo")
	return json.NewEncoder(w).Encode(resp)
}

func decodeEmpty(_ context.Context, _ *http.Request) (interface{}, error) { return struct{}{}, nil }

func main() {
	store := &itemsStore{items: []item{{ID: "seed-1", Title: "示例条目（内存 + mutex）", CreatedAt: time.Now().UTC()}}}

	healthEp := func(_ context.Context, _ interface{}) (interface{}, error) {
		return map[string]any{"ok": true, "service": "framework-back-end-go-kit"}, nil
	}

	mux := http.NewServeMux()
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			w.WriteHeader(http.StatusMethodNotAllowed)
			return
		}
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		_, _ = w.Write(indexHTML)
	})

	mux.Handle("/api/health", kithttp.NewServer(healthEp, decodeEmpty, encodeJSON))

	mux.HandleFunc("/api/demo/lifecycle", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			w.WriteHeader(http.StatusMethodNotAllowed)
			return
		}
		w.Header().Set("x-go-kit-demo", "go-kit-endpoint-transport")
		_ = encodeJSON(r.Context(), w, map[string]any{
			"message": "go-kit：endpoint 描述业务；transport/http 把 HTTP 映射到 endpoint。",
			"goKitPipeline": []string{
				"endpoint.Endpoint 函数签名统一",
				"transport/http.NewServer 绑定 decode / encode",
				"可与 logging、tracing 等中间件链组合",
			},
			"goKitHighlights": []map[string]string{
				{"title": "微服务工具箱", "detail": "非单体 Web 框架；强调分层与可组合。"},
				{"title": "本示例", "detail": "`/api/health` 走 go-kit HTTP Server；其余路由为对照用标准 Handler。"},
			},
		})
	})

	mux.HandleFunc("/api/items", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			_ = encodeJSON(r.Context(), w, map[string]any{"items": store.list()})
		case http.MethodPost:
			var body struct {
				Title string `json:"title"`
			}
			if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
				w.WriteHeader(http.StatusBadRequest)
				_ = encodeJSON(r.Context(), w, map[string]any{"error": err.Error()})
				return
			}
			t := strings.TrimSpace(body.Title)
			if t == "" || len(t) > 120 {
				w.WriteHeader(http.StatusBadRequest)
				_ = encodeJSON(r.Context(), w, map[string]any{"error": "title: required, 1-120 chars"})
				return
			}
			it := store.add(t)
			w.WriteHeader(http.StatusCreated)
			_ = encodeJSON(r.Context(), w, map[string]any{"item": it})
		default:
			w.WriteHeader(http.StatusMethodNotAllowed)
		}
	})

	mux.HandleFunc("/api/box/inner", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			w.WriteHeader(http.StatusMethodNotAllowed)
			return
		}
		w.Header().Set("X-Feature-Box", "go-kit-handler")
		_ = encodeJSON(r.Context(), w, map[string]any{
			"where": "/api/box/inner",
			"note":  "X-Feature-Box 在标准 Handler 中设置。",
		})
	})

	host := os.Getenv("HOST")
	if host == "" {
		host = "127.0.0.1"
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = "3010"
	}
	addr := host + ":" + port
	log.Println("go-kit 演示：http://" + addr + "/")
	log.Fatal(http.ListenAndServe(addr, mux))
}
