# Back-end / Go / Kratos（Go）

## 框架简介

**Kratos** 是 **Bilibili** 开源的 **Go 微服务框架**：提供 **传输层（HTTP/gRPC）**、**服务发现、中间件、日志、配置、依赖注入** 等与 **protobuf** 紧密集成的工程化能力。官方推荐 **`kratos-layout`** 作为完整服务仓库模板；本目录仅挂载 **HTTP Server** 以保持与其它示例可比。

- 官方网站：<https://go-kratos.dev/>
- 文档：<https://go-kratos.dev/docs/>

## 在本仓库中的角色

独立 Go 模块；使用 `github.com/go-kratos/kratos/v2` 的 **`transport/http`** 与 **`kratos.App`**，默认监听 **127.0.0.1:3009**。

## 特点速览

- **`khttp.NewServer`** + **`HandleFunc`**：与标准 `net/http` 签名一致，便于从裸 HTTP 迁移。  
- **`kratos.New` + `app.Run()`**：统一生命周期与信号处理；本示例仅挂一个 HTTP Server。  
- **本示例**：`go:embed` 呈现页、`x-kratos-demo` 响应头；完整微服务项目可参考官方 `kratos-layout`。

## 运行

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Kratos'
go mod tidy
go run .
```

访问 `http://127.0.0.1:3009/`。可选环境变量见 `.env.example`。

## 主要 API 一览

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/` | 嵌入的呈现页 |
| GET | `/api/health` | 健康检查 |
| GET | `/api/demo/lifecycle` | 管线说明 + 响应头 `x-kratos-demo` |
| GET | `/api/items` | 内存列表 |
| POST | `/api/items` | 创建条目（JSON） |
| GET | `/api/box/inner` | `X-Feature-Box` 在 Handler 内设置 |

各 Go 示例默认端口见仓库根目录 [README.md](../../../README.md)。
