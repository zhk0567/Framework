# Framework

## 这是一个怎样的项目

**Framework** 是一份**多技术栈对照学习用的样板仓库**（sample / playground）：把主流与若干扩展方向上的**前端**、**全栈**以及 **Node / Go** 后端，各自做成**可单独克隆后就能跑**的最小工程，集中放在一个仓库里，方便你**并排阅读、改同一类需求、对照语法与工具链**——例如「列表 + 请求 + 本地状态」在前端各子目录里长什么样，或在不同 Go 框架里如何挂同一路由形态。

**它适合用来**：技术选型前的**亲手试错**、面试/教学前的**快速复习**、从 0 复制某一栈时的**最小可运行起点**、以及和根目录 [FRAMEWORK-GAP-LIST.md](FRAMEWORK-GAP-LIST.md) 对照，了解「常见但本仓库未收录」的名字。

**它刻意不做成**：一个绑在一起的单体产品、一套统一的业务领域模型、或强制共享 UI/业务代码的 monorepo。**各子目录彼此独立**：依赖只装在**该子目录**内；**不要在仓库根目录执行 `npm install`**（根目录不设 Node 工程）。

**内容大致分三类**：

| 类别 | 路径 | 你在里面会看到什么 |
|------|------|----------------------|
| **前端** | [`Front-end/`](Front-end) | 多数为 **Vite + TypeScript**（或框架官方 CLI）下的单页 **「能力展台」**：用一页或少量页面演示该栈典型的状态、副作用、模板/JSX、路由等；每个目录有与栈对应的说明文档（如 `VUE-Vite-TypeScript.md`）。**Stencil** 走自身编译器；**Fable** 需 **.NET SDK**。 |
| **全栈** | [`Full-stack/`](Full-stack) | **路由 + 页面 + 同源 API**（或开发态等价能力）的小示例，与纯 Vite SPA 对照；端口与 **RedwoodJS 未入库原因** 见 [`Full-stack/README.md`](Full-stack/README.md)。 |
| **后端** | [`Back-end/`](Back-end) | [`Back-end/Node/`](Back-end/Node) 为 **Fastify、NestJS**；[`Back-end/Go/`](Back-end/Go) 为多种 **Go** Web 框架；各子工程在 **HTTP/JSON**（如 `/api/*`）形态上对齐，便于对照中间件、路由注册与响应结构。 |

**规模一览**：**15** 个前端 + **8** 个全栈 + **2** 个 Node 后端 + **9** 个 Go 后端，共 **34** 个可独立运行的子工程（**RedwoodJS** 因官方 CLI 对 Node 版本与 yarn 等约束，未纳入生成树，见 [FRAMEWORK-GAP-LIST.md](FRAMEWORK-GAP-LIST.md) 第一节）。

**目录约定（检索用）**

- **前端**：[`Front-end/<框架名>/`](Front-end) — 主流 **React / Vue / Svelte / Solid**（Vite）、**Angular**（CLI），及 **Qwik、Preact、Lit、Alpine、Mithril、Backbone、Ember、Stencil、Aurelia、Fable** 等扩展对照。  
- **全栈**：[`Full-stack/<名称>/`](Full-stack) — **Next.js、Nuxt、SvelteKit、Remix（React Router 7 模板）、Astro、Analog、Blitz（Next 占位）、TanStack Router 脚手架** 等；清单与端口见 [`Full-stack/README.md`](Full-stack/README.md)。  
- **后端**：[`Back-end/Node/`](Back-end/Node)（npm 栈）、[`Back-end/Go/`](Back-end/Go)（各 `go.mod` 模块）— 与前端子工程**无强制依赖关系**，可单独运行、单独对照。

---

## 本仓库适合做什么

