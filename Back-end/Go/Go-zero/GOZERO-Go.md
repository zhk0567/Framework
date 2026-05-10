# Back-end / Go / go-zero（Go）

独立 Go 模块；使用 `github.com/zeromicro/go-zero/rest` 的最小 HTTP 演示，默认端口 **3008**。

## 特点速览

- **`rest.MustNewServer`** + **`AddRoute`**：与完整 goctl 工程相比刻意保持精简，便于对照路由形态。  
- **`httpx.OkJson` / `WriteJson`**：JSON 输出与错误体风格与 go-zero 文档一致。  
- **本示例**：`go:embed` 呈现页、`x-gozero-demo` 响应头、手写 POST 校验（与 Gin binding 对照）。

## 运行

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Go-zero'
go mod tidy
go run .
```

访问 `http://127.0.0.1:3008/`。可选环境变量见 `.env.example`。

## 主要 API 一览

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/` | 嵌入的呈现页 |
| GET | `/api/health` | 健康检查 |
| GET | `/api/demo/lifecycle` | 管线说明 + 响应头 `x-gozero-demo` |
| GET | `/api/items` | 内存列表 |
| POST | `/api/items` | 创建条目（JSON） |
| GET | `/api/box/inner` | 路由内设置 `X-Feature-Box` |

各 Go 示例默认端口见仓库根目录 [README.md](../../../README.md)。
