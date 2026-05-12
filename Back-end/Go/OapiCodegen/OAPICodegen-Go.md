# Back-end / Go / OpenAPI · oapi-codegen（契约 + 手写实现）

## 工具链简介

**OpenAPI（Swagger）** 是描述 HTTP API 的 **契约格式**。**oapi-codegen** 可根据 `openapi.yaml` 生成 **Go 类型、`ServerInterface`、路由注册** 等，使实现与文档同源；**go-swagger** 则提供另一套生成、校验与运行时工具链。

- oapi-codegen：<https://github.com/oapi-codegen/oapi-codegen>  
- OpenAPI 规范：<https://spec.openapis.org/oas/latest.html>

## 在本仓库中的角色

- 仓库根下 **`openapi.yaml`**：最小片段（含 **`/api/health`** 契约示例）。  
- **`GET /api/openapi`**：返回嵌入的 YAML，便于浏览器或工具拉取。  
- **其余路由**：仍用 **手写 `net/http`** 与 **其它 Go 子目录** 对齐（`/api/demo/lifecycle`、`/api/items`、`/api/box/inner`），便于先理解 **契约与实现分离**，再在本地用 **`go generate`** 或命令行生成代码对照。

默认端口 **3025**。

## 使用 oapi-codegen 生成代码（示例命令）

在 **`Back-end/Go/OapiCodegen`** 下执行（需已安装 Go，且能访问模块代理）：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\OapiCodegen'
go run github.com/oapi-codegen/oapi-codegen/v2/cmd/oapi-codegen@latest -generate types,gorilla -package api openapi.yaml
```

生成文件后可将 **`StrictServerInterface`** 与 `main.go` 中的手写逻辑逐步替换合并（具体 `-generate` 选项以官方 README 为准）。

**go-swagger**：若需 `swagger serve`、`validate` 等，见 <https://goswagger.io/>。

## 环境要求

- Go 1.21+

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\OapiCodegen'
go mod tidy
go run .
```

浏览器：**http://127.0.0.1:3025/** · 契约：**http://127.0.0.1:3025/api/openapi**

## 与仓库内其它子项目对照

- **Gin / Chi**：手写路由与生成路由的取舍。  
- **Kratos**：常与 **protobuf** 一体；OpenAPI 路线更偏 **REST 文档驱动**。
