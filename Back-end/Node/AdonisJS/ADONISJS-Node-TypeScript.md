# Back-end / Node / AdonisJS（形态占位）

## 框架简介（AdonisJS 本体）

**AdonisJS** 是 **Node.js 全功能 MVC 框架**（灵感来自 Laravel / Rails）：内置 **路由、控制器、中间件、验证器、ORM（Lucid）、认证、会话、邮件、队列** 等模块，通过 **Ace CLI** 管理迁移与代码生成，适合希望「**一体式后端约定**」的团队。

- 官方网站：<https://adonisjs.com/>
- 文档：<https://docs.adonisjs.com/>

## 在本仓库中的角色

本目录为**独立 Node 工程**：依赖与锁文件仅存在于 `Back-end/Node/AdonisJS`，请勿在仓库根目录执行 `npm install`。完整 Adonis 工程由 CLI 生成多目录结构，本仓库用 **Node `http`** 对齐 **`/api/health`** 与呈现页，并文档化官方脚手架命令。

## 为何不是「完整 Adonis 应用」

**AdonisJS** 官方脚手架会生成 **Ace CLI、config、start、多环境约定** 等一整套目录；与本仓库其它「单目录、少量文件即可对照 HTTP」的 Node 示例相比，**体积与维护成本**明显更高。为仍能在清单中对照「名字 + 默认端口 + `/api/health`」，本目录提供：

| 内容 | 说明 |
|------|------|
| **`src/server.ts`** | Node 内置 `http`，实现 **`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页** |
| **`public/index.html`** | 与 Express 等子目录同风格的简单联调页 |

## 环境要求

- Node.js **20+**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\AdonisJS'
npm install
npm run dev
```

呈现页：**http://127.0.0.1:3015/**

## 生成完整 AdonisJS 工程（在仓库外或空子目录）

在**空目录**执行（官方文档为准）：

```powershell
npm create adonisjs@latest my-adonis-app
```

生成后可将业务路由、Lucid 模型等与 `Back-end/Node/NestJS`、`Back-end/Node/Fastify` 对照阅读。

## 端口

默认 **3015**；勿与 Fastify `3000`、Nest `3001`、Go `3002`–`3010`、其它 Node 子目录冲突（汇总见根目录 [README.md](../../../README.md)）。
