# Back-end / Node / Elysia

## 框架简介

**Elysia** 是面向 **Bun** 运行时的 Web 框架，强调 **端到端类型安全** 与 **OpenAPI 生成** 等体验；利用 Bun 的原生性能与包管理。与 Node + Express 路线不同，**本目录脚本需用 `bun` 执行**。

- 官方网站：<https://elysiajs.com/>
- 源码：<https://github.com/elysiajs/elysia>

## 在本仓库中的角色

本目录为**独立 Bun 工程**（非 Node 执行）：依赖与锁文件仅存在于 `Back-end/Node/Elysia`，请勿在仓库根目录执行 `npm install` / `bun install`。

## 这个子项目想说明什么（Elysia 特点）

| 能力 | 在本示例中的位置 |
|------|------------------|
| **路由与 handler** | `src/server.ts`：`new Elysia().get(...)` |
| **静态资源** | `@elysiajs/static` 指向 `public/` |
| **JSON** | handler 直接返回对象 |

## 环境要求

- **[Bun](https://bun.sh/) 1.1+**（与 `package.json` 中 `engines` 一致；**不要用 `node` 或 `tsx` 跑本目录**）

## 安装与运行（Windows PowerShell）

请先进入本目录再执行命令：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Elysia'
bun install
bun run dev
```

呈现页：**http://127.0.0.1:3019/**

若端口被占用：

```powershell
$env:PORT = '3029'
bun run dev
```

## 与仓库内其它后端对照

与 Fastify、Express 等一致提供 **`GET /api/health`**；默认端口 **3019**（见根目录 [README.md](../../../README.md)）。其余 Node 子目录仍用 **Node + npm**；本目录单独标明 **Bun**，避免与环境假设混淆。
