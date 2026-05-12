# Back-end / Node / gRPC-Web + Envoy（形态占位）

## 主题简介

**gRPC-Web** 让浏览器以受限协议访问 **类 gRPC** 服务（Unary 成熟；流式能力依实现而定）。浏览器侧通常不直连 gRPC，而是经 **Envoy**（或其它支持 **grpc_web** filter 的代理）将 **gRPC-Web** 转为后端 **标准 gRPC**。

- gRPC-Web 协议说明：<https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-WEB.md>  
- Envoy `grpc_web` 过滤器：<https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/grpc_web_filter>

## 在本仓库中的角色

本目录为 **Node `http` 占位**：对齐 **`/api/health`**、**`/api/info`** 与呈现页。**不包含** Envoy 配置或 gRPC-Web 代理进程。完整链路请在仓库外按文档搭建 **Envoy + gRPC 后端**（可与 [`../Grpc`](../Grpc) 的 gRPC 端口思路对照）。

## 安装与运行占位（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\GrpcWeb'
npm install
npm run dev
```

呈现页：**http://127.0.0.1:3124/**

## 与 `Grpc` 子目录对照

| 能力 | [`Grpc`](../Grpc) | gRPC-Web + Envoy（本目录文档） |
|------|-------------------|--------------------------------|
| 调用方 | Node `@grpc/grpc-js`、同机 REST | 浏览器经 HTTP 到 Envoy |
| 本仓库可运行代码 | Unary + Express 呈现页 | 仅本占位 HTTP；网关见官方 |

## 端口

默认 **3124**；汇总见根目录 [README.md](../../../README.md)。
