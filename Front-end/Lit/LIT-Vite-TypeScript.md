# Lit（Vite + TypeScript）

## 框架简介

**Lit** 由 Google Web Platform 团队维护，是在 **Web Components 标准**之上的一层薄封装：基于 **`LitElement`** 基类，用 **`html` 标签模板** 与 **`@state` / `@property`** 等装饰器（或等价字段语法）描述组件。Lit 关注**标准互操作性**——组件可像原生自定义元素一样在任何框架或纯 HTML 页面中使用。

- 官方网站：<https://lit.dev/>
- 规范背景：Custom Elements、Shadow DOM、ES Modules —— <https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components>

## 在本仓库中的角色

本目录演示 **Lit 3 + TypeScript + Vite**：自定义元素 `lit-showcase` 作为入口，展示状态、模板与 `:host` 样式，并与 **Stencil**、**原生 Web Components** 子目录对照「组件编译到标准元素」的不同路径。

## 技术栈

| 层级 | 选型 |
|------|------|
| 组件层 | `lit`、`@lit/reactive-element` |
| 构建 | Vite 8 |
| 语言 | TypeScript |

## 核心概念与特点

| 概念 | 说明 |
|------|------|
| `LitElement` | 基类，封装更新生命周期与 `render()`。 |
| `html` / `css` | 标签模板，带 lit 的静态结构化与表达式插值。 |
| `@state` / `@property` | 响应式字段；触发高效重渲染。 |
| Shadow DOM | 默认样式封装；可通过选项关闭或调整。 |
| 与 React 对比 | Lit 产出的是**标准自定义元素**；React 组件是 JS 树，需桥接才能当 Web Component 发布。 |

## 优缺点（学习向）

**优点**：标准导向、SSR 与 hydration 有官方路线、适合设计系统组件库。  
**缺点**：应用级路由、全局状态等需自行组合；团队若不熟悉 Web Components 会有学习成本。

## 环境要求

- Node.js 建议 LTS；**仅在本目录**安装依赖。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Lit'
npm install
npm run dev
```

## 入口说明

- `index.html` 引用开发脚本，页面中使用 **`<lit-showcase></lit-showcase>`** 挂载根组件。

## 默认端口

- 多为 **5173**（以终端为准）。

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器 |
| `npm run build` / `npm run preview` | 构建与预览 |

## 与仓库内其它子项目对照

- **Stencil**：编译器 + 运行时，偏「设计系统构建管线」。
- **WebComponents**：无 Lit 薄层，直接手写 `customElements.define`。

## 延伸阅读

- Lit 服务端渲染：<https://lit.dev/docs/ssr/overview/>
