# Aurelia 2（Vite + TypeScript）

## 框架简介

**Aurelia** 强调 **标准 Web 技术** 与 **显式依赖注入**：Aurelia 2 在架构上延续「模板 + 绑定 + 可测试服务」路线，由 **Rob Eisenberg** 等核心成员推动，与 **WCF/企业组件** 时代开发者熟悉的「可组合服务」叙事相近。模板语法使用 **`bind` / `trigger` / `repeat.for`** 等绑定命令，编译期由 **`@aurelia/vite-plugin`** 处理。

- 官方网站：<https://aurelia.io/>
- 文档：<https://docs.aurelia.io/>

## 在本仓库中的角色

本目录演示 **Aurelia 2 + Vite + TypeScript** 的展台应用：根组件 `my-app` 使用 HTML 模板与绑定命令，与 **Vue 模板**、**Angular 模板** 对照「声明式绑定」的异同。

## 技术栈

| 层级 | 选型 |
|------|------|
| 运行时 | `aurelia` 2.x |
| 构建 | Vite 8、`@aurelia/vite-plugin` |
| 语言 | TypeScript |

## 核心概念与特点

| 概念 | 说明 |
|------|------|
| 绑定 | `.bind` 双向、`.one-time`、`.to-view` 等模式显式区分数据流。 |
| 事件 | `.trigger` 等命令处理 DOM 事件。 |
| 列表 | `repeat.for="item of items"`。 |
| DI | 构造函数注入服务，便于单测与替换实现。 |
| 与 Vue 对比 | 均偏模板优先；Aurelia 更强调绑定修饰符与 IoC 一体。 |

## 优缺点（学习向）

**优点**：模板可读性高、依赖注入一等公民、TypeScript 支持持续完善。  
**缺点**：国内生态与岗位相对少；部分资料仍以英文为主。

## 环境要求

- Node.js 建议 LTS；**仅在本目录** `npm install`。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Aurelia'
npm install
npm run dev
```

## 默认开发与预览端口

- **5177**（在 `vite.config.ts` 中固定，避免与其它子项目默认 **5173** 冲突）。

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器 |
| `npm run build` / `npm run preview` | 构建与预览 |

## 与仓库内其它子项目对照

- **Vue**：对照模板 + 响应式拆分方式。
- **Angular**：对照 DI 与「应用骨架」复杂度。

## 延伸阅读

- Aurelia 快速入门：<https://docs.aurelia.io/getting-started/quick-start>
