# Tooling / Playwright（形态占位）

## 工具简介（Playwright 本体）

**Playwright** 是微软主导的 **端到端（E2E）** 测试框架：支持 **Chromium、Firefox、WebKit**，提供 **Codegen、Trace Viewer、组件测试（实验）** 与 **CI Sharding**。适合覆盖关键用户路径与跨浏览器回归。

- 官方网站：<https://playwright.dev/>
- 文档：<https://playwright.dev/docs/intro>

## 在本仓库中的角色

本目录为**独立 Node 工程**。完整 Playwright 会安装 **浏览器二进制**（体积大），与本仓库「轻量并排」目标不符，故此处仅用 **Node `http`** 提供呈现页与 **`/api/*`**，并文档化 **`npm init playwright@latest`**。

## 环境要求

- Node.js **20+**（占位服务）；**真实 E2E** 另需执行 Playwright 安装步骤以下载浏览器。

## 安装与运行占位（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Tooling\Playwright'
npm install
npm run dev
```

呈现页：**http://127.0.0.1:3122/**

## 初始化完整 Playwright 项目（建议在仓库外空目录）

```powershell
npm init playwright@latest
```

安装完成后执行 **`npx playwright install`**（或 CI 中缓存）。可将 **fixture、page 对象模型、trace** 与本仓库 [`Tooling/Vitest`](../Vitest) 的单元测试对照。

## 端口

默认 **3122**；汇总见根目录 [README.md](../../README.md)。
