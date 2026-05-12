# Tooling / Turborepo（形态占位）

## 工具简介（Turborepo 本体）

**Turborepo**（`turbo`）为 **JavaScript / TypeScript Monorepo** 提供 **任务 pipeline** 与 **缓存**（含远程缓存服务对接），通常与 **npm / pnpm / yarn workspaces** 一起使用，强调 **显式 `turbo.json` 管道** 与 **任务级增量**。

- 官方网站：<https://turbo.build/repo>
- 文档：<https://turbo.build/repo/docs>

## 在本仓库中的角色

本目录为**独立 Node 工程**；完整 Turborepo 需在仓库根或独立 monorepo 内配置 **`turbo.json`**。此处用 **Node `http`** 对齐呈现页与 **`/api/*`**，并链到 **`create-turbo`**。

## 环境要求

- Node.js **20+**

## 安装与运行占位（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Tooling\Turborepo'
npm install
npm run dev
```

呈现页：**http://127.0.0.1:3121/**

## 创建完整 Turborepo（建议在仓库外空目录）

```powershell
npx create-turbo@latest
```

可将 **`pipeline` / `tasks` 缓存键** 与本仓库各子目录独立 `npm run` 脚本对照。

## 端口

默认 **3121**；汇总见根目录 [README.md](../../README.md)。
