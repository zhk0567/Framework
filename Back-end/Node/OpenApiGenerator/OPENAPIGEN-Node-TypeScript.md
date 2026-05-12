# Back-end / Node / OpenAPI Generator（形态占位）

## 工具简介

**OpenAPI Generator** 从 **OpenAPI 3**（或 Swagger 2）规范生成 **服务端桩、客户端 SDK、文档** 等，支持大量语言与框架。

- 项目主页：<https://openapi-generator.tech/>

## 在本仓库中的角色

本目录为 **Node `http` + Express 形态占位**，对齐 **`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页**；**不提交**生成后的多语言工程树。默认 **http://127.0.0.1:3092/**。完整 CLI 见下文。

## 环境要求

- **Node.js 20+**（用于占位服务）；生成器可用 **npx** 或本机 **Java** 运行 **openapi-generator-cli**。

## 安装与运行占位服务（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\OpenApiGenerator'
npm install
npm run start
```

## 使用 openapi-generator-cli（示例）

在**空目录**执行（需网络拉取 CLI；版本以 npm 为准）：

```powershell
npx @openapitools/openapi-generator-cli version
npx @openapitools/openapi-generator-cli generate -i https://petstore3.swagger.io/api/v3/openapi.json -g go -o out-go
```

## 与仓库内其它后端对照

- **Go OapiCodegen**：本仓库 Go 侧已有 **手写 + 生成** 对照子工程；本目录占位 **「多语言生成器」** 叙事。  
- **go-swagger**：见 [`Back-end/Go/GoSwagger`](../../Go/GoSwagger)。
