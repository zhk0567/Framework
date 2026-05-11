# Nuxt 全栈示例

本目录为 **Nuxt 4 · Vue 3 · Nitro** 应用，位于 `Full-stack/`，与同目录 **Next.js** 示例对齐：页面 + **`server/api` 路由** 返回 JSON。

## 快速开始（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Full-stack\Nuxt'
npm install
npm run dev
```

浏览器：**http://127.0.0.1:3031/**（`nuxt.config` 与脚本均固定 **3031**，与其它全栈/后端端口错开）。

## 本示例在演示什么

- **`server/api/demo.get.ts`**：`defineEventHandler`，映射 **GET /api/demo**。
- **`app/app.vue`**：`useFetch('/api/demo')` 拉取同源 API。

## 与仓库总览的关系

根说明：[../../README.md](../../README.md)。纯 Vue + Vite 对照：[../Front-end/Vue/VUE-Vite-TypeScript.md](../Front-end/Vue/VUE-Vite-TypeScript.md)。
