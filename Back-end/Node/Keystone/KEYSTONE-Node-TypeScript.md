# Back-end / Node / Keystone（形态占位）

## 框架简介（Keystone 本体）

**Keystone** 是 **Admin + GraphQL API + Prisma** 向的 **Headless CMS** 框架：用 TypeScript 描述 **列表（Lists）与字段**，生成 **GraphQL** 与后台界面。版本路线与维护节奏请以 **官方文档与仓库** 为准，升级前务必阅读 breaking changes。

- 官方网站：<https://keystonejs.com/>
- 文档：<https://keystonejs.com/docs>

## 在本仓库中的角色

本目录为**独立 Node 工程**：依赖与锁文件仅存在于 `Back-end/Node/Keystone`，请勿在仓库根目录执行 `npm install`。因完整 Keystone 依赖 Prisma 与数据库，此处仅用 **Node `http`** 对齐 **`/api/health`** 与呈现页；**完整 CMS 请用官方 CLI**（见下文）。

## 为何不是「完整 Keystone」

**Keystone** 包含 **GraphQL 层、Admin、Prisma schema 与迁移**，不适合作为本仓库「并排数十个」的完整子树。本目录用 **Node 内置 `http`** 提供最小 **`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页**。

## 环境要求

- Node.js **20+**（占位服务）；**完整 Keystone** 请遵循官方要求。

## 安装与运行占位服务（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Keystone'
npm install
npm run dev
```

呈现页：**http://127.0.0.1:3117/**

## 创建完整 Keystone 应用（建议在仓库外空目录）

```powershell
npm create keystone-app@latest
```

创建完成后，可将 **GraphQL 设计** 与本仓库 [`Back-end/Node/GraphQL`](../GraphQL)（Mercurius）对照；内容与权限可与 **Strapi、Directus、Payload** 占位对照。

## 端口

默认 **3117**；汇总见根目录 [README.md](../../../README.md)。
