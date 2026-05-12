# SolidStart（全栈元框架 · 对照用）

本目录用 **Node + `http` + `tsx`** 提供 **`/` 呈现页**、**`GET /api/health`**、**`GET /api/info`**，与同仓库其它 **`Full-stack/*`** 在「同源 `/api/*`」形态上对齐。

**完整的 SolidStart** 基于 **Vinxi** 与 **Solid Router**，含文件路由、SSR、数据加载与部署约定；本仓库**不提交**官方脚手架生成树。

## 在空目录创建真实项目

```powershell
npm create solid@latest ./my-solid-app
```

向导中选择 **SolidStart** 模板，并与 [`../Nextjs`](../Nextjs)、[`../SvelteKit`](../SvelteKit) 等对照 **路由与数据获取**。

## 与本占位服务的关系

此处 **`npm run dev`** 仅为 **HTTP 占位**，便于在未跑完整 Vinxi 栈时仍能打开 **`http://127.0.0.1:3039/`**；**不代表** SolidStart 运行时或生产构建行为。
