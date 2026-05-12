# Full-stack（全栈示例）

与 [`Front-end/`](../Front-end) 下 **Vite SPA** 不同：本目录各子工程为 **路由 + 页面 + 同源 API**（或开发态中间件）对照，端口彼此错开，亦与 [`Back-end/`](../Back-end) 错开。

| 子目录 | 默认本地 URL（命令） | 说明文档 |
|--------|-------------------------|----------|
| [Nextjs](./Nextjs) | http://127.0.0.1:3030/ | [NEXTJS-FullStack-TypeScript.md](./Nextjs/NEXTJS-FullStack-TypeScript.md) |
| [Nuxt](./Nuxt) | http://127.0.0.1:3031/ | [NUXT-FullStack-TypeScript.md](./Nuxt/NUXT-FullStack-TypeScript.md) |
| [SvelteKit](./SvelteKit) | http://127.0.0.1:3032/ | [SVELTEKIT-FullStack-TypeScript.md](./SvelteKit/SVELTEKIT-FullStack-TypeScript.md) |
| [Remix](./Remix) | http://127.0.0.1:3033/ | [REMIX-FullStack-TypeScript.md](./Remix/REMIX-FullStack-TypeScript.md) |
| [Astro](./Astro) | http://127.0.0.1:3034/ | [ASTRO-FullStack-TypeScript.md](./Astro/ASTRO-FullStack-TypeScript.md) |
| [Analog](./Analog) | http://127.0.0.1:3035/ | [ANALOG-FullStack-TypeScript.md](./Analog/ANALOG-FullStack-TypeScript.md) |
| [Blitz](./Blitz) | http://127.0.0.1:3036/ | [BLITZ-FullStack-TypeScript.md](./Blitz/BLITZ-FullStack-TypeScript.md) |
| [RedwoodJS](./RedwoodJS) | http://127.0.0.1:3037/（`tsx` 占位 `http`） | [REDWOOD-FullStack-TypeScript.md](./RedwoodJS/REDWOOD-FullStack-TypeScript.md) |
| [tanstack-start](./tanstack-start) | http://127.0.0.1:3038/ | [TANSTACK-FullStack-TypeScript.md](./tanstack-start/TANSTACK-FullStack-TypeScript.md) |
| [SolidStart](./SolidStart) | http://127.0.0.1:3039/（`tsx` 占位 `http`） | [SOLIDSTART-FullStack-TypeScript.md](./SolidStart/SOLIDSTART-FullStack-TypeScript.md) |
| [Gatsby](./Gatsby) | http://127.0.0.1:3040/（`tsx` 占位 `http`） | [GATSBY-FullStack-TypeScript.md](./Gatsby/GATSBY-FullStack-TypeScript.md) |
| [Fresh](./Fresh) | http://127.0.0.1:3041/（`deno task dev`） | [FRESH-FullStack-TypeScript.md](./Fresh/FRESH-FullStack-TypeScript.md) |
| [Waku](./Waku) | http://127.0.0.1:3042/（`tsx` 占位 `http`） | [WAKU-FullStack-TypeScript.md](./Waku/WAKU-FullStack-TypeScript.md) |
| [ShopifyHydrogen](./ShopifyHydrogen) | http://127.0.0.1:3043/（`tsx` 占位 `http`） | [SHOPIFY-HYDROGEN-FullStack-TypeScript.md](./ShopifyHydrogen/SHOPIFY-HYDROGEN-FullStack-TypeScript.md) |

**RedwoodJS（完整脚手架）**：官方 **`yarn create redwood-app`** 要求 **Node 20.x（小于 21）**、**yarn** 与交互式向导，生成 **web + api** 多包等；本仓库在 **[RedwoodJS](./RedwoodJS)** 子目录仅提供 **同源 `/api/*` 形态占位** 与文档链，不提交该生成树。**SolidStart / Gatsby / Waku / ShopifyHydrogen** 同理为 **占位 + 官方 CLI 文档**；**Fresh** 为 **Deno** 子目录，见上表。**Fresh** 无需 `npm install`。根目录 [FRAMEWORK-GAP-LIST.md](../FRAMEWORK-GAP-LIST.md) **第一节**（Redwood）与**第五节**（本节所列其它占位）为索引说明。

各 **Node** 子目录内执行 `npm install`；**不要在仓库根目录** `npm install`。
