# Tooling / Nx（形态占位）

## 工具简介（Nx 本体）

**Nx** 是面向 **JavaScript / TypeScript Monorepo** 的任务编排与缓存层：提供 **项目图（graph）**、**本地与远程缓存**、**代码生成器** 以及与 **Angular、React、Nest** 等栈的集成插件。适合多应用、多库同仓且希望 **只重建受影响部分** 的团队。

- 官方网站：<https://nx.dev/>
- 文档：<https://nx.dev/docs>

## 在本仓库中的角色

本目录为**独立 Node 工程**；完整 Nx workspace 会改变仓库根结构，与本「多目录并排、互不绑定」的约定不同，故此处仅用 **Node `http`** 提供 **`/api/health`**、**`/api/info`** 与呈现页，并链到官方 **`create-nx-workspace`**。

## 环境要求

- Node.js **20+**

## 安装与运行占位（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Tooling\Nx'
npm install
npm run dev
```

呈现页：**http://127.0.0.1:3120/**

## 创建完整 Nx 工作区（建议在仓库外空目录）

```powershell
npx create-nx-workspace@latest
```

可将 **任务图、缓存键、自定义 executor** 与本仓库各独立子目录的「手写脚本」方式对照。

## 端口

默认 **3120**；汇总见根目录 [README.md](../../README.md)。
