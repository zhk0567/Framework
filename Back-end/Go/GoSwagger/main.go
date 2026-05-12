package main

import (
	"embed"
	"encoding/json"
	"log"
	"net/http"
	"os"
)

//go:embed public/index.html
var indexHTML []byte

func writeJSON(w http.ResponseWriter, status int, v any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(v)
}

func cors(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "*")
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func main() {
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
			"service": "framework-back-end-go-swagger-guide",
			"note":    "HTTP 形态占位；服务端生成与校验请用 go-swagger（见 GOSWAGGER-Go.md）。",
		})
	})
	mux.HandleFunc("/api/info", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
			return
		}
		writeJSON(w, http.StatusOK, map[string]any{
			"message": "go-swagger：从 Swagger 2.0 / OpenAPI 2 生成 **服务端桩、客户端、校验中间件** 等；与 oapi-codegen、openapi-generator 同属工具链。",
			"highlights": []map[string]string{
				{"title": "swagger generate server", "detail": "从 spec 生成可编译的 Go 服务骨架。"},
				{"title": "与 OapiCodegen 对照", "detail": "本仓库 Go 侧另有 OapiCodegen 子工程；本目录仅占位 HTTP。"},
			},
		})
	})

	host := os.Getenv("HOST")
	if host == "" {
		host = "127.0.0.1"
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = "3091"
	}
	addr := host + ":" + port
	log.Printf("go-swagger（形态占位）http://%s/", addr)
	log.Fatal(http.ListenAndServe(addr, cors(mux)))
}
