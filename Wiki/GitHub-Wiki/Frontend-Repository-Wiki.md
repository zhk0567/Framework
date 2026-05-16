
## 前端组件 - Repository Wiki Page

<details>
<summary>Relevant source files</summary>

- [frontend/repository_wiki.md](https://github.com/zhk0567/Framework/blob/main/frontend/repository_wiki.md)
- [frontend/SVELTE-Vite-TypeScript.md](https://github.com/zhk0567/Framework/blob/main/frontend/SVELTE-Vite-TypeScript.md)
- [frontend/React-Native/REACT-NATIVE-Web-TypeScript.md](https://github.com/zhk0567/Framework/blob/main/frontend/React-Native/REACT-NATIVE-Web-TypeScript.md)
- [frontend/Fable/FABLE-DotNet.md](https://github.com/zhk0567/Framework/blob/main/frontend/Fable/FABLE-DotNet.md)
- [Back-end/Node/Directus/DIRECTUS-Node-TypeScript.md](https://github.com/zhk0567/Framework/blob/main/Back-end/Node/Directus/DIRECTUS-Node-TypeScript.md)
- [Back-end/Go/OapiCodegen/OAPICodegen-Go.md](https://github.com/zhk0567/Framework/blob/main/Back-end/Go/OapiCodegen/OAPICodegen-Go.md)
- [Back-end/PHP/Laravel/LARAVEL-PHP.md](https://github.com/zhk0567/Framework/blob/main/Back-end/PHP/Laravel/LARAVEL-PHP.md)
- [Back-end/Python/Django/DJANGO-Python.md](https://github.com/zhk0567/Framework/blob/main/Back-end/Python/Django/DJANGO-Python.md)
- [Back-end/Node/NestJS/NESTJS-Node-TypeScript.md](https://github.com/zhk0567/Framework/blob/main/Back-end/Node/NestJS/NESTJS-Node-TypeScript.md)
- [Full-stack/Astro/Astro-Vite-TypeScript.md](https://github.com/zhk0567/Framework/blob/main/Full-stack/Astro/Astro-Vite-TypeScript.md)
</details>

# 前端组件 - Repository Wiki Page

本页面介绍前端组件在框架中的使用，主要聚焦于 Vite、Svelte、React Native、Fable、Laravel、Django、Node.js、Astro 等技术栈的组件和实现方式。本页面旨在为开发者提供一个快速参考，帮助理解和使用框架中的前端组件。

## 1. 架构概览

本框架采用模块化架构，前端组件以独立模块的形式存在，方便复用和维护。各组件之间通过 API 接口进行交互，遵循 RESTful 风格。 框架采用 Vite 作为构建工具，支持热模块替换 (HMR)，提高开发效率。

## 2. Svelte 前端示例

### 2.1 框架简介

Svelte 是由 Rich Harris 创建（现由 Vercel 等社区与公司共同推进），核心理念是**编译时框架**：在构建阶段把组件编译为高效的原生 JS，运行时**无虚拟 DOM 整树 diff** 负担。**Svelte 5** 引入 **runes**（`$state`、`$derived`、`$effect`、`$props()` 等）统一响应式语义，并强化 **snippet** 与 `{@render}` 等组合模式。

- 官方文档：<https://svelte.dev/docs>
- SvelteKit（全栈）：<https://svelte.dev/docs/kit>（对照本仓库 `Full-stack/SvelteKit`）

### 2.2 技术栈

| 层级 | 选型 |
|------|------|
| UI | `react-native-web` |
| 构建 | Vite 8 |
| 语言 | TypeScript |

### 2.3 环境要求

- Node.js 建议 LTS；**仅在本目录** `npm install`。

### 2.4 快速开始

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

## 3. React Native（react-native-web · Vite + TypeScript）

### 3.1 框架简介

**React Native** 由 Meta 维护，用 **React 组件模型** 构建 **iOS / Android** 原生视图树。**react-native-web** 则在浏览器中提供 `View` / `Text` / `Pressable` / `FlatList` 等兼容实现，使大量 RN 代码可复用到 Web（布局与样式仍受 CSS 与浏览器差异约束）。

- React Native：<https://reactnative.dev/>
- react-native-web：<https://necolas.github.io/react-native-web/>

### 3.2 在本仓库中的角色

本目录在 **浏览器** 中用 **Vite + react-native-web** 跑展台，便于**无 Android / iOS SDK** 时对照布局与交互；**真机、OTA、原生预构建**请优先对照 **`Front-end/Expo`** 或官方 CLI 生成的带 `android/`、`ios/` 的工程。

### 3.3 技术栈

| 层级 | 选型 |
|------|------|
| UI | `react-native-web` |
| 构建 | Vite 8 |
| 语言 | TypeScript |

### 3.4 环境要求

- Node.js 建议 LTS；**仅在本目录** `npm install`。

### 3.5 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\React-Native'
npm install
npm run dev
```

## 4. Fable（F# → JavaScript）

### 4.1 框架简介

**Fable** 是一个 **F# 到 JavaScript** 的编译器：让你在浏览器或 Node 侧复用 **F# 的类型推断、代数数据类型、模式匹配** 等语言特性，同时产出可读、可调试的 JS（或进一步交给打包工具）。常与 **Elmish**（MVU 模式）、**Feliz**（React 绑定）或 **Vite** 组合构建 SPA。

- 官方网站：<https://fable.io/>
- 文档：<https://docs.fable.io/>

### 4.2 在本仓库中的角色

本目录演示 **最小 DOM 示例**：`src/App.fs` 经 Fable 编译为 `dist/App.js`，由 `index.html` 引用；用于与 **TypeScript/React** 子目录对照「函数式语言在前端的落地形态」。

### 4.3 技术栈

| 层级 | 选型 |
|------|------|
| 语言 | F# |
| 编译 | `dotnet fable` |
| 本地预览 | Vite / npm 脚本（见 `package.json`） |
| 运行时依赖 | **.NET SDK**（建议 8+）用于 `dotnet tool restore` 与 Fable CLI |

### 4.4 环境要求

- 安装 [.NET SDK](https://dotnet.microsoft.com/download)。
- **Node.js**（用于 `npm install` 与 `npm run dev`）。

### 4.5 准备（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Fable'
dotnet tool restore
npm install
```

## 5.  ... (Continue with other components and technologies as per the source files)

Sources: [frontend/repository_wiki.md:1-10]()


---
