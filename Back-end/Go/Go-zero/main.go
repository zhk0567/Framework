package main

import (
	"crypto/rand"
	"embed"
	"encoding/hex"
	"encoding/json"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/zeromicro/go-zero/rest"
	"github.com/zeromicro/go-zero/rest/httpx"
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

	port := 3008
	if ps := os.Getenv("PORT"); ps != "" {
		if v, err := strconv.Atoi(ps); err == nil {
			port = v
		}
	}
	host := os.Getenv("HOST")
	if host == "" {
		host = "127.0.0.1"
	}

	srv := rest.MustNewServer(rest.RestConf{
		ServiceName: "framework-gozero",
		Host:        host,
		Port:        port,
	})
	defer srv.Stop()

	srv.AddRoute(rest.Route{
		Method: http.MethodGet,
		Path:   "/",
		Handler: func(w http.ResponseWriter, _ *http.Request) {
			w.Header().Set("Content-Type", "text/html; charset=utf-8")
			_, _ = w.Write(indexHTML)
		},
	})
	srv.AddRoute(rest.Route{
		Method: http.MethodGet,
		Path:   "/api/health",
		Handler: func(w http.ResponseWriter, _ *http.Request) {
			httpx.OkJson(w, map[string]any{"ok": true, "service": "framework-back-end-go-zero"})
		},
	})
	srv.AddRoute(rest.Route{
		Method: http.MethodGet,
		Path:   "/api/demo/lifecycle",
		Handler: func(w http.ResponseWriter, _ *http.Request) {
			w.Header().Set("x-gozero-demo", "go-zero-handler")
			httpx.OkJson(w, map[string]any{
				"message": "go-zero rest：MustNewServer + AddRoute；httpx 输出 JSON。",
				"goZeroPipeline": []string{
					"rest.RestConf 声明 Host/Port/服务名",
					"rest.MustNewServer 创建 HTTP 服务",
					"AddRoute 注册标准 http.HandlerFunc",
					"httpx.OkJson / WriteJson 等工具方法",
				},
				"goZeroHighlights": []map[string]string{
					{"title": "云原生微服务", "detail": "与 goctl、RPC、限流熔断等组件同属 go-zero 体系。"},
					{"title": "本示例", "detail": "刻意保持单文件最小 HTTP，便于与 Gin 等对照。"},
				},
			})
		},
	})
	srv.AddRoute(rest.Route{
		Method: http.MethodGet,
		Path:   "/api/items",
		Handler: func(w http.ResponseWriter, _ *http.Request) {
			httpx.OkJson(w, map[string]any{"items": store.list()})
		},
	})
	srv.AddRoute(rest.Route{
		Method: http.MethodPost,
		Path:   "/api/items",
		Handler: func(w http.ResponseWriter, r *http.Request) {
			var body struct {
				Title string `json:"title"`
			}
			if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
				httpx.WriteJson(w, http.StatusBadRequest, map[string]any{"error": err.Error()})
				return
			}
			t := strings.TrimSpace(body.Title)
			if t == "" || len(t) > 120 {
				httpx.WriteJson(w, http.StatusBadRequest, map[string]any{"error": "title: required, 1-120 chars"})
				return
			}
			it := store.add(t)
			httpx.WriteJson(w, http.StatusCreated, map[string]any{"item": it})
		},
	})
	srv.AddRoute(rest.Route{
		Method: http.MethodGet,
		Path:   "/api/box/inner",
		Handler: func(w http.ResponseWriter, _ *http.Request) {
			w.Header().Set("X-Feature-Box", "go-zero-route")
			httpx.OkJson(w, map[string]any{
				"where": "/api/box/inner",
				"note":  "X-Feature-Box 在专用路由 Handler 内设置（与 Group 中间件对照）。",
			})
		},
	})

	log.Printf("go-zero 演示：http://%s:%d/", host, port)
	srv.Start()
}
