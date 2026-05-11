# Back-end / Go / go-kit（Go）

## 框架简介

**Go kit** 是 **Peter Bourgon** 倡导的 **微服务工具集**（而非「全家桶框架」）：核心抽象是 **`endpoint`（业务边界）**、**`transport`（HTTP/gRPC 等）** 与 **可组合中间件**（日志、指标、追踪）。鼓励显式分层与可测试性；学习曲线偏「**先理解模式再写代码**」。

- 官方网站：<https://gokit.io/>
- 源码：<https://github.com/go-kit/kit>

## 在本仓库中的角色

独立 Go 模块；**`/api/health`** 使用 `github.com/go-kit/kit/transport/http` 的 **`NewServer`** 与 **`endpoint`**，其余路由为标准 **`http.ServeMux`** + **`HandlerFunc`**，默认端口 **3010**。演示 **endpoint 分层心智** 与其余「单框架路由」对照。

## 特点速览

- **分层心智**：`endpoint` 描述业务；`decode` / `encode` 把 HTTP 映射到 endpoint（本示例仅在 health 上完整演示）。  
- **可组合**：logging、metrics、tracing 等以中间件形式包在 `endpoint` 外即可扩展。  
- **本示例**：`go:embed` 呈现页；`/api/demo/lifecycle` 为手写 Handler，设置 `x-go-kit-demo` 便于与其它栈对照。

## 运行

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Go-kit'
go mod tidy
go run .
```

访问 `http://127.0.0.1:3010/`。可选环境变量见 `.env.example`。

## 主要 API 一览

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/` | 嵌入的呈现页 |
| GET | `/api/health` | 健康检查（go-kit `transport/http`） |
| GET | `/api/demo/lifecycle` | 管线说明 + 响应头 `x-go-kit-demo` |
| GET | `/api/items` | 内存列表 |
| POST | `/api/items` | 创建条目（JSON） |
| GET | `/api/box/inner` | `X-Feature-Box` |

各 Go 示例默认端口见仓库根目录 [README.md](../../../README.md)。
