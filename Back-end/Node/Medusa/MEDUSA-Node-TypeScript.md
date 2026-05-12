# Back-end / Node / Medusa（形态占位）

## 框架简介（Medusa 本体）

**Medusa** 是面向 **无头电商（headless commerce）** 的 Node 框架：提供 **Store API、Admin、订单与支付流、插件与工作区（workspaces）**，通常配合 **PostgreSQL** 与 **Redis** 运行。与「仅内容」的无头 CMS 不同，Medusa 更强调 **购物车、订单、区域与履约** 等电商域。

- 官方网站：<https://medusajs.com/>
- 文档：<https://docs.medusajs.com/>

## 在本仓库中的角色

本目录为**独立 Node 工程**：依赖与锁文件仅存在于 `Back-end/Node/Medusa`，请勿在仓库根目录执行 `npm install`。因完整 Medusa 含工作区、数据库与较长安装流程，此处仅用 **Node `http`** 对齐 **`/api/health`** 与呈现页；**完整无头电商请用官方 CLI**（见下文）。

## 为何不是「完整 Medusa」

**Medusa** 默认包含 **多包工作区、迁移、插件与后台**，体积与初始化成本远大于本仓库其它对照示例。为与 **Node 对照后端** 在「名称可见 + 端口 + **`/api/health`**」上对齐，本目录提供最小 **`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页**。

## 环境要求

- Node.js **20+**（仅用于运行本占位服务；**完整 Medusa** 请遵循其官方 Node 版本说明）

## 安装与运行占位服务（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Medusa'
npm install
npm run dev
```

呈现页：**http://127.0.0.1:3115/**

## 创建完整 Medusa 应用（建议在仓库外空目录）

```powershell
npx create-medusa-app@latest
```

创建完成后，可将 **插件边界、REST 资源划分** 与本仓库 `Back-end/Node/NestJS`、`Back-end/Node/Fastify` 对照；与 **Strapi / Directus / Payload / Keystone** 对照时可区分「订单域」与「内容域」。

## 端口

默认 **3115**；汇总见根目录 [README.md](../../../README.md)。
