# Marko（Vite + TypeScript）

## 框架简介

**Marko** 由 **eBay** 开源，定位为**高吞吐服务端与客户端**的 UI 语言：`.marko` 单文件组件在编译期做大量优化（流式渲染、细粒度更新），在电商等**首屏与 SEO** 敏感场景有长期实践。语法上接近 HTML + 少量控制流，强调**渐进渲染**与**与 Node 集成**。

- 官方网站：<https://markojs.com/>
- 源码：<https://github.com/marko-js/marko>

## 在本仓库中的角色

本目录在 **Vite** 上使用 **`@marko/vite`**，并设置 **`linked: false`**，以沿用常见 **`index.html` + `main.ts`** 入口，从而与仓库内其它 **Vite SPA** 在目录形态上可比；展台代码演示列表、条件与事件等基础模式。

## 技术栈

| 层级 | 选型 |
|------|------|
| 框架 | Marko 5.x |
| 构建 | Vite 8、`@marko/vite` |
| 语言 | TypeScript |

## 核心概念与特点

| 概念 | 说明 |
|------|------|
| `.marko` 文件 | 组件、样式与逻辑的统一载体。 |
| 编译期优化 | 静态分析模板，生成高效更新与 SSR 代码路径。 |
| 与 React 对比 | Marko 偏「模板 + 编译器驱动」；React 偏「运行时 + JSX」。 |
| 使用场景 | 服务端渲染站点、与现有 Node 中间层紧耦合的 UI。 |

## 优缺点（学习向）

**优点**：性能与流式渲染叙事强；与 Vite 集成后可做现代开发体验。  
**缺点**：国内资料相对较少；应用层模式需阅读官方推荐结构。

## 环境要求

- Node.js 建议 LTS；**仅在本目录** `npm install`。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Marko'
npm install
npm run dev
```

## 默认开发与预览端口

- **5192**（`vite.config.ts` 固定）。

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器 |
| `npm run build` / `npm run preview` | 构建与预览 |

## 与仓库内其它子项目对照

- **Svelte**：同为编译型 UI，可对比「响应式粒度与 SSR 故事」。
- **Next.js**（`Full-stack/Nextjs`）：若关注 Node 侧渲染，可对照元框架层级差异。

## 延伸阅读

- Marko 与 Vite：<https://markojs.com/docs/vite/>