| 用途 | 说明 |
|------|------|
| **前端对照** | 在同一需求下对比：组件框架（React / Vue / Svelte / Solid / Angular / Preact / Aurelia）、**全栈元框架**（见 `Full-stack/`）、**可恢复**（Qwik）、**Web 组件**（Lit / Stencil）、**指令式**（Alpine）、**轻量 MVC**（Mithril / Backbone / Ember）、**F# 编译**（Fable）等写法与范式差异。 |
| **后端对照** | 在 **Node**（`Back-end/Node`）与 **Go**（`Back-end/Go`）之间对照：路由如何挂载、JSON 如何返回、常见中间件与项目结构有何不同。 |
| **复制起步** | 选定某一栈后，**整目录复制**到自有项目或课程作业中，再按需删减展台代码、接入真实后端与鉴权。 |

---

## 环境要求

- **Node.js**：建议当前 LTS（[`Front-end`](Front-end)、[`Full-stack`](Full-stack) 与 [`Back-end/Node`](Back-end/Node) 需要）。其中 **`Full-stack/Astro`** 模板要求 **Node ≥ 22.12**（见该目录 `package.json` 的 `engines`）。  
- **Go**：1.21+（[`Back-end/Go`](Back-end/Go) 下各子目录均自带 `go.mod`；安装后可用 `go version` 自检）。  
- **包管理**：前端与 Node 后端示例使用 **npm**；若用 pnpm / yarn，请在各子目录内自行替换。  
- **终端**：命令示例针对 **Windows PowerShell**；执行前请 `Set-Location` 到对应子目录。

---

## 子项目一览

### 前端（`Front-end/`）

| 子项目 | 技术栈 | 默认入口 | 说明文档 |
|--------|--------|----------|----------|
| [Front-end/React](Front-end/React) | React 19 · Vite · TypeScript | `npm run dev` 后见终端 URL | [REACT-Vite-TypeScript.md](Front-end/React/REACT-Vite-TypeScript.md) |
| [Front-end/Vue](Front-end/Vue) | Vue 3 · Vite · TypeScript | 同上 | [VUE-Vite-TypeScript.md](Front-end/Vue/VUE-Vite-TypeScript.md) |
| [Front-end/Svelte](Front-end/Svelte) | Svelte 5 · Vite · TypeScript | 同上 | [SVELTE-Vite-TypeScript.md](Front-end/Svelte/SVELTE-Vite-TypeScript.md) |
| [Front-end/Solid](Front-end/Solid) | Solid · Vite · TypeScript | 同上 | [SOLID-Vite-TypeScript.md](Front-end/Solid/SOLID-Vite-TypeScript.md) |
| [Front-end/Angular](Front-end/Angular) | Angular 19 · CLI · TypeScript | `npm start` → 默认 `http://127.0.0.1:4200/` | [ANGULAR-CLI-TypeScript.md](Front-end/Angular/ANGULAR-CLI-TypeScript.md) |

#### 更多前端（对照学习扩展）

