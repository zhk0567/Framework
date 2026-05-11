# Ionic（React · Vite + TypeScript）

## 框架简介

**Ionic** 是一套面向**跨平台应用**的 UI 组件与工具集合：组件样式接近原生移动控件，常配合 **Capacitor** 或 **Cordova** 访问相机、文件系统等设备能力。本仓库子目录采用 **Ionic React**（组件即 React 组件），由 **Vite** 负责开发与打包，便于先做 **Web / PWA**，再渐进接入原生壳。

- 官方网站：<https://ionicframework.com/>
- React 集成文档：<https://ionicframework.com/docs/react>

底层大量 UI primitive 来自 **Stencil** 编译的 Web Components，外层以 React 封装。

## 在本仓库中的角色

演示 **Ionic React + Vite** 的「能力展台」：列表、表单、导航等常见移动端模式，并与 **纯 React Vite**、**Capacitor** 子目录对照「从 Web 到壳层」的边界。

## 技术栈

| 层级 | 选型 |
|------|------|
| UI | `@ionic/react`、Ionic 路由与布局组件 |
| 框架 | React + Vite 8 |
| 语言 | TypeScript |

## 核心概念与特点

| 概念 | 说明 |
|------|------|
| 页面结构 | `IonApp`、`IonPage`、`IonHeader`、`IonContent` 等布局惯用法。 |
| 路由 | 常用 `@ionic/react-router` 与 React Router 集成。 |
| 主题 | CSS 变量与浅色/深色模式。 |
| 与 Capacitor | Ionic 管 UI；Capacitor 管原生桥与打包，见 `Front-end/Capacitor`。 |

## 优缺点（学习向）

**优点**：上手快、移动端组件丰富、与 React 技能栈叠加。  
**缺点**：视觉与交互偏「移动应用范式」；桌面端定制需额外设计。

## 环境要求

- Node.js 建议 LTS；**仅在本目录**安装依赖。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Ionic'
npm install
npm run dev
```

## 默认开发与预览端口

- **5205**（`vite.config.ts` 中 `strictPort: true`）。

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器 |
| `npm run build` / `npm run preview` | 构建与预览 |

## 与仓库内其它子项目对照

- **Capacitor**：同一仓库内另有 Capacitor 示例，可对照「壳 + Web 资源」流程。
- **Expo / React-Native**：若目标为纯 RN 路线，可对比选型。

## 延伸阅读

- Ionic + Capacitor 入门：<https://ionicframework.com/docs/react/your-first-app>
