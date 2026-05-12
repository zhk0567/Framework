# Back-end / Node / Strapi（形态占位）

## 框架简介（Strapi 本体）

**Strapi** 是全球流行的开源 **无头 CMS（Headless CMS）**：用管理后台配置 **内容类型（Content-Types）**，自动生成 **REST / GraphQL API**，支持 **角色权限、国际化、插件市场、媒体库** 等。默认带 **React Admin**，生产环境需连接 **PostgreSQL / MySQL / SQLite** 等数据库并执行迁移。

- 官方网站：<https://strapi.io/>
- 文档：<https://docs.strapi.io/>

## 在本仓库中的角色

本目录为**独立 Node 工程**：依赖与锁文件仅存在于 `Back-end/Node/Strapi`，请勿在仓库根目录执行 `npm install`。因完整 Strapi 体积与数据库依赖不适合作为轻量对照子目录，此处仅用 **Node `http`** 对齐 **`/api/health`** 与呈现页；**完整 CMS 请用官方 CLI**（见下文）。

## 为何不是「完整 Strapi」

**Strapi** 作为无头 CMS，默认包含 **管理后台、数据库、迁移、插件与构建管线**，`node_modules` 体量与首次安装时间远大于本仓库其它对照示例。为与本仓库 **Node 对照后端** 在「名称可见 + 端口 + **`/api/health`**」上对齐，本目录用 **Node 内置 `http`** 提供最小 **`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页**。

## 环境要求

- Node.js **20+**（仅用于运行本占位服务；**完整 Strapi** 请遵循其官方 Node 版本说明）

## 安装与运行占位服务（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Strapi'
npm install
npm run dev
```

呈现页：**http://127.0.0.1:3016/**

## 创建完整 Strapi 应用（建议在仓库外空目录）

```powershell
npx create-strapi-app@latest my-strapi
```

创建完成后，可将 **内容类型 API、权限策略、生命周期钩子** 与本仓库 `Back-end/Node/NestJS`（模块化 + DTO）或 `Back-end/Node/Fastify`（插件 + Schema）对照。

## 端口

默认 **3016**；汇总见根目录 [README.md](../../../README.md)。