| 子项目 | 技术栈 | 说明文档 |
|--------|--------|----------|
| [Front-end/Qwik](Front-end/Qwik) | Qwik City · Vite | [QWIK-Vite-TypeScript.md](Front-end/Qwik/QWIK-Vite-TypeScript.md) |
| [Front-end/Preact](Front-end/Preact) | Preact · Vite · TS | [PREACT-Vite-TypeScript.md](Front-end/Preact/PREACT-Vite-TypeScript.md) |
| [Front-end/Lit](Front-end/Lit) | Lit · Vite · TS | [LIT-Vite-TypeScript.md](Front-end/Lit/LIT-Vite-TypeScript.md) |
| [Front-end/Alpine](Front-end/Alpine) | Alpine.js · Vite · TS | [ALPINE-Vite-TypeScript.md](Front-end/Alpine/ALPINE-Vite-TypeScript.md) |
| [Front-end/Mithril](Front-end/Mithril) | Mithril · Vite · TS | [MITHRIL-Vite-TypeScript.md](Front-end/Mithril/MITHRIL-Vite-TypeScript.md) |
| [Front-end/Backbone](Front-end/Backbone) | Backbone · jQuery · Vite · TS | [BACKBONE-Vite-TypeScript.md](Front-end/Backbone/BACKBONE-Vite-TypeScript.md) |
| [Front-end/Ember](Front-end/Ember) | Ember CLI · ember-demo | [EMBER-CLI-TypeScript.md](Front-end/Ember/EMBER-CLI-TypeScript.md) |
| [Front-end/Stencil](Front-end/Stencil) | Stencil 编译器 | [STENCIL-Compiler-TypeScript.md](Front-end/Stencil/STENCIL-Compiler-TypeScript.md) |
| [Front-end/Aurelia](Front-end/Aurelia) | Aurelia 2 · Vite（端口 `5177`） | [AURELIA-Vite-TypeScript.md](Front-end/Aurelia/AURELIA-Vite-TypeScript.md) |
| [Front-end/Fable](Front-end/Fable) | Fable · F#（需 .NET） | [FABLE-DotNet.md](Front-end/Fable/FABLE-DotNet.md) |

### 全栈（`Full-stack/`）

| 子项目 | 技术栈 | 默认入口 | 说明文档 |
|--------|--------|----------|----------|
| [Full-stack/Nextjs](Full-stack/Nextjs) | Next.js 15 · App Router · React 19 · TS | **http://127.0.0.1:3030/** | [NEXTJS-FullStack-TypeScript.md](Full-stack/Nextjs/NEXTJS-FullStack-TypeScript.md) |
| [Full-stack/Nuxt](Full-stack/Nuxt) | Nuxt 4 · Vue 3 · Nitro | **http://127.0.0.1:3031/** | [NUXT-FullStack-TypeScript.md](Full-stack/Nuxt/NUXT-FullStack-TypeScript.md) |
| [Full-stack/SvelteKit](Full-stack/SvelteKit) | SvelteKit 2 · Svelte 5 | **http://127.0.0.1:3032/** | [SVELTEKIT-FullStack-TypeScript.md](Full-stack/SvelteKit/SVELTEKIT-FullStack-TypeScript.md) |
| [Full-stack/Remix](Full-stack/Remix) | React Router 7（Remix 演进栈）· TS | **http://127.0.0.1:3033/** | [REMIX-FullStack-TypeScript.md](Full-stack/Remix/REMIX-FullStack-TypeScript.md) |
| [Full-stack/Astro](Full-stack/Astro) | Astro 6 · TS | **http://127.0.0.1:3034/** | [ASTRO-FullStack-TypeScript.md](Full-stack/Astro/ASTRO-FullStack-TypeScript.md) |
| [Full-stack/Analog](Full-stack/Analog) | Analog · Angular 19 · Vite | **http://127.0.0.1:3035/** | [ANALOG-FullStack-TypeScript.md](Full-stack/Analog/ANALOG-FullStack-TypeScript.md) |
| [Full-stack/Blitz](Full-stack/Blitz) | Blitz 占位 · Next App Router | **http://127.0.0.1:3036/** | [BLITZ-FullStack-TypeScript.md](Full-stack/Blitz/BLITZ-FullStack-TypeScript.md) |
| [Full-stack/tanstack-start](Full-stack/tanstack-start) | TanStack Router（CLI 模板）· Vite | **http://127.0.0.1:3038/** | [TANSTACK-FullStack-TypeScript.md](Full-stack/tanstack-start/TANSTACK-FullStack-TypeScript.md) |

端口与补充说明（含 **RedwoodJS** 未入库原因）见：[Full-stack/README.md](Full-stack/README.md)。

### 后端 · Node（`Back-end/Node/`）

