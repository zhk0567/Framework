# RedwoodJS（全栈元框架 · 对照用）

本目录用 **Node + `http` + `tsx`** 提供 **`/` 呈现页**、**`GET /api/health`**、**`GET /api/info`**，与同仓库其它 **`Full-stack/*`** 在「同源 `/api/*`」形态上对齐。

**完整的 RedwoodJS** 不是单页 Vite 模板，而是由官方脚手架生成的 **多包仓库**（典型含 **`web/`**、**`api/`**、Prisma、GraphQL 约定等），且对运行环境与包管理器有明确要求。

## 官方要求（摘录）

- **Node**：**20.x**（官方文档强调 **小于 21**；请在 `node -v` 自检后再执行脚手架）。
- **包管理器**：**yarn**（`yarn create redwood-app`）。
- **向导**：交互式创建；本仓库**不提交**该生成树，以保持体积与 CI 简单。

## 在空目录创建真实项目

```powershell
# 先切换到 Node 20 LTS 与已安装 yarn 的环境
yarn create redwood-app ./my-redwood-app
```

然后与 [`../Nextjs`](../Nextjs)、[`../Remix`](../Remix) 等对照 **路由、数据获取、API 层** 的差异。

## 与本占位服务的关系

此处 **`npm run dev`** 仅为 **HTTP 占位**，便于你在未装 Node 20 / yarn 时仍能打开 **`http://127.0.0.1:3037/`** 阅读说明与 JSON 形态；**不代表** Redwood 运行时或 GraphQL 服务端。
