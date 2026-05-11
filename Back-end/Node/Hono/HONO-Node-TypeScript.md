# Back-end / Node / Hono

## 框架简介

**Hono** 是极轻量的 **Web 标准导向** 路由框架：同一套 API 可运行在 **Cloudflare Workers、Deno、Bun、Node.js** 等环境，强调 **Edge** 与 **低冷启动成本**。常与 **`@hono/node-server`** 在 Node 侧搭配使用。

- 官方网站：<https://hono.dev/>
- 文档：<https://hono.dev/docs/>

## 在本仓库中的角色

本目录为**独立 Node 工程**：依赖与锁文件仅存在于 `Back-end/Node/Hono`，请勿在仓库根目录执行 `npm install`。

## 这个子项目想说明什么（Hono 特点）

| 能力 | 在本示例中的位置 |
|------|------------------|
| **轻量路由** | `Hono` 实例上的 `app.get` |
| **Node 适配** | `@hono/node-server` 的 `serve` + `serveStatic` |
| **JSON** | `c.json` |

## 环境要求

- Node.js **20+**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Hono'
npm install
npm run dev
```

呈现页：**http://127.0.0.1:3018/**

端口冲突时：

```powershell
$env:PORT = '3028'
npm run dev
```

## 与仓库内其它后端对照

与 Fastify、Express 等一致提供 **`GET /api/health`**；默认端口 **3018**（见根目录 [README.md](../../../README.md)）。
