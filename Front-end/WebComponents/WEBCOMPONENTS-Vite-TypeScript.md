# 原生 Web Components（Vite + TypeScript）

## 技术背景（标准而非单一「框架」）

**Web Components** 是浏览器平台的一组标准：**Custom Elements**、**Shadow DOM**、**HTML Templates** 与 **ES Modules**。任意前端框架最终都运行在浏览器之上；理解原生组件有助于阅读 **Lit、Stencil、Ionic Core** 等库的底层行为。

- MDN 中文概述：<https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components>
- 规范入口：WHATWG / W3C 相关标准文档

## 在本仓库中的角色

本目录**不使用** Lit/Stencil 等封装，直接用 **`customElements.define`** 与 **Shadow DOM** 实现展台组件，便于与 **`Front-end/Lit`**、**`Front-end/Stencil`** 对照「手写标准 vs 编译器/薄封装」的成本。

## 技术栈

| 层级 | 选型 |
|------|------|
| API | `HTMLElement`、`attachShadow`、`adoptedStyleSheets`（按浏览器支持选用） |
| 构建 | Vite 8（用于 TS 与开发服务器） |
| 语言 | TypeScript |

## 核心概念与特点

| 概念 | 说明 |
|------|------|
| Custom Elements | 标签名需含连字符；生命周期 `connectedCallback` 等。 |
| Shadow DOM | 样式与 DOM 封装边界；可配置 `mode: 'open' \| 'closed'`。 |
| 与 React 对比 | 无虚拟 DOM diff；列表更新常需手写 DOM 操作或使用 `DocumentFragment`。 |
| 互操作性 | 标准元素可被 React/Vue 作为未知标签挂载（需注意属性序列化）。 |

## 优缺点（学习向）

**优点**：无框架锁定、长期平台标准、适合设计系统原子组件。  
**缺点**：表单、SSR、无障碍等需自行补齐模式；DX 不如高阶框架。

## 环境要求

- Node.js 建议 LTS；**仅在本目录** `npm install`。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\WebComponents'
npm install
npm run dev
```

## 默认开发与预览端口

- **5197**（`vite.config.ts` 固定）。

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器 |
| `npm run build` / `npm run preview` | 构建与预览 |

## 与仓库内其它子项目对照

- **Lit / Stencil**：优先读这两个目录理解「如何在标准之上减少样板代码」。

## 延伸阅读

- Form-associated custom elements：<https://developer.mozilla.org/zh-CN/docs/Web/API/ElementInternals>
