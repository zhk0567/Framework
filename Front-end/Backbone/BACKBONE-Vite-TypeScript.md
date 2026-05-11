# Backbone.js（Vite + TypeScript）

## 框架简介

**Backbone.js** 是 Jeremy Ashkenas 发布的经典 **MVC/MVP 风格** 轻量库（约 2010 年代主流），核心抽象为 **Model、Collection、View、Router、Events**。View 层历史上依赖 **jQuery** 操作 DOM（`Backbone.$`），通过 **listenTo / Events** 把数据变化同步到界面。如今虽非新项目首选，但对理解「前端分层」「REST 资源与 UI 同步」仍有教科书价值。

- 官方网站：<https://backbonejs.org/>
- 源码：<https://github.com/jashkenas/backbone>

## 在本仓库中的角色

本目录在 **Vite + TypeScript** 下复刻「Backbone + jQuery」经典栈，作为与 **React/Vue 等组件单向数据流** 的对照：同一展台需求下，如何用 **Model/View** 拆分职责。

## 技术栈

| 层级 | 选型 |
|------|------|
| UI 结构 | Backbone、jQuery（DOM 与事件委托） |
| 构建 | Vite 8 |
| 语言 | TypeScript |

## 核心概念与特点

| 概念 | 说明 |
|------|------|
| Model | 键值属性、`set` 触发 `change` 事件，可与 REST `url` 同步。 |
| Collection | Model 有序集合，批量操作与排序。 |
| View | `el` + `events` 哈希表绑定 DOM；`render` 中读取 model 并更新 `$el`。 |
| Router | `hash` 或 `history` 路由，映射到回调。 |
| Events | 解耦模块：`listenTo` 避免僵尸监听。 |

## 优缺点（学习向）

**优点**：概念少、与 REST 资源自然对应、易读「数据驱动 UI」雏形。  
**缺点**：无虚拟 DOM，大列表需自行优化；现代无障碍、SSR 等需额外整合；社区活跃度低于主流框架。

## 环境要求

- Node.js 建议 LTS；依赖**仅在本目录**安装。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Backbone'
npm install
npm run dev
```

## 默认端口

- 一般为 Vite 默认 **5173**（以终端输出为准）。

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器 |
| `npm run build` / `npm run preview` | 构建与预览 |

## 与仓库内其它子项目对照

- **Ember**：同为「约定 + MVC」路线但 Ember 是全栈 CLI 生态。
- **Mithril**：无 jQuery 依赖的轻量 vnode 方案，可对比 View 层厚度。

## 延伸阅读

- Backbone 入门：<https://backbonejs.org/#Getting-started>
