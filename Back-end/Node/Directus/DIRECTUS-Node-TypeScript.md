# Back-end / Node / Directus（形态占位）

## 框架简介（Directus 本体）

**Directus** 是开源 **数据工作室 / Headless CMS**：将 **现有 SQL 数据库** 中的表映射为 **REST/GraphQL** 与 **可配置管理界面**，强调 **权限、流（Flow）、自动化与扩展**。适合已有数据库、希望快速提供管理端与 API 的团队。

- 官方网站：<https://directus.io/>
- 文档：<https://directus.io/docs>

## 在本仓库中的角色

本目录为**独立 Node 工程**：依赖与锁文件仅存在于 `Back-end/Node/Directus`，请勿在仓库根目录执行 `npm install`。完整 Directus 依赖数据库与较多服务组件，本仓库用 **Node `http`** 仅对齐 **`/api/health`** 与呈现页。

## 为何不是「完整 Directus」

**Directus** 面向**已有数据库**的数据工作室场景，安装包含 **面板、权限、流、多存储适配** 等，依赖与配置量显著大于本仓库其它「单目录对照」后端。本目录用 **Node 内置 `http`** 提供 **`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页**，仅用于**端口与 API 路径习惯**与 Fastify 等对齐。

## 环境要求

- Node.js **20+**（占位服务）；**完整 Directus** 以官方文档为准

## 安装与运行占位服务（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Directus'
npm install
npm run dev
```

呈现页：**http://127.0.0.1:3017/**

## 创建完整 Directus 项目（建议在仓库外）

```powershell
npm create directus-project@latest my-directus
```

完成后可将 **集合（Collection）与字段、角色策略、扩展钩子** 与 `Back-end/Node/NestJS` 的模块边界对照。

同主题下本仓库另有 **Strapi（3016）**、**Medusa（3115）**、**Payload（3116）**、**Keystone（3117）** 的 **Node `http` 占位**。

## 端口

默认 **3017**；汇总见根目录 [README.md](../../../README.md)。
