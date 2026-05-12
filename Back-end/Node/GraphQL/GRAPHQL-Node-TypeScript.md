# Back-end / Node / GraphQL（Mercurius）

## 框架简介

**GraphQL** 是 **查询语言 + 运行时**；**Mercurius** 是 **Fastify** 的 GraphQL 适配器（替代已弃用的 `fastify-ggraphql` 路线），支持 **JIT、订阅、 federation** 等扩展。

- Mercurius 文档：<https://mercurius.dev/>

## 在本仓库中的角色

**Fastify 4 + Mercurius**：**`GET /api/health`**、**`GET /api/info`**（REST）；**`POST /graphql`**（GraphQL）；**`/graphiql`**（开发态 IDE）。**`public/index.html`** 为呈现页。默认 **http://127.0.0.1:3088/**

## 环境要求

- **Node.js 20+**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\GraphQL'
npm install
npm run start
```

浏览器打开 **http://127.0.0.1:3088/** ，GraphiQL：**http://127.0.0.1:3088/graphiql**

## 与仓库内其它后端对照

- **tRPC**：对照 **Schema 语言（SDL）** 与 **TypeScript procedure**。  
- **REST（Express / Fastify）**：对照 **多 URL 资源** 与 **单一 GraphQL 端点**。
