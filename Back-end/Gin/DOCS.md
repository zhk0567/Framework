# Back-end / Gin（Go）

本目录为**独立 Go 模块**：含 `go.mod` 与源码，**不使用 Node**；请在**本目录**执行 `go mod tidy`（生成或更新 `go.sum`）后执行 `go run .`。

## 与 Node 后端子项目的关系

- **默认端口 `3002`**，可与 `Fastify`（3000）、`NestJS`（3001）同时运行。  
- **路由对齐**：`/api/health`、`/api/demo/lifecycle`、`/api/items`、`/api/box/inner`，便于同一套 `fetch` 心智模型对照。  
- **呈现页**：通过 `go:embed` 将 `public/index.html` 打进二进制，`GET /` 直接返回 HTML（不依赖工作目录下的静态文件服务配置）。

## 这个子项目想说明什么（Gin / Go 特点）

| 能力 | 在本示例中的位置 |
|------|------------------|
| **Engine 与默认中间件** | `gin.Default()`（Logger、Recovery） |
| **RouterGroup + 路由级中间件** | `/api/box` 子组在 `c.Next()` 前写入 `X-Feature-Box` |
| **Context 与 JSON** | `ShouldBindJSON`、`c.JSON` |
| **binding 与校验** | `createItemBody` 的 struct tag → 失败返回 400 |
| **并发安全** | `sync.Mutex` 保护内存 `items` |
| **嵌入静态资源** | `//go:embed public/index.html` |
| **跨域** | `github.com/gin-contrib/cors` |

## 环境要求

- **Go**：1.21 或更高（与 `go.mod` 中 `go` 版本一致；Gin 本体系要求不低于 Go 1.20）。

在 PowerShell 中检查：

```powershell
go version
```

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Gin'
go mod download
go run .
```

浏览器打开终端打印的地址（默认可访问 `http://127.0.0.1:3002/`）。

可选环境变量见 `.env.example`（PowerShell 示例）：

```powershell
$env:PORT = '3003'
$env:HOST = '127.0.0.1'
go run .
```

> Go 程序不会自动读取 `.env` 文件；若需文件化配置，可自行引入第三方库或在启动脚本中设置环境变量。

## 编译为可执行文件

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Gin'
go build -o gin-demo.exe .
.\gin-demo.exe
```

## 主要 API 一览

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/` | 嵌入的呈现页 |
| GET | `/api/health` | 健康检查 |
| GET | `/api/demo/lifecycle` | Gin 管线说明 + 响应头 `x-gin-demo` |
| GET | `/api/items` | 内存列表 |
| POST | `/api/items` | 创建条目（JSON + binding） |
| GET | `/api/box/inner` | 路由组中间件写入 `X-Feature-Box` |

## 目录结构

```
Gin/
  go.mod
  main.go
  DOCS.md             # 本目录说明（非 README 命名）
  public/index.html   # 由 go:embed 嵌入
```

## 与前端联调（可选）

在 Vite 子项目中将 `/api` 代理到 `http://127.0.0.1:3002`（注意端口）。
