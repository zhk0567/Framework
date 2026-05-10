package main

import (
	"crypto/rand"
	"encoding/hex"
	"embed"
	"encoding/json"
	"log"
	"net/http"
	"os"
	"sync"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
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
	it := item{
		ID:        newID(),
		Title:     title,
		CreatedAt: time.Now().UTC(),
	}
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

type createItemBody struct {
	Title string `json:"title" binding:"required,min=1,max=120"`
}

func main() {
	if os.Getenv("GIN_MODE") == "" {
		gin.SetMode(gin.DebugMode)
	}

	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		ExposeHeaders:    []string{"X-Feature-Box"},
		AllowCredentials: false,
	}))

	store := &itemsStore{
		items: []item{
			{ID: "seed-1", Title: "示例条目（内存 + mutex）", CreatedAt: time.Now().UTC()},
		},
	}

	r.GET("/", func(c *gin.Context) {
		c.Data(http.StatusOK, "text/html; charset=utf-8", indexHTML)
	})

	api := r.Group("/api")
	{
		api.GET("/health", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"ok":      true,
				"service": "framework-back-end-gin",
			})
		})

		api.GET("/demo/lifecycle", func(c *gin.Context) {
			c.Header("x-gin-demo", "handler-after-middleware")
			c.JSON(http.StatusOK, gin.H{
				"message": "以下为 Gin 处理 HTTP 请求时的常见环节（与 Node 框架命名不同但角色类似）",
				"ginPipeline": []string{
					"Engine 接收请求",
					"全局 / 路由组 Middleware（c.Next() 链）",
					"路由匹配与 Handler",
					"绑定与校验（ShouldBindJSON + binding tag）",
					"通过 Context 写响应（JSON / Header / Status）",
				},
				"ginHighlights": []gin.H{
					{"title": "Engine 与 RouterGroup", "detail": "Default() 自带 Logger、Recovery；路由可按 Group 挂载并复用前缀与中间件。"},
					{"title": "Context", "detail": "gin.Context 贯穿一次请求，封装 Request/Writer、绑定、渲染与参数读取。"},
					{"title": "binding 标签", "detail": "与 validator 对齐的 struct tag，在 ShouldBind* 时完成校验，错误由框架格式化为 400。"},
					{"title": "并发与数据", "detail": "本示例用 sync.Mutex 保护内存切片，展示典型共享状态写法（生产环境多换 DB）。"},
				},
			})
		})

		api.GET("/items", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{"items": store.list()})
		})

		api.POST("/items", func(c *gin.Context) {
			var body createItemBody
			if err := c.ShouldBindJSON(&body); err != nil {
				c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
				return
			}
			it := store.add(body.Title)
			c.JSON(http.StatusCreated, gin.H{"item": it})
		})

		box := api.Group("/box")
		box.Use(func(c *gin.Context) {
			c.Writer.Header().Set("X-Feature-Box", "gin-group-middleware")
			c.Next()
		})
		box.GET("/inner", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"where": "/api/box/inner",
				"note":  "X-Feature-Box 由仅作用于 /api/box 路由组的中间件写入。",
			})
		})
	}

	host := os.Getenv("HOST")
	if host == "" {
		host = "127.0.0.1"
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = "3002"
	}
	addr := host + ":" + port

	log.Printf("Gin 演示已启动：呈现页 http://%s/  |  API 前缀 /api", addr)
	if err := r.Run(addr); err != nil {
		log.Fatal(err)
	}
}
