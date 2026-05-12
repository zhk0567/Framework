# Fresh（Deno 全栈 · 对照用）

本目录用 **Deno + `Deno.serve`** 提供 **`/` 呈现页**、**`GET /api/health`**、**`GET /api/info`**，与同仓库其它 **`Full-stack/*`** 在「同源 `/api/*`」形态上对齐；运行方式与 [`../../Back-end/Deno/Oak`](../../Back-end/Deno/Oak) 一致为 **`deno task`**。

**完整的 Fresh** 含 **文件路由、Islands、静态资源与 `fresh.config`** 等；本仓库**不提交**官方 `init` 生成树。

## 在空目录创建真实项目

```powershell
deno run -Ar jsr:@fresh/init
```

按 [Fresh 文档](https://fresh.deno.dev/docs/getting-started) 完成向导。与 [`../Nextjs`](../Nextjs)、[`../SvelteKit`](../SvelteKit) 对照 **群岛架构与 SSR 数据流**。

## 与本占位服务的关系

此处 **`deno task dev`** 仅为 **HTTP 占位**；**不代表** Fresh 的 Islands 编译或路由生成器。
