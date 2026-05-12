# Gatsby（全栈 / 混合站点 · 对照用）

本目录用 **Node + `http` + `tsx`** 提供 **`/` 呈现页**、**`GET /api/health`**、**`GET /api/info`**，与同仓库其它 **`Full-stack/*`** 在「同源 `/api/*`」形态上对齐。

**完整的 Gatsby** 以 **GraphQL 数据层**、**插件系统** 与 **构建时页面生成** 为核心；本仓库**不提交**官方 CLI 生成树。

## 在空目录创建真实项目

```powershell
npm init gatsby
```

或按 [Gatsby 文档](https://www.gatsbyjs.com/docs/quick-start/) 使用 **`gatsby new`**。与 [`../Nextjs`](../Nextjs)、[`../Astro`](../Astro) 对照 **数据获取与部署形态**。

## 与本占位服务的关系

此处 **`npm run dev`** 仅为 **HTTP 占位**；**不代表** Gatsby 开发服务器或 GraphQL 层。
