# Back-end / Node / Koa

## 框架简介

**Koa** 由 Express 原班人马在 TJ Holowaychuk 路线之后推出，强调 **async/await** 与 **洋葱圈中间件**：`context` 对象封装 `req`/`res`，`await next()` 显式表达「向内再向外」的控制流，错误可通过 `try/catch` 统一处理。本身不包含路由，常配合 **`@koa/router`** 等库。

- 官方网站：<https://koajs.com/>
- 源码：<https://github.com/koajs/koa>

## 在本仓库中的角色

本目录为**独立 Node 工程**：依赖与锁文件仅存在于 `Back-end/Node/Koa`，请勿在仓库根目录执行 `npm install`。

## 这个子项目想说明什么（Koa 特点）

| 能力 | 在本示例中的位置 |
|------|------------------|
| **洋葱模型中间件** | `src/server.ts`：`app.use` 链中 `router` 先于 `koa-static` |
| **路由** | `@koa/router`：`/api/health`、`/api/info` |
| **静态呈现页** | `koa-static` 托管 `public/` |

## 环境要求

- Node.js **20+**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Koa'
npm install
npm run dev
```

呈现页：**http://127.0.0.1:3012/**

端口冲突时：

```powershell
$env:PORT = '3022'
npm run dev
```

## 与仓库内其它后端对照

与 Fastify、Express 等一致提供 **`GET /api/health`**；默认端口 **3012**（见根目录 [README.md](../../../README.md)）。
