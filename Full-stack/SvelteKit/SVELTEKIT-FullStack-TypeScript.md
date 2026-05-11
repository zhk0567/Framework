# SvelteKit 全栈示例

## 框架简介

**SvelteKit** 是 **Svelte** 的官方应用框架：提供 **文件系统路由**、**布局（layout）**、**服务端 load 函数**、**表单 actions**、**适配器（adapter）** 部署到 Node/Vercel/Netlify/静态等目标。底层服务端为 **Vite + SvelteKit 运行时**，与纯 **`Front-end/Svelte`**（仅客户端 Vite SPA）相比，本目录强调 **同源 API + SSR/CSR 混合**。

- 官方网站：<https://kit.svelte.dev/>
- 文档：<https://kit.svelte.dev/docs>

## 在本仓库中的角色

**SvelteKit 2 · Svelte 5 · Vite**。`src/routes/api/demo/+server.ts` 提供 **GET /api/demo**；首页在客户端 `fetch` 该地址，演示全栈闭环。

## 技术栈要点

| 层级 | 说明 |
|------|------|
| 路由 | `src/routes` 目录约定 |
| API | `+server.ts` 导出 HTTP 方法处理函数 |
| 数据 | `+page.svelte` / `+page.ts` 中 `load` 与浏览器 `fetch` 组合 |

## 快速开始（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Full-stack\SvelteKit'
npm install
npm run dev
```

浏览器：**http://127.0.0.1:3032/**（见 `vite.config.ts`）。

## 与仓库总览的关系

- 根说明：[../../README.md](../../README.md)
- 纯 Svelte + Vite 对照：[../../Front-end/Svelte/SVELTE-Vite-TypeScript.md](../../Front-end/Svelte/SVELTE-Vite-TypeScript.md)

## 延伸阅读

- Svelte 5 runes 与 Kit：<https://svelte.dev/docs/svelte/what-are-runes>