| 子项目 | 技术栈 | 默认入口（本地） | 说明文档 |
|--------|--------|------------------|----------|
| [Back-end/Node/Fastify](Back-end/Node/Fastify) | Fastify 5 · TypeScript | 呈现页 `http://127.0.0.1:3000/` | [FASTIFY-Node-TypeScript.md](Back-end/Node/Fastify/FASTIFY-Node-TypeScript.md) |
| [Back-end/Node/NestJS](Back-end/Node/NestJS) | NestJS 11 · TypeScript | 呈现页 `http://127.0.0.1:3001/` · Swagger `http://127.0.0.1:3001/docs` | [NESTJS-Node-TypeScript.md](Back-end/Node/NestJS/NESTJS-Node-TypeScript.md) |

### 后端 · Go（`Back-end/Go/`）

| 子项目 | 框架 | 默认 URL | 说明文档 |
|--------|------|-----------|----------|
| [Back-end/Go/Gin](Back-end/Go/Gin) | Gin | `http://127.0.0.1:3002/` | [GIN-Go.md](Back-end/Go/Gin/GIN-Go.md) |
| [Back-end/Go/Fiber](Back-end/Go/Fiber) | Fiber | `http://127.0.0.1:3003/` | [FIBER-Go.md](Back-end/Go/Fiber/FIBER-Go.md) |
| [Back-end/Go/Echo](Back-end/Go/Echo) | Echo | `http://127.0.0.1:3004/` | [ECHO-Go.md](Back-end/Go/Echo/ECHO-Go.md) |
| [Back-end/Go/Chi](Back-end/Go/Chi) | chi | `http://127.0.0.1:3005/` | [CHI-Go.md](Back-end/Go/Chi/CHI-Go.md) |
| [Back-end/Go/Beego](Back-end/Go/Beego) | Beego v2 | `http://127.0.0.1:3006/` | [BEEGO-Go.md](Back-end/Go/Beego/BEEGO-Go.md) |
| [Back-end/Go/Iris](Back-end/Go/Iris) | Iris | `http://127.0.0.1:3007/` | [IRIS-Go.md](Back-end/Go/Iris/IRIS-Go.md) |
| [Back-end/Go/Go-zero](Back-end/Go/Go-zero) | go-zero | `http://127.0.0.1:3008/` | [GOZERO-Go.md](Back-end/Go/Go-zero/GOZERO-Go.md) |
| [Back-end/Go/Kratos](Back-end/Go/Kratos) | Kratos | `http://127.0.0.1:3009/` | [KRATOS-Go.md](Back-end/Go/Kratos/KRATOS-Go.md) |
| [Back-end/Go/Go-kit](Back-end/Go/Go-kit) | go-kit | `http://127.0.0.1:3010/` | [GOKIT-Go.md](Back-end/Go/Go-kit/GOKIT-Go.md) |

---

## 顶层目录示意

```text
Framework/
├── Front-end/
│   ├── React/
│   ├── Vue/
│   ├── Svelte/
│   ├── Solid/
│   ├── Angular/
│   ├── Qwik/
│   ├── Preact/
│   ├── Lit/
│   ├── Alpine/
│   ├── Mithril/
│   ├── Backbone/
│   ├── Ember/
│   ├── Stencil/
│   ├── Aurelia/
│   └── Fable/
├── Full-stack/
│   ├── Nextjs/
│   ├── Nuxt/
│   ├── SvelteKit/
│   ├── Remix/
│   ├── Astro/
│   ├── Analog/
│   ├── Blitz/
│   └── tanstack-start/
└── Back-end/
    ├── Node/
    │   ├── Fastify/
    │   └── NestJS/
    └── Go/
        ├── Gin/
        ├── Fiber/
        ├── Echo/
        ├── Chi/
        ├── Beego/
        ├── Iris/
        ├── Go-zero/
        ├── Kratos/
        └── Go-kit/
```

---

## 快速开始

将下面路径中的盘符与目录换成你本机克隆后的**仓库根路径**（示例为 `f:\Study\Framework`）。

### 前端

