# Back-end / Go / Fiber（Go）

## 框架简介

**Fiber** 受 **Express** 启发，基于 **Fasthttp** 实现，强调 **零内存分配** 与 **高吞吐**；`fiber.Ctx` 提供熟悉的链式 API。适合 IO 密集、延迟敏感 API；若需与标准库 `http.Handler` 深度互操作，需阅读官方互操作章节。

- 官方网站：<https://gofiber.io/>
- 文档：<https://docs.gofiber.io/>

## 在本仓库中的角色

独立 Go 模块；默认端口 **3003**。与其它 Go 示例相同，提供对齐的 **`/api/*`** 与呈现页，用于对照 **Fiber 与 Gin/Echo** 在上下文 API、中间件与错误处理上的差异。

## 与 Node / 其它 Go 后端的关系

- 默认端口 **3003**；见根目录 [README.md](../../../README.md)。

## 环境要求

- Go 1.21+（以 `go.mod` 为准）。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Fiber'
go mod tidy
go run .
```

访问 **http://127.0.0.1:3003/**。

## 延伸阅读

- Fiber 与 net/http 互操作：<https://docs.gofiber.io/api/middleware/adaptor>
