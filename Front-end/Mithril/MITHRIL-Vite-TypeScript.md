# Mithril.js（Vite + TypeScript）

## 框架简介

**Mithril** 是一个轻量、**无多余抽象**的前端框架，由 Leo Horie 创建并长期维护。它提供极小的 API 表面：`m()` 用于创建虚拟节点、`m.mount` 挂载根组件、`m.route` 做路由、`m.request` 发请求等。哲学是「够用即可」——不强制全家桶，适合希望**快速理解虚拟 DOM + 生命周期**、或嵌入遗留页面做局部增强的开发者。

- 官方文档：<https://mithril.js.org/>
- 源码：<https://github.com/MithrilJS/mithril.js>

Mithril 体积通常在数十 KB 量级，学习曲线平缓；大型应用需要自己约定模块边界与状态模式。

## 在本仓库中的角色

本目录为 **Vite + TypeScript** 下的 Mithril **能力展台**：演示 `m()`、`m.mount`、组件与生命周期，并与 **React / Vue / Svelte** 等对照「同一需求下的代码形状」。

## 技术栈

| 层级 | 选型 |
|------|------|
| 框架 | Mithril 2.x |
| 构建 | Vite 8 |
| 语言 | TypeScript |

## 核心概念与特点

| 概念 | 说明 |
|------|------|
| `m()` | 返回虚拟节点；可表示元素、组件、片段。 |
| `m.mount(dom, component)` | 将组件挂到真实 DOM，自动重绘。 |
| `m.redraw` | 手动触发全局重绘（与事件、异步结合使用）。 |
| 生命周期 | `oninit`、`oncreate`、`onbeforeupdate`、`onupdate`、`onbeforeremove`、`onremove` 等钩子清晰。 |
| 与 React 对比 | 无 JSX 默认范式（可用 `mithril-jsx` 等扩展）；心智更偏「函数返回 vnode」。 |

## 优缺点（学习向）

**优点**：API 少、文档线性、包体小、上手快。  
**缺点**：生态与岗位密度不及 React/Vue；大型团队协作需自行沉淀工程规范。

## 环境要求

- Node.js 建议 LTS；**仅在本目录**执行 `npm install`。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Mithril'
npm install
npm run dev
```

按终端提示打开本地 URL（默认多为 **5173**，若被占用 Vite 会顺延）。

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动 Vite 开发服务器 |
| `npm run build` / `npm run preview` | 构建与预览生产包 |

## 与仓库内其它子项目对照

可与 **Backbone**（事件驱动 + jQuery）、**Vue 选项式 API**（同样偏对象配置）对照阅读；理解「无编译宏的轻量框架」如何组织 UI。

## 延伸阅读

- Mithril 路由与请求：<https://mithril.js.org/route.html>、<https://mithril.js.org/request.html>
