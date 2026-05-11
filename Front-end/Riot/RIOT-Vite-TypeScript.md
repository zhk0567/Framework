# Riot.js（Vite + TypeScript）

## 框架简介

**Riot.js** 是一个追求**极简语法**的组件化库：单文件 **`.riot`** 内可同时写 **HTML 片段、脚本、局部 CSS**，编译为原生自定义元素或挂载函数。与 React 相比，Riot 更轻、概念更少，适合嵌入式小部件或学习「最小组件运行时」。

- 官方网站：<https://riot.js.org/>
- 源码：<https://github.com/riot/riot>

## 在本仓库中的角色

本目录使用 **Vite + `rollup-plugin-riot` + `@riotjs/compiler`** 编译 `.riot` 标签，入口通过 **`register` + `mount`** 挂到 `<app></app>`，与 **Vue SFC**、**Svelte** 对照「单文件组件」的不同语法糖。

## 技术栈

| 层级 | 选型 |
|------|------|
| 框架 | Riot 9.x |
| 编译 | `@riotjs/compiler`、`rollup-plugin-riot` |
| 构建 | Vite 8 |
| 语言 | TypeScript |

## 核心概念与特点

| 概念 | 说明 |
|------|------|
| `.riot` 单文件 | 模板、逻辑、样式同文件分区。 |
| 组件 API | `export default { props, state, ... }` 形态（以当前版本文档为准）。 |
| 体积 | 核心极小，适合与大型框架共存。 |
| 生态 | 路由、状态等周边较精简，大型 SPA 需自行设计。 |

## 优缺点（学习向）

**优点**：语法直观、包体小、编译链清晰。  
**缺点**：社区规模小于三大框架；复杂应用样例与招聘面偏窄。

## 环境要求

- Node.js 建议 LTS；**仅在本目录** `npm install`。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Riot'
npm install
npm run dev
```

## 默认开发与预览端口

- **5191**（`vite.config.ts` 固定）。

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器 |
| `npm run build` / `npm run preview` | 构建与预览 |

## 与仓库内其它子项目对照

- **Vue / Svelte**：同为「单文件组件」思想，可对比编译模型与响应式。
- **Web Components**：Riot 编译目标与自定义元素生态相关，可对照阅读。

## 延伸阅读

- Riot 编译器选项：<https://riot.js.org/compiler/>
