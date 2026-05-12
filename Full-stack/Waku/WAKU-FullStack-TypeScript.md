# Waku（React 全栈 · 对照用）

本目录用 **Node + `http` + `tsx`** 提供 **`/` 呈现页**、**`GET /api/health`**、**`GET /api/info`**，与同仓库其它 **`Full-stack/*`** 在「同源 `/api/*`」形态上对齐。

**完整的 Waku** 面向 **React Server Components** 与 **Vite** 工作流；本仓库**不提交**官方模板生成树。

## 在空目录创建真实项目

```powershell
npm create waku@latest ./my-waku-app
```

与 [`../Nextjs`](../Nextjs)（App Router + RSC）对照 **目录约定与数据获取**。

## 与本占位服务的关系

此处 **`npm run dev`** 仅为 **HTTP 占位**；**不代表** Waku 的 RSC 管线或生产打包。
