# Svelte 前端示例

本目录为 **Vite + Svelte 5 + TypeScript** 单页应用，与仓库内 React、Vue 子项目**同一构建范式**（Vite、独立 `package.json`）；**不依赖后端**，页面为「能力展台」式演示。

## 技术栈

- **构建**：Vite 8  
- **UI**：Svelte 5（**runes**：`$state` / `$derived` / `$effect`，`$props()`，`{#snippet}` / `{@render}`）  
- **语言**：TypeScript（`svelte-check` 做模板与脚本类型检查）

## Svelte 的优缺点（概览）

面向学习与选型，与本目录代码无强绑定。

### 优点

- **编译期为主**：将组件编译为细粒度 DOM 更新，常见场景下包体与运行时开销相对可控。  
- **模板即产品代码**：`{#if}`、`{#each}`、`class:`、`transition:` 等指令表达力强，少写样板状态机。  
- **Svelte 5 runes**：响应式边界显式（`$state` 等），与 TypeScript 组合更直观。  
- **Snippet**：替代旧插槽的片段组合方式，类型可追溯到 `Snippet`。  
- **官方工具链成熟**：`@sveltejs/vite-plugin-svelte`、`svelte-check` 与 Vite 集成简单。

### 缺点

- **生态规模**：通用岗位与第三方库数量通常仍小于 React；垂直领域需自行评估组件库与示例。  
- **心智模型切换**：从 JSX 或 Vue SFC 迁到 Svelte 模板 + 编译器语义需要适应期。  
- **元框架选择**：大型应用常配合 SvelteKit 等；本示例为纯 Vite SPA，路由等需自行叠加。  
- **高级模式文档**：编译器边界、性能剖析等与 React/Vue 的资料分布不同，排查问题有时要读源码或 RFC。

### 小结

Svelte 适合希望**更少运行时抽象、偏模板 + 编译器驱动**的团队；若强依赖某一 React 生态子域，需评估库支持与迁移成本。

## 快速开始

在**本目录**执行（Windows PowerShell 示例）：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Svelte'
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
| `npm run build` | `vite build` + `svelte-check` |
| `npm run preview` | 本地预览构建结果 |
| `npm run check` | 仅运行 `svelte-check` |

本模板默认**未**配置 ESLint；需要时可按 Vite 文档在本目录自行添加。

## 本页演示映射（特点 → 文件）

| 特点 | 位置 |
|------|------|
| `$state` / `$derived` / `bind:` | `src/components/RunesBasics.svelte` |
| `$effect` 清理 | `src/components/EffectClock.svelte` |
| `{#each ... (key)}` 与持久化 | `src/components/EachTodo.svelte` |
| `{#snippet}`、`$props()`、`{@render}` | `src/components/SnippetPanel.svelte`、`src/App.svelte` |
| `svelte/transition` | `src/components/TransitionCard.svelte` |
| `class:` 指令 | `src/components/ClassToggle.svelte` |
| 入口 `mount` | `src/main.ts` |

## 目录结构（主要）

```
Front-end/Svelte/
├── index.html
├── vite.config.ts
├── svelte.config.js
├── package.json
├── SVELTE-Vite-TypeScript.md   # 本目录说明（按栈命名，便于检索）
├── public/
│   └── favicon.svg
└── src/
    ├── main.ts
    ├── App.svelte
    ├── app.css
    ├── vite-env.d.ts
    ├── assets/
    │   └── svelte.svg
    └── components/
        ├── RunesBasics.svelte
        ├── EffectClock.svelte
        ├── EachTodo.svelte
        ├── SnippetPanel.svelte
        ├── TransitionCard.svelte
        └── ClassToggle.svelte
```

## 与仓库总览的关系

仓库根目录说明见：[../../README.md](../../README.md)。React / Vue 对照见 [../React/REACT-Vite-TypeScript.md](../React/REACT-Vite-TypeScript.md)、[../Vue/VUE-Vite-TypeScript.md](../Vue/VUE-Vite-TypeScript.md)。
