# Back-end / Go / Iris（Go）

独立 Go 模块；路由与仓库内其他 Go / Node 后端对齐，默认端口 **3007**。

## 特点速览

- **Party 子路由**：`/api` 与 `/api/box` 分层；组级中间件写入 `X-Feature-Box`。  
- **Context API**：`ReadJSON`、`JSON`、`ContentType` 等。  
- **本示例**：`go:embed` 呈现页、全局 CORS、`x-iris-demo` 响应头对照 Gin / Echo 的 lifecycle 页。

## 运行

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Iris'
go mod tidy
go run .
```

访问 `http://127.0.0.1:3007/`。可选环境变量见 `.env.example`。

## 主要 API 一览

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/` | 嵌入的呈现页 |
| GET | `/api/health` | 健康检查 |
| GET | `/api/demo/lifecycle` | 管线说明 + 响应头 `x-iris-demo` |
| GET | `/api/items` | 内存列表 |
| POST | `/api/items` | 创建条目（JSON） |
| GET | `/api/box/inner` | Party 中间件写入 `X-Feature-Box` |

各 Go 示例默认端口见仓库根目录 [README.md](../../../README.md)。
