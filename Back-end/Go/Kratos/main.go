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

	"github.com/go-kratos/kratos/v2"
	khttp "github.com/go-kratos/kratos/v2/transport/http"
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

	addr := "127.0.0.1:3009"
	if p := os.Getenv("PORT"); p != "" {
		if h := os.Getenv("HOST"); h != "" {
			addr = h + ":" + p
		} else {
			addr = "127.0.0.1:" + p
		}
	}

	srv := khttp.NewServer(khttp.Address(addr))

	srv.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			w.WriteHeader(http.StatusMethodNotAllowed)
			return
		}
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		_, _ = w.Write(indexHTML)
	})

	srv.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			w.WriteHeader(http.StatusMethodNotAllowed)
			return
		}
		writeJSON(w, http.StatusOK, map[string]any{"ok": true, "service": "framework-back-end-kratos"})
	})

	srv.HandleFunc("/api/demo/lifecycle", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			w.WriteHeader(http.StatusMethodNotAllowed)
			return
		}
		w.Header().Set("x-kratos-demo", "kratos-transport-http")
		writeJSON(w, http.StatusOK, map[string]any{
			"message": "Kratos：transport/http 在 net/http 之上提供 Server；可与 gRPC 并存。",
			"kratosPipeline": []string{
				"khttp.NewServer(Address)",
				"HandleFunc 注册标准 Handler",
				"khttp.Server 作为 kratos.App 的一个 Server",
				"Run 时统一生命周期与信号处理",
			},
			"kratosHighlights": []map[string]string{
				{"title": "企业级微服务", "detail": "B 站开源，强调规范、观测与多协议。"},
				{"title": "本示例", "detail": "单 HTTP Server 最小演示；完整项目见 kratos-layout。"},
			},
		})
	})

	srv.HandleFunc("/api/items", func(w http.ResponseWriter, r *http.Request) {
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
			w.WriteHeader(http.StatusMethodNotAllowed)
		}
	})

	srv.HandleFunc("/api/box/inner", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			w.WriteHeader(http.StatusMethodNotAllowed)
			return
		}
		w.Header().Set("X-Feature-Box", "kratos-handlefunc")
		writeJSON(w, http.StatusOK, map[string]any{
			"where": "/api/box/inner",
			"note":  "X-Feature-Box 在 Handler 内设置（可换为 Filter / Middleware 链）。",
		})
	})

	app := kratos.New(kratos.Server(srv))
	log.Println("Kratos 演示：http://" + addr + "/")
	if err := app.Run(); err != nil {
		log.Fatal(err)
	}
}

func writeJSON(w http.ResponseWriter, status int, v any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Expose-Headers", "X-Feature-Box, x-kratos-demo")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(v)
}
