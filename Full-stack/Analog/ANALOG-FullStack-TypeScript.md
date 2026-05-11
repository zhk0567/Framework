# Analog 全栈示例

## 框架简介

**Analog** 是 **Angular** 社区的 **全栈元框架**：在 **Vite** 之上集成 **Nitro** 作为服务端运行时，提供 **文件系统路由**、`server` 目录下的 **API 路由**、以及更接近 Nuxt/Next 的开发体验，同时保留 **Angular 组件与依赖注入** 作为主要 UI 层。

- 官方网站：<https://analogjs.org/>
- 文档：<https://analogjs.org/docs>

## 在本仓库中的角色

**Analog** = Angular + **Vite** + **Nitro**（文件路由与 `src/server/routes` 下 API）。本目录为手写最小工程，与其它 `Full-stack/*` 一样提供 **GET /api/demo**。

## 快速开始

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Full-stack\Analog'
npm install
npm run dev
```

默认 **http://127.0.0.1:3035/**。

若 `vite build` 产物偏小，请以 **`npm run dev`** 验证页面与 **`/api/demo`**（Analog + Nitro 在开发态最完整）。

## 与仓库总览的关系

根说明：[../../README.md](../../README.md)。纯 Angular CLI 对照：[../Front-end/Angular/ANGULAR-CLI-TypeScript.md](../Front-end/Angular/ANGULAR-CLI-TypeScript.md)。
