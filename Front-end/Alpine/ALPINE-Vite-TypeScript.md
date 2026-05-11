# Alpine.js（Vite + TypeScript）

## 框架简介

**Alpine.js** 由 Caleb Porzio 创建，定位是 **HTML 上的轻量声明式增强**：通过 `x-data`、`x-on`、`x-model`、`x-for` 等属性，把小块状态与行为直接写在标记上，无需构建即可在浏览器运行（**CDN 一行引入**）。本仓库使用 **Vite** 是为了与其它子项目统一的 TS 工具链与热更新，生产形态仍可回归「静态 HTML + Alpine」。

- 官方文档：<https://alpinejs.dev/>
- 源码：<https://github.com/alpinejs/alpine>

## 在本仓库中的角色

演示 **指令式增强 + TypeScript**：在不大改 HTML 结构的前提下完成交互展台，并与 **htmx / Unpoly / Turbo** 等「HTML 优先」技术对照。

## 技术栈

| 层级 | 选型 |
|------|------|
| 运行时 | Alpine 3.x |
| 构建 | Vite 8（开发便利；非 Alpine 必需） |
| 语言 | TypeScript |

## 核心概念与特点

| 概念 | 说明 |
|------|------|
| `x-data` | 定义组件作用域状态（对象或函数返回对象）。 |
| `x-model` | 双向绑定表单控件。 |
| `x-for` | 列表渲染。 |
| `x-show` / `x-if` | 条件显示；`x-if` 会移动 DOM 节点。 |
| `x-effect` / `$watch` | 副作用与观察（视版本与插件而定）。 |
| 与 Vue 对比 | 同样模板友好，但 Alpine 默认**无 SFC**、更偏「在现有 HTML 上撒点逻辑」。 |

## 优缺点（学习向）

**优点**：学得快、包体小、与服务端渲染模板共存好。  
**缺点**：复杂组件化与类型推断不如 Vue SFC / React TSX 成熟；大型 SPA 需自律拆分。

## 环境要求

- Node.js 建议 LTS；**仅在本目录** `npm install`。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Alpine'
npm install
npm run dev
```

## 默认端口

- 多为 **5173**（以终端为准）。

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run dev` | Vite 开发服务器 |
| `npm run build` / `npm run preview` | 构建与预览 |

## 与仓库内其它子项目对照

- **htmx**：Alpine 管**局部状态与动画**，htmx 偏**用 HTTP 片段换 HTML**；二者常一起用，本仓库分目录便于单独理解。
- **Vue**：需要更强组件化与工程化时对比 Vue 的 SFC + 生态。

## 延伸阅读

- Alpine 插件（如 persist、focus）：<https://alpinejs.dev/plugins>
