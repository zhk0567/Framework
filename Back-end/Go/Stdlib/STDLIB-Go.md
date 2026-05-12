# Back-end / Go / 标准库 net/http（Go）

## 框架简介

**`net/http`** 是 Go 标准库提供的 **HTTP 服务端与客户端** 实现：`ListenAndServe`、`ServeMux`（Go 1.22+ 亦支持带方法的 pattern）、`Handler` / `HandlerFunc`、请求上下文与 `ResponseWriter`。所有第三方 Web 框架最终都落回 **`http.Handler`** 抽象；理解标准库有助于阅读 **Gin、Chi、Fiber** 等源码与中间件链。

- 官方文档：<https://pkg.go.dev/net/http>

## 在本仓库中的角色

独立 Go 模块：**不依赖任何第三方路由**，用 **`http.NewServeMux`** 注册 **`/`**、**`/api/*`**；**`http.StripPrefix`** 演示 **`/api/box/*`** 子树；自写 **CORS** 包装 `Handler`。默认端口 **3020**（与 Gin `3002`–go-kit `3010`、扩展 Go `3021`–`3025` 错开）。

## 与 Node / 其它 Go 后端的关系

- **路由对齐**：`/api/health`、`/api/demo/lifecycle`、`/api/items`、`/api/box/inner`。  
- **呈现页**：`//go:embed public/index.html`。

## 环境要求

- **Go**：1.21+（与 `go.mod` 一致）。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Stdlib'
go mod tidy
go run .
```

浏览器：**http://127.0.0.1:3020/**

## 可选环境变量

见 `.env.example`（`HOST`、`PORT`）。

## 与仓库内其它子项目对照

- **Chi / GorillaMux**：对照「手写路径」与「路由器树」的差异。  
- **Gin**：对照 `gin.Context` 与裸 `http.ResponseWriter` 的封装边界。

## 延伸阅读

- Go 1.22+ `ServeMux` 方法路由：<https://go.dev/blog/routing-enhancements>
