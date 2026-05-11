# TanStack Router 全栈示例

## 框架简介

**TanStack Router** 是类型极度友好的 **React 路由库**（文件路由、loader、search param 校验、代码分割等）；**TanStack Start** 在其上提供全栈与 SSR 能力。本仓库子目录由 **`create-tsrouter-app`** 生成，CLI 演进较快，请以 [TanStack 官方文档](https://tanstack.com/router/latest) 为准理解 **Router vs Start** 边界。

- Router：<https://tanstack.com/router>
- Start（全栈）：<https://tanstack.com/start>

## 在本仓库中的角色

本目录由 **`create-tsrouter-app create`** 生成（当前 CLI 默认偏 **Router** 能力）。与其它子工程对齐：`npm run dev` 时 **GET /api/demo** 由 `vite.config.ts` 内 **Vite `configureServer` 中间件** 注入（便于无 Nitro 时的同源 JSON）；生产环境请改用 **TanStack Start / Nitro** 等适配层自行挂载 API。

## 快速开始

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Full-stack\tanstack-start'
npm install
npm run dev
```

默认 **http://127.0.0.1:3038/**。

## 与仓库总览的关系

根说明：[../../README.md](../../README.md)。
