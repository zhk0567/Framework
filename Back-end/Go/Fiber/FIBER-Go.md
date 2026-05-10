# Back-end / Go / Fiber（Go）

本目录为独立 Go 模块；与 [GIN-Go.md](../Gin/GIN-Go.md) 等子项目**路由对齐**（`/api/*`），默认端口 **3003**。

## 特点速览

- **Express 风格**：`app.Get` / `app.Group`、中间件 `Use` 链式组合。  
- **性能**：默认基于 **fasthttp**（与 Gin 的 net/http 取向不同，可对照文档）。  
- **本示例**：`go:embed` 呈现页、CORS、`BodyParser`、路由组写响应头。

## 运行

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Fiber'
go mod tidy
go run .
```

浏览器访问 `http://127.0.0.1:3003/`。

