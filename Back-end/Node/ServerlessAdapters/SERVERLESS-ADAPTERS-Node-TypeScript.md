# Vercel Serverless / AWS Lambda 适配形态（对照用）

本目录用 **Node + `http` + `tsx`** 提供 **`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页**。

生产环境中：

- **Vercel**：[`/docs/functions`](https://vercel.com/docs/functions) 描述 Node / Edge 运行时、路由与 `vercel dev` 本地行为。
- **AWS Lambda**：TypeScript 处理器见 [AWS Lambda 文档 · TypeScript](https://docs.aws.amazon.com/lambda/latest/dg/typescript-handler.html)；常与 API Gateway、SAM、CDK 组合。

二者与 **Next.js、Nuxt、Remix、SvelteKit** 等全栈框架的「服务端路由」常编译为无服务器函数，本仓库在 **`Full-stack/`** 已有若干全栈示例，此处单独强调「**纯函数 handler 模型**」与 **长驻 HTTP 进程** 的对照。

## 延伸阅读

- [Vercel Functions（Serverless）](https://vercel.com/docs/functions/serverless-functions)
- [AWS Lambda 事件与上下文](https://docs.aws.amazon.com/lambda/latest/dg/typescript-context.html)

本目录不提交 `vercel.json` 或 SAM 模板；需要时请在空目录用各平台官方 CLI 初始化后再对照本仓库路由形态。
