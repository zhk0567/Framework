# Astro 全栈示例

**Astro 6** 最小模板 + **`src/pages/api/demo.ts`**（`APIRoute`）提供 JSON；首页在 **frontmatter** 中 `fetch` 同源 API（SSR 时执行）。

## 环境

模板要求 **Node ≥ 22.12**（见 `package.json` 的 `engines`）。若版本较低，请升级 Node 或自行放宽 `engines`（自担兼容性风险）。

## 静态构建说明

默认 **output: static**。首页与 **`GET /api/demo`** 在构建时共用 `src/lib/demo-payload.ts`，避免 prerender 阶段对同源 `fetch` 失败；开发服务器上仍可直接访问 **`/api/demo`**。

## 快速开始（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Full-stack\Astro'
npm install
npm run dev
```

默认 **http://127.0.0.1:3034/**（`astro.config.mjs`）。

## 与仓库总览的关系

根说明：[../../README.md](../../README.md)。
