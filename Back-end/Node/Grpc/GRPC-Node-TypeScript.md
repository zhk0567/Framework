# Back-end / Node / gRPC（@grpc/grpc-js）

## 框架简介

**gRPC** 基于 **HTTP/2** 与 **Protocol Buffers**（或其它 codec），常见 **Unary / 流式** RPC。**@grpc/grpc-js** 为 Node 官方纯 JS 实现。

- gRPC Node：<https://grpc.io/docs/languages/node/>

## 在本仓库中的角色

**Express** 提供 **`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页**（默认端口 **3090**）；**gRPC Server** 在同一进程监听 **`GRPC_PORT`（默认 30900）**，服务 **`api.v1.Demo`**（`Health`、`Info` Unary）。Proto 见 **`proto/demo.proto`**。

## 环境要求

- **Node.js 20+**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Grpc'
npm install
npm run start
```

## 调用 gRPC（示例）

需安装 **grpcurl**（或自写客户端），例如：

```powershell
grpcurl -plaintext -import-path .\proto -proto demo.proto 127.0.0.1:30900 api.v1.Demo/Health
```

## 与仓库内其它后端对照

- **Connect（Buf）**：Connect 可在 **同一端口** 提供 **gRPC、gRPC-web、Connect JSON**；本目录为 **原生 gRPC 独立端口** 最小 Unary。  
- **Go OapiCodegen**：对照 **HTTP OpenAPI** 与 **IDL + 二进制 RPC** 的交付形态。
