# Back-end / Go / Chi（Go）

## 框架简介

**chi**（`go-chi/chi`）是构建在 **标准库 `net/http`** 之上的 **轻量、可组合路由器**：设计哲学是**小而可预测**——每个中间件只做一件事，通过 `r.Use` 与 `r.Route` / `r.Group` 组织子树。适合希望 **少魔法、易审计** 的微服务或网关，也是许多 Go 项目从 `http.ServeMux` 迁出的第一步。

- 项目主页：<https://github.com/go-chi/chi>
- 文档：<https://pkg.go.dev/github.com/go-chi/chi/v5>

## 在本仓库中的角色

独立 Go 模块；默认端口 **3005**。示例内置 **RequestID、Logger、Recoverer**、`go-chi/cors`，以及子路由 **`/api/box`** 写响应头；**HTTP 路径与 JSON** 与 `Back-end/Go/Gin` 等同级目录对齐，便于对照。

## 与 Node / 其它 Go 后端的关系

- 端口 **3005**；总表见根目录 [README.md](../../../README.md)。  
- **路由对齐**：`/api/health`、`/api/demo/lifecycle`、`/api/items`、`/api/box/inner`。

## 这个子项目想说明什么（chi 特点）

| 能力 | 在本示例中的位置 |
|------|------------------|
| **标准库友好** | `chi` 与 `http.Handler` 无缝衔接 |
| **中间件链** | 内置中间件 + 自定义子组 |
| **子路由** | `/api/box` 演示路由级行为 |

## 环境要求

- **Go**：1.21+（与 `go.mod` 一致）。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Chi'
go mod tidy
go run .
```

访问 **http://127.0.0.1:3005/**。

## 延伸阅读

- chi 中间件列表：<https://github.com/go-chi/chi#middlewares>
