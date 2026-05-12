# Back-end / Node / Apollo Router · Federation v2（形态占位）

## 工具简介

**Apollo Router** 是面向 **GraphQL Federation** 的 **Rust 网关**：在 **Federation v2（`@link`）** 模型下聚合多个 **子图（subgraph）** 服务，负责查询规划、授权扩展点与运维可观测性。与在 **单进程** 内用 **schema stitch** 合并 SDL 的教学示例（见 [`../GraphQLFederation`](../GraphQLFederation)）不同，Router 面向 **多服务、多团队** 的生产拓扑。

- Router 文档：<https://www.apollographql.com/docs/router>  
- Federation 概述：<https://www.apollographql.com/docs/graphos/schema-design/federated-schemas/overview>

## 在本仓库中的角色

本目录为 **Node `http` 占位**：对齐 **`/api/health`**、**`/api/info`** 与呈现页；**不包含** Router 二进制或真实子图。完整联邦请在仓库外按官方文档部署 **Router + 各 subgraph**。

## 安装与运行占位（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\ApolloRouter'
npm install
npm run dev
```

呈现页：**http://127.0.0.1:3123/**

## 与 `GraphQLFederation` 对照阅读

| 主题 | [`GraphQLFederation`](../GraphQLFederation) | Apollo Router + Fed v2 |
|------|---------------------------------------------|-------------------------|
| 合并方式 | `stitchSchemas` 静态合并 | 网关 + 子图各自 SDL |
| 典型部署 | 单 Fastify 进程 | Router 进程 + 多个 subgraph URL |
| 本仓库 | 可运行示例 | 文档链 + 本占位 |

## 端口

默认 **3123**；汇总见根目录 [README.md](../../../README.md)。
