# Solid 前端示例

## 框架简介

**Solid** 由 Ryan Carniato 创建，采用**细粒度响应式**与 **JSX**：编译后直接在依赖边上订阅更新，**无虚拟 DOM 全树协调**；API 表面与 React 相似（`createSignal` 对应 `useState` 的拆分形态、`Show`/`For` 等控制流组件），但语义是**同步拉取 + 精确失效**，性能特征不同。生态含 **SolidStart** 等全栈方案（本仓库未单独收录时可对照官方）。

- 官方网站：<https://www.solidjs.com/>
- 教程：<https://docs.solidjs.com/>

## 在本仓库中的角色

本目录为 **Vite + Solid + TypeScript** 单页应用，与仓库内 React、Vue、Svelte 子项目**同一构建范式**（Vite、独立 `package.json`）；**不依赖后端**，页面为「能力展台」式演示。

## 技术栈

- **构建**：Vite 6  
- **UI**：Solid（`createSignal` / `createMemo`、`Show`、`For`、`onCleanup` 等）  
- **语言**：TypeScript（由 `vite-plugin-solid` 处理 JSX）

## Solid 的优缺点（概览）

面向学习与选型，与本目录代码无强绑定。

### 优点

- **细粒度响应式**：编译后的更新按依赖追踪，常见 UI 更新路径轻量。  
- **与 React 相似的 JSX**：迁移学习成本相对可控；无虚拟 DOM 整树 diff。  
- **显式资源清理**：`onCleanup` 与组件作用域对齐，副作用模型清晰。

### 缺点

- **生态规模**：岗位与周边库数量通常小于 React；企业级组件库需自行评估。  
- **心智差异**：虽像 React，但 props 访问、子组件更新规则与 Hooks 并不相同，文档需细读。  
- **元框架**：路由、数据加载等常配合 SolidStart 等；本示例为纯 Vite SPA。

### 小结

Solid 适合希望 **保留 JSX、又偏向编译期 + 信号驱动更新** 的团队；若强依赖 React 独占库，需评估兼容层或替代方案。

## 快速开始

在**本目录**执行（Windows PowerShell 示例）：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Solid'
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
| `npm run build` | `vite build` |
| `npm run preview` | 本地预览构建结果 |

本模板默认**未**配置 ESLint；需要时可按 Vite 文档在本目录自行添加。

## 目录结构（要点）

```
Solid/
  SOLID-Vite-TypeScript.md   # 本说明
  index.html
  vite.config.ts
  tsconfig.json
  src/
    index.tsx                 # render 入口
    App.tsx
    app.css
    components/               # 能力展台分区
    assets/
```
