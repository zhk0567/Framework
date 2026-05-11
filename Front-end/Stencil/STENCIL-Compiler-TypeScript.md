# Stencil（Web 组件编译器 + TypeScript）

## 框架简介

**Stencil** 是 Ionic 团队开源的 **Web Components 编译器**：你用类 TypeScript/JSX 的语法（`@Component`）编写组件，编译产出**符合标准的自定义元素**与 **lazy-loader**，便于发布跨框架复用的组件库（如 **Ionic Core** 即由 Stencil 构建）。Stencil **不是**通用 SPA 元框架，而是偏「**设计系统 / 组件库工具链**」。

- 官方网站：<https://stenciljs.com/>
- 源码：<https://github.com/ionic-team/stencil>

与 **Lit** 相比：Stencil 强调**编译期优化**与**按需加载**；Lit 更偏运行时薄层与标准 API。

## 在本仓库中的角色

本目录基于官方 **component starter**：`npm start` 拉起 **Stencil 自带 dev server**（**非 Vite**），演示单个示例组件 `my-component` 的构建与文档式开发体验。

## 技术栈

| 层级 | 选型 |
|------|------|
| 编译器 | `@stencil/core` 4.x / 5.x 预发布 |
| 测试 | Vitest + `@stencil/vitest`（按需） |
| 语言 | TypeScript |

## 核心概念与特点

| 概念 | 说明 |
|------|------|
| `@Component` | 声明标签名、样式模式、shadow 等元数据。 |
| `render()` | 返回 JSX 风格模板，编译为高效的原生 DOM 操作。 |
| 输出格式 | ESM / CJS、单文件或按标签拆分的 lazy bundle。 |
| 与 Vite 项目共存 | 组件库产物可被任意 Vite/React/Vue 应用 `npm link` 或发包引用。 |

## 优缺点（学习向）

**优点**：适合打造**跨技术栈 UI 库**；与标准 Web Components 对齐。  
**缺点**：应用级路由、状态机需在外部应用中整合；心智模型是「编译器」而非「单页框架」。

## 环境要求

- Node.js 建议 LTS；**仅在本目录** `npm install`。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Stencil'
npm install
npm start
```

默认会打开 **Stencil 开发服务器**（端口以终端输出为准，常见为 **3333** 或配置项指定）。

## 展台代码位置

- 主要示例：`src/components/my-component/`（组件实现与样式）。

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm start` | `stencil build --dev --watch --serve`：开发 + 监听 + 本地服务 |
| `npm run build` | 生产构建组件包 |
| `npm run generate` | 交互式生成新组件脚手架 |

## 与仓库内其它子项目对照

- **Lit**：手写标准自定义元素的轻量方案。
- **Ionic**：Ionic React/Vue 的底层核心组件多来自 Stencil 编译产物。

## 延伸阅读

- Stencil 配置：<https://stenciljs.com/docs/config>
- 分发与 loader：<https://stenciljs.com/docs/distribution>
