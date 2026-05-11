# Full-stack（全栈示例）

与 [`Front-end/`](../Front-end) 下 **Vite SPA** 不同：本目录各子工程为 **路由 + 页面 + 同源 API**（或开发态中间件）对照，端口彼此错开，亦与 [`Back-end/`](../Back-end) 错开。

| 子目录 | 默认 `npm run dev` 地址 | 说明文档 |
|--------|-------------------------|----------|
| [Nextjs](./Nextjs) | http://127.0.0.1:3030/ | [NEXTJS-FullStack-TypeScript.md](./Nextjs/NEXTJS-FullStack-TypeScript.md) |
| [Nuxt](./Nuxt) | http://127.0.0.1:3031/ | [NUXT-FullStack-TypeScript.md](./Nuxt/NUXT-FullStack-TypeScript.md) |
| [SvelteKit](./SvelteKit) | http://127.0.0.1:3032/ | [SVELTEKIT-FullStack-TypeScript.md](./SvelteKit/SVELTEKIT-FullStack-TypeScript.md) |
| [Remix](./Remix) | http://127.0.0.1:3033/ | [REMIX-FullStack-TypeScript.md](./Remix/REMIX-FullStack-TypeScript.md) |
| [Astro](./Astro) | http://127.0.0.1:3034/ | [ASTRO-FullStack-TypeScript.md](./Astro/ASTRO-FullStack-TypeScript.md) |
| [Analog](./Analog) | http://127.0.0.1:3035/ | [ANALOG-FullStack-TypeScript.md](./Analog/ANALOG-FullStack-TypeScript.md) |
| [Blitz](./Blitz) | http://127.0.0.1:3036/ | [BLITZ-FullStack-TypeScript.md](./Blitz/BLITZ-FullStack-TypeScript.md) |
| [tanstack-start](./tanstack-start) | http://127.0.0.1:3038/ | [TANSTACK-FullStack-TypeScript.md](./tanstack-start/TANSTACK-FullStack-TypeScript.md) |

**RedwoodJS**：官方脚手架对 **Node 20.x（小于 21）** 与 **yarn** 有强约束且为交互式多包结构，本目录未内置生成树；说明见根目录 [FRAMEWORK-GAP-LIST.md](../FRAMEWORK-GAP-LIST.md) 第一节。

各子目录内执行 `npm install`；**不要在仓库根目录** `npm install`。
