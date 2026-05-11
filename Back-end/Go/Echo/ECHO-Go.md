# Back-end / Go / Echo（Go）

## 框架简介

**Echo** 是 **Labstack** 维护的高性能 Go Web 框架：API 风格接近 **Express**（上下文 `echo.Context`、路由组、中间件链），内置 **JSON 绑定、JWT、CORS** 等常用中间件。相比仅路由器方案，Echo 提供更完整的「**微型框架**」体验。

- 官方网站：<https://echo.labstack.com/>
- 源码：<https://github.com/labstack/echo>

## 在本仓库中的角色

独立 Go 模块；默认端口 **3004**。本示例演示 Echo 的 **路由注册、中间件、JSON 响应与静态/嵌入呈现页**，并与 Gin、Fiber、chi 等目录保持 **同一套 `/api/*` 路径**，便于 `fetch` 对照。

## 与 Node / 其它 Go 后端的关系

- 默认端口 **3004**；见根目录 [README.md](../../../README.md)。  
- 路由形状与其它 `Back-end/Go/*` 一致。

## 环境要求

- Go 1.21+（以 `go.mod` 为准）。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Echo'
go mod tidy
go run .
```

访问 **http://127.0.0.1:3004/**。

## 延伸阅读

- Echo 中间件：<https://echo.labstack.com/middleware>
