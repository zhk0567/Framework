# Back-end / Node / Payload CMS（形态占位）

## 框架简介（Payload 本体）

**Payload** 是 **TypeScript 优先** 的开源 **无头 CMS**：以代码定义 **集合（Collections）、字段、访问控制与 Hooks**，自带 **Admin UI**，可对接多种数据库。与 Strapi 的「内容类型构建器」、Directus 的「BaaS + 面板」在定位上各有侧重，均适合作为 **Headless CMS** 对照学习。

- 官方网站：<https://payloadcms.com/>
- 文档：<https://payloadcms.com/docs>

## 在本仓库中的角色

本目录为**独立 Node 工程**：依赖与锁文件仅存在于 `Back-end/Node/Payload`，请勿在仓库根目录执行 `npm install`。因完整 Payload 依赖数据库与构建管线，此处仅用 **Node `http`** 对齐 **`/api/health`** 与呈现页；**完整 CMS 请用官方 CLI**（见下文）。

## 为何不是「完整 Payload」

**Payload** 作为生产级 CMS，包含 **Admin、数据库迁移、服务端 bundle** 等，不适合与本仓库其它「单目录轻量」示例同等提交。本目录用 **Node 内置 `http`** 提供最小 **`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页**。

## 环境要求

- Node.js **20+**（占位服务）；**完整 Payload** 请遵循官方 `engines` 与数据库要求。

## 安装与运行占位服务（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Payload'
npm install
npm run dev
```

呈现页：**http://127.0.0.1:3116/**

## 创建完整 Payload 应用（建议在仓库外空目录）

```powershell
npx create-payload-app@latest
```

创建完成后，可与本仓库 [`Back-end/Node/Strapi`](../Strapi)、[`Directus`](../Directus)、[`Keystone`](../Keystone) 对照 **Admin、字段模型与 API 形态**。

## 端口

默认 **3116**；汇总见根目录 [README.md](../../../README.md)。
