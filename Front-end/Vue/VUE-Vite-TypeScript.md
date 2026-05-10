# Vue 前端示例

本目录为 **Vite + Vue 3 + TypeScript** 单页应用，用于与仓库内其他前端栈对照练习；**不依赖后端**，当前页面为「能力展台」式多模块演示。

## 技术栈

- **构建**：Vite 8  
- **UI**：Vue 3（Composition API、`<script setup>`、SFC）  
- **语言**：TypeScript（`vue-tsc` 做类型检查）

## Vue 的优缺点（概览）

面向学习与选型，与本目录代码无强绑定。

### 优点

- **渐进式**：可从「只在一个页面里嵌入一块组件」扩展到完整 SPA，与既有项目共存相对自然。  
- **单文件组件（SFC）**：模板、脚本、样式同文件分区，结构直观，IDE 与插件支持成熟。  
- **响应式模型**：`ref` / `reactive` 与 `computed`、`watch` 等组合清晰；Vue 3 的 Composition API 便于按「逻辑关注点」抽函数复用。  
- **官方生态连贯**：路由（Vue Router）、状态（Pinia）等有官方或事实标准，选型路径相对集中。  
- **模板与渲染**：默认模板语法对习惯 HTML 的开发者友好；亦支持 JSX（按需）。

### 缺点

- **抽象层与魔法感**：模板下编译、响应式代理、异步组件与 Suspense 等仍需一定时间理解边界情况。  
- **与 TS 的极致结合**：SFC 中泛型组件、`defineProps` 复杂推断等场景有时需要额外技巧或配置。  
- **就业与第三方库**：整体岗位与 React 生态圈相比因地域/团队而异，部分垂直领域库以 React 为先。  
- **大型应用纪律**：模块拆分、状态边界、性能测量（如组件更新范围）仍需团队约定，否则可维护性会下降。

### 小结

Vue 适合希望**模板 + 响应式**快速交付、并可能**渐进接入**现有系统的团队；若团队已深度绑定 JSX/某一元框架生态，可对比迁移成本后再选。

## 快速开始

在**本目录**执行（Windows PowerShell 示例）：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Vue'
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
| `npm run build` | `vue-tsc` 类型检查 + 输出到 `dist/` |
| `npm run preview` | 本地预览构建结果 |

本模板默认**未**配置 `npm run lint`；若需 ESLint，可在本目录自行 `vue add eslint` 或参照 Vite 文档添加。

## 目录结构（主要）

```
Front-end/Vue/
├── index.html
├── vite.config.ts
├── package.json
├── VUE-Vite-TypeScript.md       # 本目录说明（按栈命名，便于检索）
├── src/
│   ├── main.ts
│   ├── App.vue                 # 根布局、锚点导航、能力标签、演示栅格
│   ├── style.css               # 全局变量、#app、html[data-theme]
│   ├── composables/
│   │   └── appTheme.ts         # provide / inject 主题、同步 data-theme
│   ├── components/
│   │   ├── PanelFrame.vue      # 命名插槽：title / desc + 默认正文
│   │   ├── ThemeSwitcher.vue
│   │   ├── BasicsDemo.vue      # ref、computed、v-model
│   │   ├── ClockPanel.vue      # onMounted、onUnmounted
│   │   ├── TodoPanel.vue       # v-for :key、v-if、watch 深监听 + localStorage
│   │   ├── WatchSearchDemo.vue # watch 返回清理、防抖 + computed 列表
│   │   ├── HeavyTabsDemo.vue   # Transition mode、重 DOM
│   │   ├── TeleportToastDemo.vue # Teleport、watch 清理定时器
│   │   ├── ReactiveFormDemo.vue  # reactive 表单
│   │   ├── SlotShowcase.vue      # 插槽说明
│   │   ├── BuggyWidget.vue       # 供错误演示用子组件
│   │   └── ErrorCaptureDemo.vue  # onErrorCaptured
│   └── assets/
└── dist/
```

## 本页在演示什么

- **`<script setup>`**：顶层绑定自动暴露给模板。  
- **`provide` / `inject`**：[`appTheme.ts`](src/composables/appTheme.ts) 提供主题，`ThemeSwitcher` 消费。  
- **`ref` / `reactive` / `computed`**：计数与表单对象、派生统计。  
- **`watch`**：待办持久化（`deep: true`）；搜索防抖（回调返回 `clearTimeout`）；Toast 自动关闭清理定时器。  
- **模板指令**：`v-model`、`v-if` / `v-else`、`v-for` 与 `:key`。  
- **`<Transition>`**：标签切换 `mode="out-in"` 与淡入淡出（尊重 `prefers-reduced-motion`）。  
- **`<Teleport>`**：提示挂到 `body`。  
- **插槽**：`PanelFrame` 的默认插槽与 `#title`、`#desc`。  
- **`onErrorCaptured`**：与 React Error Boundary 思路相近的降级处理。  
- **生命周期**：时钟定时器在 `onMounted` 注册、`onUnmounted` 清理。

## 与仓库总览的关系

仓库根目录说明见：[../../README.md](../../README.md)。React 对照示例见：[../React/REACT-Vite-TypeScript.md](../React/REACT-Vite-TypeScript.md)。