**React**

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\React'
npm install
npm run dev
```

**Vue**

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Vue'
npm install
npm run dev
```

**Svelte**

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Svelte'
npm install
npm run dev
```

**Solid**

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Solid'
npm install
npm run dev
```

**Angular**（Angular CLI，默认端口 `4200`）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Angular'
npm install
npm start
```

**Qwik / Preact / Lit / Alpine / Mithril / Backbone / Aurelia**（Vite 或各框架自带 dev）：在对应子目录执行 `npm install` 与 `npm run dev`（或 `npm start`）。**Ember**：`npm start`（`ember serve`）。**Stencil**：`npm start`。**Fable**：需先安装 .NET SDK，再按 [FABLE-DotNet.md](Front-end/Fable/FABLE-DotNet.md) 执行 `dotnet tool restore` 与 `dotnet fable`。

构建、预览与各子项目脚本见对应目录下的说明文档（如 `REACT-Vite-TypeScript.md`、`QWIK-Vite-TypeScript.md`、`FASTIFY-Node-TypeScript.md` 等）。

### 全栈（`Full-stack/`）

各子目录端口 **3030–3036、3038**，与 `Back-end` 默认端口错开。汇总表与 **RedwoodJS** 说明见 [Full-stack/README.md](Full-stack/README.md)。

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Full-stack\Nextjs'
npm install
npm run dev
```

（其余 **Nuxt / SvelteKit / Remix / Astro / Analog / Blitz / tanstack-start** 同样在 `Full-stack/<目录>` 下执行 `npm install` 与 `npm run dev`，默认 URL 见上表或 `Full-stack/README.md`。）

### 后端 · Node

**Fastify**（默认端口 `3000`）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Fastify'
npm install
npm run dev
```

**NestJS**（默认端口 `3001`）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\NestJS'
npm install
npm run start:dev
```

### 后端 · Go

在 **`Back-end/Go/<框架名>`** 下执行（示例为 Gin，默认端口 `3002`）：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Gin'
go mod tidy
go run .
```

浏览器访问 `http://127.0.0.1:3002/`。其它框架为同级目录（Fiber、Echo、Chi、Beego、Iris、Go-zero、Kratos、go-kit），同样执行 `go mod tidy` 与 `go run .`；**默认端口 3003–3010** 见上表或各目录内的 `*-Go.md`。

---

## 约定与提示

- **产物位置**：`node_modules`、`dist` 等出现在各 `Front-end/*`、`Full-stack/*` 与 `Back-end/Node/*` 子目录内；`Back-end/Go` 下各模块在首次 `go mod tidy` 后生成 `go.sum`，`go build` 可在该子目录产出可执行文件。  
- **文档分层**：本文件只做**总览**；API、目录结构、设计取舍写在各子目录的**按栈命名说明**（如 `VUE-Vite-TypeScript.md`、`NESTJS-Node-TypeScript.md`、`GIN-Go.md`），便于在全局搜索中一眼识别。  
- **跨栈对照**：多数 `Front-end/*` 为 **Vite 单页**；`Full-stack/*` 为 **全栈 / SSR / 同源 API** 形态（实现方式因栈而异，见各目录 `*-FullStack-*.md`）。对照时可关注状态与副作用、模板与 JSX、Angular **signal**、Nitro / Route Handler、静态导出限制等。  
- **未收录框架清单**（前后端常见缺口）：根目录 [FRAMEWORK-GAP-LIST.md](FRAMEWORK-GAP-LIST.md)。

---

## 后续可扩展（可选）

- 在各 `Front-end/*` 中用环境变量配置 Vite `dev` 代理，指向任一后端子项目。  
- 按子项目独立补充 ESLint / Prettier 或 CI。  
- 新增其它前端、**全栈**或后端目录时，继续沿用「**语言层目录**（如 `Front-end/`、`Full-stack/`、`Back-end/Node/`）+ **具体框架子目录**」模式即可。
