# Angular 前端示例

## 框架简介

**Angular** 由 Google 维护，是面向**大型企业应用**的**一体化平台**：内置**依赖注入**、**路由**、**表单（响应式/模板驱动）**、**HTTP 客户端**、**国际化**等模块。模板语法接近 HTML 扩展；**Angular 16+** 强化 **Signals** 与 **Standalone API**，逐步弱化传统 `NgModule` 边界。构建由 **Angular CLI** 与 **esbuild** 管线驱动，**不是 Vite**（与本仓库多数 `Front-end/*` 不同）。

- 官方文档：<https://angular.dev/>
- 更新策略与 LTS：<https://angular.dev/reference/releases>

## 在本仓库中的角色

本目录为 **Angular CLI + TypeScript** 单页应用（**Standalone** 组件、**signal**、内置 **`@if` / `@for`** 控制流）；与仓库内 React / Vue / Svelte / Solid 子项目一样为**独立工程**、**不依赖后端**。构建链为 **Angular CLI**（`@angular-devkit/build-angular:application`，基于 esbuild），**不是 Vite**。

## 技术栈

- **工具**：Angular CLI 19  
- **运行时**：Angular 核心 + **Zone.js**（默认变更检测）  
- **UI 模式**：Standalone `@Component`、模板内控制流、**RxJS**（示例中用 `interval` + `takeUntilDestroyed`）

## Angular 的优缺点（概览）

面向学习与选型，与本目录代码无强绑定。

### 优点

- **一体化平台**：路由、表单、HTTP、国际化等官方方案齐全，适合中大型团队统一规范。  
- **强类型模板**：AOT 与模板类型检查（配合 IDE）减少低级错误。  
- **signal 与控制流**：与旧版结构型指令相比，语法与类型更可读。

### 缺点

- **包体与运行时**：相对轻量 Vite SPA，默认产物更大；可通过懒加载、替换 Zone 等优化。  
- **学习曲线**：概念（模块历史、DI、RxJS、变更检测）较多，上手慢于「只写组件」的栈。  
- **构建工具**：以 CLI 为主；与仓库内「全 Vite」子项目工具链不一致，对照时需留意。

### 小结

Angular 适合需要**长周期维护、规范统一、全栈式官方能力**的项目；若追求最小工具链与包体，可优先评估 Vite 系子目录。

## 快速开始

在**本目录**执行（Windows PowerShell 示例）：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Angular'
npm install
npm start
```

浏览器默认打开 **`http://127.0.0.1:4200/`**（`ng serve` 端口见终端输出）。生产构建与预览：

```powershell
npm run build
```

构建完成后，用任意静态服务器打开终端输出的 **Output location** 目录（常见为 `dist/angular/browser`）即可预览。

## 脚本说明

| 命令 | 作用 |
|------|------|
| `npm start` | `ng serve`，开发热替换 |
| `npm run build` | `ng build`，输出到 `dist/angular/browser` |
| `npm run watch` | 监听模式构建 |

## 目录结构（要点）

```
Angular/
  ANGULAR-CLI-TypeScript.md   # 本说明
  angular.json
  package.json
  src/
    main.ts
    index.html
    styles.css
    app/
      app.config.ts
      app.component.ts
      app.component.html
      components/             # 能力展台分区
  public/
    angular.svg
```
