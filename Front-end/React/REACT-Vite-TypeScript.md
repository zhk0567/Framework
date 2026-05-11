# React 前端示例

## 框架简介

**React** 由 Meta 维护，是当前**生态最广**的声明式 UI 库：用 **JSX/TSX** 描述组件树，用 **Hooks**（`useState`、`useEffect`、`use` 等）组织状态与副作用。自 2013 年开源以来经历了 Fiber、并发渲染、Server Components 等演进；**React 19** 以 **react.dev** 为官方文档主站。React **只负责视图层**，路由、数据获取、SSR/SSG 通常与 **React Router**、**TanStack Query**、**Next.js**（见仓库 `Full-stack/Nextjs`）等组合使用。

- 官方文档：<https://react.dev/>
- 版本发布说明：<https://react.dev/blog>

## 在本仓库中的角色

本目录为 **Vite + React 19 + TypeScript** 单页应用，用于练习与展示 React 常见写法；**不依赖后端**，接口与数据均为浏览器内模拟或本地存储。

## 技术栈

- **构建**：Vite 8  
- **UI**：React 19、react-dom  
- **语言**：TypeScript  

## React 的优缺点（概览）

以下面向**学习与选型**，不针对某一具体版本；与本目录演示代码无强绑定。

### 优点

- **声明式 UI 与组件化**：用 JSX/TSX 描述「界面应处于何种状态」，便于拆分、复测与协作；复杂页面可通过组合小组件控制复杂度。  
- **生态与就业面**：周边库（路由、状态、数据请求、元框架等）丰富，资料与岗位相对多，遇到问题较容易检索到解法。  
- **运行时能力与演进方向**：并发渲染、`useTransition` / `useDeferredValue`、Suspense 等有助于在交互密集场景下平衡响应性与吞吐量（需正确建模，并非自动变快）。  
- **与 TypeScript 配合成熟**：组件 props、Reducer action、Context 等类型在工程实践中沉淀较多，类型收窄与重构体验较好。  
- **官方与社区方向清晰**：文档（[react.dev](https://react.dev)）与 DevTools 持续更新，新特性有明确迁移与最佳实践讨论。

### 缺点

- **概念与规则较多**：Hooks 依赖数组、`useEffect` 误用、闭包陈旧值、`memo` / `useMemo` / `useCallback` 的取舍等，需要一定时间形成肌肉记忆；StrictMode 在开发下的双重调用也可能让初学者困惑。  
- **「只学 React」往往不够**：真实项目通常还要选路由、全局状态、请求层、构建与部署；技术栈组合带来额外决策成本。  
- **纯 CSR 的 SEO 与首屏**：浏览器端渲染对爬虫与首屏指标不友好时，需要 SSR/SSG（如 Next.js 等）或额外架构，复杂度上升。  
- **抽象与样板**：大型应用中易出现深层 Context、prop drilling 或过度抽象；团队需约定状态边界与目录结构，否则维护成本会升高。  
- **性能与包体**：若未做代码分割与合理渲染边界，bundle 与重渲染仍可能成为瓶颈；优化往往需要结合测量（Profiler、性能面板）而非凭感觉加 `memo`。

### 小结

React 适合希望**以组件为中心**构建中大型交互界面、并愿意投入学习其**状态与副作用模型**的团队；若场景以静态内容为主、或更偏好模板语法与渐进增强，可对比其他框架后再做决定。

## 快速开始

在**本目录**执行（Windows PowerShell 示例）：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\React'
npm install
npm run dev
```

浏览器打开终端中提示的本地地址即可。生产构建与预览：

```powershell
npm run build
npm run preview
```

## 脚本说明

| 命令 | 作用 |
|------|------|
| `npm run dev` | 开发服务器（HMR） |
| `npm run build` | 类型检查 + 输出到 `dist/` |
| `npm run preview` | 本地预览构建结果 |
| `npm run lint` | ESLint 检查 |

## 目录结构（主要）

```
Front-end/React/
├── index.html
├── vite.config.ts
├── package.json
├── REACT-Vite-TypeScript.md   # 本目录说明（按栈命名，便于检索）
├── src/
│   ├── main.tsx              # 入口，含 StrictMode
│   ├── App.tsx               # 页头、锚点导航、能力总览、演示栅格组合
│   ├── App.css
│   ├── index.css             # 全局变量与主题 data-theme
│   ├── demo/
│   │   ├── LiveClock.tsx     # useEffect + 定时器清理
│   │   ├── TodoPanel.tsx     # useReducer、useMemo、memo、列表 key、localStorage
│   │   ├── DeferredSearchDemo.tsx  # useDeferredValue + 长列表筛选
│   │   ├── TabHeavyDemo.tsx  # useTransition、isPending、大量 DOM 切换
│   │   ├── FormAccessDemo.tsx      # useId、useRef 聚焦
│   │   ├── PortalToastDemo.tsx     # createPortal、useEffect 清理定时器
│   │   └── ErrorBoundaryDemo.tsx   # 类组件 ErrorBoundary + 演示子树错误
│   └── theme/
│       └── ThemeContext.tsx  # Context、订阅系统主题、同步 html data-theme
└── dist/                     # 构建产物（npm run build 后生成）
```

## 页面在演示什么

- **组件与 JSX**：`App.tsx` 将页头、锚点导航、能力标签与各演示卡片拼成一棵树。  
- **Context**：`ThemeContext` 提供主题模式（跟随系统 / 浅色 / 深色），子组件用 `useTheme` 消费。  
- **状态**：待办用 `useReducer`；表单与搜索等用受控的 `useState`。  
- **副作用**：时钟用 `useEffect` 注册 `setInterval` 并在卸载时清理；主题与 `document.documentElement.dataset.theme` 同步；Portal 提示在关闭时清理定时器。  
- **并发**：`DeferredSearchDemo` 用 `useDeferredValue` 将输入与重列表筛选解耦；`TabHeavyDemo` 用 `startTransition` 切换重面板并展示 `isPending`。  
- **Portal**：`PortalToastDemo` 将提示渲染到 `document.body`。  
- **可访问性**：`FormAccessDemo` 用 `useId` 关联 `label` 与控件；提交后 `useRef` 聚焦回姓名框。  
- **错误边界**：`ErrorBoundaryDemo` 内类组件 `ErrorBoundary` 捕获子树错误，重试时通过 `key` 重挂载子树。  
- **性能习惯**：待办统计用 `useMemo`；行组件用 `React.memo`；列表项使用稳定 `key`。  
- **持久化**：待办列表写入 `localStorage`，键名为 `react-demo-todos`。  
- **动效降级**：`App.css` 中对 `prefers-reduced-motion` 关闭短时过渡与 Toast 入场动画。

## 与仓库总览的关系

仓库根目录的简短说明见：[../../README.md](../../README.md)。
