# Vike（Vite SSR · React）

本目录为 **Vike** + **React 19** + **TypeScript** 的最小可运行示例（官方脚手架 `npm create vike@latest` 生成后，将开发端口固定为 **`5198`**，与同仓库其它 **519x** 展台错开）。

**Vike** 是原 **vite-plugin-ssr** 的演进：在 **Vite** 之上提供 **文件路由**、**SSR/SSG**、**`+data` 数据层** 等，与 **Next / Nuxt / SvelteKit** 等「框架自带路由」路线不同，偏 **Vite 生态内的 SSR 中间层**。

## 本地运行

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Vike'
npm install
npm run dev
```

浏览器打开终端提示的地址（默认 **`http://127.0.0.1:5198/`**）。

- **`npm run build`**：生产构建。  
- **`npm run preview`**：先 `vike build` 再本地预览（仍使用端口 **5198**）。

## 与仓库内其它目录的对照

| 对照方向 | 建议打开的目录 |
|----------|----------------|
| 元框架一体化（路由 + API 约定） | [`../../Full-stack/Nextjs`](../../Full-stack/Nextjs)、[`../../Full-stack/Remix`](../../Full-stack/Remix) |
| 纯 Vite SPA（无 Vike） | [`../React`](../React) |
| 官方脚手架更新 | [vike.dev](https://vike.dev/) · [Get Started](https://vike.dev/get-started) |

## 目录要点（脚手架自带）

- **`pages/`**：`+Page.tsx`、`+Layout.tsx`、`+data.ts`、`+config.ts` 等 **Plus 文件** 约定。  
- **`vite.config.ts`**：注册 **`vike()`** 与 **`@vitejs/plugin-react`**。

若需从零新建空目录工程，可执行：

```powershell
npm create vike@latest ./my-vike-app
```

按需选择 **React / Vue / Solid** 等组合（本仓库当前子目录为 **React** 模板）。
