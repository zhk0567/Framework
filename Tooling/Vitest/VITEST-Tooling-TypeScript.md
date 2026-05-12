# Tooling / Vitest（最小可运行单测）

## 工具简介（Vitest 本体）

**Vitest** 是基于 **Vite** 的 **单元 / 集成测试** 运行器：与 Vite 配置共用解析与插件生态，支持 **TypeScript、ESM、watch 模式** 及与 **@testing-library** 等组合。适合与 Vite 前端同仓快速跑测。

- 官方网站：<https://vitest.dev/>
- 文档：<https://vitest.dev/guide/>

## 在本仓库中的角色

本目录为**独立 Node 工程**：仅含 **`src/sum.ts`** 与 **`src/sum.test.ts`**，通过 **`npm test`**（`vitest run`）演示 **零浏览器** 下的最小通过用例。与 [`Tooling/Nx`](../Nx)、[`Turborepo`](../Turborepo)、[`Playwright`](../Playwright) 不同，**无 HTTP 呈现页与默认端口**（避免与「占位站点」口径混淆）。

## 环境要求

- Node.js **20+**

## 安装与运行测试（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Tooling\Vitest'
npm install
npm test
```

预期输出包含 **Tests** 通过条数（至少 **1** 个用例）。

## 与 Playwright 对照

- **Vitest**：偏 **Node / jsdom / happy-dom** 环境下的快速断言与模块级测试。  
- **Playwright**：偏 **真实浏览器** 与用户路径 E2E；见 [`../Playwright`](../Playwright) 占位与官方 init 文档。

## 端口

无（本目录不提供 `http` 服务）。
