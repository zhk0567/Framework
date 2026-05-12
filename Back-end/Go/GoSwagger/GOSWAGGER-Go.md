# Back-end / Go / go-swagger（形态占位）

## 工具简介

**go-swagger** 围绕 **Swagger 2.0 / OpenAPI 2** 提供 **服务端生成、客户端生成、校验中间件、规范校验** 等 Go 工具链。

- 项目主页：<https://goswagger.io/>

## 在本仓库中的角色

本目录为 **`net/http` 形态占位**，对齐 **`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页**；**不提交** `swagger generate server` 的完整生成树。默认 **http://127.0.0.1:3091/**。

## 环境要求

- **Go 1.21+**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\GoSwagger'
go mod tidy
go run .
```

## 与仓库内其它后端对照

- **OapiCodegen**：本仓库 [`../OapiCodegen`](../OapiCodegen) 以 **OpenAPI 3 + Go** 为主示例；**go-swagger** 更贴近 **OpenAPI 2** 与 **Swagger 注解/注释** 工作流。  
- **OpenAPI Generator**：见 [`Back-end/Node/OpenApiGenerator`](../../Node/OpenApiGenerator)。
