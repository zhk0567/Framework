# Shopify Hydrogen（无头电商全栈 · 对照用）

本目录用 **Node + `http` + `tsx`** 提供 **`/` 呈现页**、**`GET /api/health`**、**`GET /api/info`**，与同仓库其它 **`Full-stack/*`** 在「同源 `/api/*`」形态上对齐。

**完整的 Hydrogen** 绑定 **Shopify Storefront API**、**购物车/结账** 与 **Oxygen** 等部署路径；本仓库**不提交**官方脚手架生成树，亦**不提供**真实店铺密钥。

## 在空目录创建真实项目

```powershell
npm create @shopify/hydrogen@latest ./my-hydrogen-store
```

按 [Shopify Hydrogen 文档](https://shopify.dev/docs/custom-storefronts/hydrogen) 配置 **Shopify CLI**、店铺与 API 访问。与 [`../Remix`](../Remix)、[`../Nextjs`](../Nextjs) 对照 **电商路由与数据层**。

## 与本占位服务的关系

此处 **`npm run dev`** 仅为 **HTTP 占位**；**不代表** Hydrogen 运行时或 Storefront 查询。
