# Tooling / Monorepo / 质量工具链

本目录收录**非 UI 框架**的 **Monorepo** 与 **测试工具链** 示例子工程，与 [`Front-end/`](../Front-end)、[`Full-stack/`](../Full-stack)、[`Back-end/`](../Back-end) **并列且彼此独立**：请在**各子目录**内单独执行 `npm install`，勿在仓库根目录安装。

| 子目录 | 说明 |
|--------|------|
| [`Nx/`](Nx) | **Nx**：任务图、缓存、生成器；占位 HTTP **3120** + `npx create-nx-workspace` 文档链。 |
| [`Turborepo/`](Turborepo) | **Turborepo**：pipeline、远程缓存；占位 HTTP **3121** + `npx create-turbo@latest` 文档链。 |
| [`Vitest/`](Vitest) | **Vitest**：Vite 原生单测；最小 **`npm test`**（`vitest run`），无呈现页端口。 |
| [`Playwright/`](Playwright) | **Playwright**：E2E；占位 HTTP **3122** + `npm init playwright@latest` 文档链。 |

汇总端口与根目录总表见 [README.md](../README.md)。候选队列已从 [FRAMEWORK-GAP-LIST.md](../FRAMEWORK-GAP-LIST.md) §九迁入。
