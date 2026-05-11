# Back-end / Node / Express

## 框架简介

**Express** 是 Node.js 生态中最著名的 **极简 Web 框架**：只提供路由、中间件与少量 HTTP 辅助，其余能力由社区中间件（`cors`、`compression`、会话、安全头等）组合。学习曲线低、资料极多，是理解 Node HTTP 与中间件链的**事实标准入口**。

- 官方网站：<https://expressjs.com/>
- 中文资料：以英文站为准，社区翻译与教程丰富。

## 在本仓库中的角色

本目录为**独立 Node 工程**：依赖与锁文件仅存在于 `Back-end/Node/Express`，请勿在仓库根目录执行 `npm install`。提供最小 **`/api/health`**、**`/api/info`** 与静态呈现页，与其它 Node 子目录对齐 HTTP 形态。

## 这个子项目想说明什么（Express 特点）

| 能力 | 在本示例中的位置 |
|------|------------------|
| **中间件顺序** | `src/server.ts`：先 `cors`、`express.json()`，再注册 `/api/*`，最后 `express.static` |
| **JSON 响应** | `GET /api/health`、`GET /api/info` |
| **静态呈现页** | `public/index.html` + `express.static` |

## 环境要求

- Node.js **20+**（与 `package.json` 中 `engines` 一致）

## 安装与运行（Windows PowerShell）

请先进入本目录再执行命令：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Express'
npm install
npm run dev
```

启动后打开呈现页：**http://127.0.0.1:3011/**

若端口被占用，可临时指定（勿与 Fastify `3000`、Nest `3001`、Go 示例 `3002`–`3010`、其它 Node 子目录 `3012`–`3019` 冲突；端口汇总见仓库根目录 [README.md](../../../README.md)）：

```powershell
$env:PORT = '3021'
npm run dev
```

## 与仓库内其它后端对照

- **HTTP 形态**：与 `Back-end/Node/Fastify` 一样提供 **`GET /api/health`**，便于并排对照路由与响应结构。
- **呈现页**：仅演示 **`/api/health`** 与 **`/api/info`**；完整「能力展台」仍以 Fastify / NestJS 目录为准。
