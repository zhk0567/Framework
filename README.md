# Framework

## 这是一个怎样的项目

**Framework** 是一份**多技术栈对照学习用的样板仓库**（sample / playground）：把主流与若干扩展方向上的**前端**、**全栈**以及 **Node / Go / JVM / DotNet / PHP / Python / Ruby** 后端，并含 **Rust、Elixir、Deno、Scala、Clojure** 等「系统级 / 函数式 / 面试常见名」最小样例，各自做成**可单独克隆后就能跑**的最小工程，集中放在一个仓库里，方便你**并排阅读、改同一类需求、对照语法与工具链**——例如「列表 + 请求 + 本地状态」在前端各子目录里长什么样，或在不同 Go 框架里如何挂同一路由形态。

**它适合用来**：技术选型前的**亲手试错**、面试/教学前的**快速复习**、从 0 复制某一栈时的**最小可运行起点**、以及和根目录 [FRAMEWORK-GAP-LIST.md](FRAMEWORK-GAP-LIST.md) 对照，了解「常见但本仓库未收录」的名字。

**它刻意不做成**：一个绑在一起的单体产品、一套统一的业务领域模型、或强制共享 UI/业务代码的 monorepo。**各子目录彼此独立**：依赖只装在**该子目录**内；**不要在仓库根目录执行 `npm install`**（根目录不设 Node 工程）。

**内容大致分三类**：

| 类别 | 路径 | 你在里面会看到什么 |
|------|------|----------------------|
| **前端** | [`Front-end/`](Front-end) | 多数为 **Vite + TypeScript**（或框架官方 CLI）下的单页 **「能力展台」**；另含 **跨端 / 非浏览器为主**（Electron、Tauri、Expo 等）与 **微软 / WASM UI**（**Blazor WebAssembly / Blazor Server**）等，见下表与各目录说明。**Stencil** 走自身编译器；**Fable / Blazor / .NET MAUI** 等需 **.NET SDK**；**Flutter**、**Rust（Tauri）**、**Deno（Oak 在后端目录）** 等见各子目录。 |
| **全栈** | [`Full-stack/`](Full-stack) | **路由 + 页面 + 同源 API**（或开发态等价能力）的小示例，与纯 Vite SPA 对照；**RedwoodJS** 另有 [`Full-stack/RedwoodJS`](Full-stack/RedwoodJS) 形态占位（`tsx`）与官方 CLI 说明；端口与汇总见 [`Full-stack/README.md`](Full-stack/README.md)。 |
| **后端** | [`Back-end/`](Back-end) | [`Back-end/Node/`](Back-end/Node) 为 **Fastify、NestJS** 及 **Express、Koa、Hapi、Restify、AdonisJS（占位）、Strapi（占位）、Directus（占位）、Hono、Elysia（Bun）** 与 **GraphQL（Mercurius）、GraphQL 多子图 stitch、Connect（Buf）Unary、tRPC、gRPC（Node Unary + REST 双端口）、OpenAPI Generator（占位）、Prisma（SQLite）、Drizzle（sql.js）、TypeORM（sql.js）**，以及 **Supabase Edge（占位 + Deno/CLI 说明）、Firebase Cloud Functions（占位 + Emulator 说明）、Vercel/AWS Serverless 适配形态（占位 + 文档链）**；[`Back-end/Go/`](Back-end/Go) 为 **Gin、Fiber、Echo、chi、Beego、Iris、go-zero、Kratos、go-kit** 与 **标准库 net/http、gorilla/mux、GoFrame**，以及 **Buffalo / Revel（`net/http` 占位 + CLI 说明）**、**OpenAPI/oapi-codegen（`openapi.yaml` + 手写服务）**、**go-swagger（`net/http` 占位 + CLI 说明）**；[`Back-end/JVM/`](Back-end/JVM) 为 **Spring Boot、Quarkus、Micronaut、Vert.x、Ktor（Kotlin）** 与 **Play（`HttpServer` 占位 + sbt 说明）**；[`Back-end/DotNet/`](Back-end/DotNet) 为 **ASP.NET Core（Minimal API）**；[`Back-end/PHP/`](Back-end/PHP) 为 **Laravel、Symfony（PHP 内置路由对齐 + 官方 CLI 说明）**；[`Back-end/Python/`](Back-end/Python) 为 **FastAPI、Flask、Django、SQLAlchemy（薄 API + SQLite）**；[`Back-end/Ruby/`](Back-end/Ruby) 为 **Rails、Hanami（Rack 对齐 + 官方 CLI 说明）**；[`Back-end/Rust/`](Back-end/Rust) 为 **Axum（可编译最小 HTTP；文档链 actix-web / Rocket / Warp）**；[`Back-end/Elixir/`](Back-end/Elixir) 为 **Phoenix 形态（Plug + Bandit + `mix phx.new` 说明）**；[`Back-end/Deno/`](Back-end/Deno) 为 **Oak**；[`Back-end/Scala/`](Back-end/Scala) 为 **http4s Ember（文档链 Finch）**；[`Back-end/Clojure/`](Back-end/Clojure) 为 **Pedestal 形态（Ring + Jetty + Pedestal 说明）**；各子工程在 **HTTP/JSON**（如 `/api/*`）形态上对齐，便于对照中间件、路由注册与响应结构。 |

**规模一览**：**34** 个前端 + **9** 个全栈 + **59** 个后端（[`Back-end/Node`](Back-end/Node) **23**、[`Back-end/Go`](Back-end/Go) **16**、[`Back-end/JVM`](Back-end/JVM) **6**、[`Back-end/DotNet`](Back-end/DotNet) **1**、[`Back-end/PHP`](Back-end/PHP) **2**、[`Back-end/Python`](Back-end/Python) **4**、[`Back-end/Ruby`](Back-end/Ruby) **2**、[`Back-end/Rust`](Back-end/Rust) **1**、[`Back-end/Elixir`](Back-end/Elixir) **1**、[`Back-end/Deno`](Back-end/Deno) **1**、[`Back-end/Scala`](Back-end/Scala) **1**、[`Back-end/Clojure`](Back-end/Clojure) **1**），共 **102** 个可独立运行的子工程。

**目录约定（检索用）**

- **前端**：[`Front-end/<框架名>/`](Front-end) — 主流 **React / Vue / Svelte / Solid**（Vite）、**Angular**（CLI），及 **Qwik、Preact、Lit、Alpine、Mithril、Backbone、Ember、Stencil、Aurelia、Fable**，以及 **Inferno、Riot、Marko、Million、htmx、Unpoly、Turbo（Hotwire）、原生 Web Components**；跨端 / 壳层含 **Electron、Tauri、Expo、React-Native（Web 宿主）、Ionic、Capacitor、Flutter、.NET MAUI（说明 + 生成指引）、Kotlin Mobile（KMM 源码片段）**；微软 / WASM 含 **Blazor WebAssembly、Blazor Server**。  
- **全栈**：[`Full-stack/<名称>/`](Full-stack) — **Next.js、Nuxt、SvelteKit、Remix（React Router 7 模板）、Astro、Analog、Blitz（Next 占位）、TanStack Router 脚手架、RedwoodJS（Node `http` 占位 + `yarn create` 说明）** 等；清单与端口见 [`Full-stack/README.md`](Full-stack/README.md)。  
- **后端**：[`Back-end/Node/`](Back-end/Node)（npm 栈，含 **GraphQL / tRPC / gRPC / Prisma / OpenAPI Generator** 等）、[`Back-end/Go/`](Back-end/Go)（各 `go.mod` 模块）、[`Back-end/JVM/`](Back-end/JVM)（Maven + JDK 17+，Ktor 为 Kotlin 源码）、[`Back-end/DotNet/`](Back-end/DotNet)（**.NET 9**）、[`Back-end/PHP/`](Back-end/PHP)（**PHP 内置服务器**）、[`Back-end/Python/`](Back-end/Python)（**pip / venv**）、[`Back-end/Ruby/`](Back-end/Ruby)（**Bundler + Rack**）、[`Back-end/Rust/`](Back-end/Rust)（**cargo**）、[`Back-end/Elixir/`](Back-end/Elixir)（**mix**）、[`Back-end/Deno/`](Back-end/Deno)（**deno task**）、[`Back-end/Scala/`](Back-end/Scala)（**sbt**）、[`Back-end/Clojure/`](Back-end/Clojure)（**Clojure CLI + deps.edn**）— 与前端子工程**无强制依赖关系**，可单独运行、单独对照。

---

## 本仓库适合做什么

| 用途 | 说明 |
|------|------|
| **前端对照** | 在同一需求下对比：组件框架（React / Vue / Svelte / Solid / Angular / Preact / Aurelia / Inferno / Riot / Marko）、**React 编译优化**（Million）、**全栈元框架**（见 `Full-stack/`）、**可恢复**（Qwik）、**Web 组件**（Lit / Stencil / 原生 Custom Elements）、**HTML 片段驱动**（htmx / Unpoly / Turbo）、**跨端与壳**（Electron / Tauri / Expo / RN-web / Ionic / Capacitor / Flutter / MAUI / KMM）、**Blazor（WASM / Server）**、**指令式**（Alpine）、**轻量 MVC**（Mithril / Backbone / Ember）、**F# 编译**（Fable）等写法与范式差异。 |
| **后端对照** | 在 **Node**、**Go**、**JVM**、**DotNet / PHP / Python / Ruby**、**Rust / Elixir / Deno / Scala / Clojure** 之间对照：路由如何挂载、JSON 如何返回、常见中间件与项目结构有何不同（端口 **3000–3019、3002–3010、3020–3025、3070–3075、3080–3088、3089、3090–3096、3100–3109** 与 gRPC **30900** 见各表；**全栈** **3030–3038** 见 `Full-stack/`）。 |
| **复制起步** | 选定某一栈后，**整目录复制**到自有项目或课程作业中，再按需删减展台代码、接入真实后端与鉴权。 |

---

## 环境要求

- **Node.js**：建议当前 LTS（[`Front-end`](Front-end)、[`Full-stack`](Full-stack) 与 [`Back-end/Node`](Back-end/Node) 需要）。其中 **`Full-stack/Astro`** 模板要求 **Node ≥ 22.12**（见该目录 `package.json` 的 `engines`）。  
- **Bun**：[`Back-end/Node/Elysia`](Back-end/Node/Elysia) 使用 **Bun** 运行（`bun install` / `bun run dev`），与其余 **Node + npm** 子目录不同；未安装 Bun 时可跳过该目录。  
- **AdonisJS / Strapi / Directus / SupabaseEdge / FirebaseFunctions / ServerlessAdapters**：本仓库在对应子目录内提供 **`/api/health` 与呈现页的 Node `http` 占位服务**（`tsx`）；完整平台或边缘运行时请见各目录 `*-Node-TypeScript.md` 中的官方 CLI 或文档链。  
- **Rust**：[`Front-end/Tauri`](Front-end/Tauri) 与 [`Back-end/Rust/Axum`](Back-end/Rust/Axum) 需 [Rust 工具链](https://www.rust-lang.org/tools/install)（`cargo`）；Tauri 另见 [Tauri 前置依赖](https://tauri.app/start/prerequisites/)。  
- **Flutter**：[`Front-end/Flutter`](Front-end/Flutter) 需安装 [Flutter SDK](https://docs.flutter.dev/get-started/install)。  
- **.NET**：[`Front-end/Fable`](Front-end/Fable)、[`Front-end/Blazor-WebAssembly`](Front-end/Blazor-WebAssembly)、[`Front-end/Blazor-Server`](Front-end/Blazor-Server)、[`Front-end/DotNet-Maui`](Front-end/DotNet-Maui) 等需安装 [.NET SDK](https://dotnet.microsoft.com/download) 及（MAUI 场景下）**MAUI 工作负载**；[`Back-end/DotNet/AspNetCore`](Back-end/DotNet/AspNetCore) **Minimal API** 对照后端需 **.NET SDK 9**（或按 `*.csproj` 降级为 8）。  
- **Go**：1.21+（[`Back-end/Go`](Back-end/Go) 下各子目录均自带 `go.mod`；安装后可用 `go version` 自检）。  
- **JDK / Maven**：[`Back-end/JVM`](Back-end/JVM) 下 **Spring Boot、Quarkus、Micronaut、Vert.x、Ktor、Play** 需 **JDK 17+** 与 **Apache Maven 3.9+**（`mvn` 已加入 `PATH`）；各子目录命令见 [`Back-end/JVM/README.md`](Back-end/JVM/README.md) 与对应 `*-JVM*.md`。  
- **PHP / Python / Ruby**：[`Back-end/PHP`](Back-end/PHP) 需 **PHP 8.2+**；[`Back-end/Python`](Back-end/Python) 建议 **Python 3.11+** 与 **`python -m venv`**；[`Back-end/Ruby`](Back-end/Ruby) 需 **Ruby 3.2+** 与 **Bundler**。汇总见各语言目录 `README.md`。  
- **Elixir**：[`Back-end/Elixir/Phoenix`](Back-end/Elixir/Phoenix) 需 **Erlang/OTP**、**Elixir 1.14+** 与 **Hex**（`mix`）。  
- **Deno**：[`Back-end/Deno/Oak`](Back-end/Deno/Oak) 需安装 [Deno](https://docs.deno.com/runtime/getting_started/installation/)（`deno`）。  
- **Scala / sbt**：[`Back-end/Scala/Http4s`](Back-end/Scala/Http4s) 需 **JDK 17+** 与 **sbt**（见该目录 `project/build.properties`）。  
- **Clojure**：[`Back-end/Clojure/Pedestal`](Back-end/Clojure/Pedestal) 需 **Clojure CLI**（`clojure` / `clj`，可下载依赖自 Maven Central）。  
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
| [Front-end/Inferno](Front-end/Inferno) | Inferno · babel-plugin-inferno · Vite · TS（端口 `5190`） | [INFERNO-Vite-TypeScript.md](Front-end/Inferno/INFERNO-Vite-TypeScript.md) |
| [Front-end/Riot](Front-end/Riot) | Riot.js · rollup-plugin-riot · Vite · TS（`5191`） | [RIOT-Vite-TypeScript.md](Front-end/Riot/RIOT-Vite-TypeScript.md) |
| [Front-end/Marko](Front-end/Marko) | Marko 5 · @marko/vite · TS（`5192`） | [MARKO-Vite-TypeScript.md](Front-end/Marko/MARKO-Vite-TypeScript.md) |
| [Front-end/Million](Front-end/Million) | Million 3 · React 19 · Vite · TS（`5193`） | [MILLION-Vite-TypeScript.md](Front-end/Million/MILLION-Vite-TypeScript.md) |
| [Front-end/Htmx](Front-end/Htmx) | htmx 2 · Vite · TS（`5194`） | [HTMX-Vite-TypeScript.md](Front-end/Htmx/HTMX-Vite-TypeScript.md) |
| [Front-end/Unpoly](Front-end/Unpoly) | Unpoly 3 · Vite · TS（`5195`） | [UNPOLY-Vite-TypeScript.md](Front-end/Unpoly/UNPOLY-Vite-TypeScript.md) |
| [Front-end/Turbo](Front-end/Turbo) | @hotwired/turbo 8 · Vite · TS（`5196`） | [TURBO-Vite-TypeScript.md](Front-end/Turbo/TURBO-Vite-TypeScript.md) |
| [Front-end/WebComponents](Front-end/WebComponents) | 原生 Custom Elements · Vite · TS（`5197`） | [WEBCOMPONENTS-Vite-TypeScript.md](Front-end/WebComponents/WEBCOMPONENTS-Vite-TypeScript.md) |
| [Front-end/Electron](Front-end/Electron) | Electron · Vite · React · TS（Vite `5201`） | [ELECTRON-Vite-TypeScript.md](Front-end/Electron/ELECTRON-Vite-TypeScript.md) |
| [Front-end/Tauri](Front-end/Tauri) | Tauri 2 · Rust · React · Vite（前端默认 `1420`） | [TAURI-React-TypeScript.md](Front-end/Tauri/TAURI-React-TypeScript.md) |
| [Front-end/Expo](Front-end/Expo) | Expo · React Native · TS（`npm run web` 默认 `5208`） | [EXPO-React-Native-TypeScript.md](Front-end/Expo/EXPO-React-Native-TypeScript.md) |
| [Front-end/React-Native](Front-end/React-Native) | react-native-web · Vite · TS（`5204`） | [REACT-NATIVE-Web-TypeScript.md](Front-end/React-Native/REACT-NATIVE-Web-TypeScript.md) |
| [Front-end/Ionic](Front-end/Ionic) | Ionic React · Vite · TS（`5205`） | [IONIC-Vite-TypeScript.md](Front-end/Ionic/IONIC-Vite-TypeScript.md) |
| [Front-end/Capacitor](Front-end/Capacitor) | Capacitor · Vite · TS（`5206`） | [CAPACITOR-Vite-TypeScript.md](Front-end/Capacitor/CAPACITOR-Vite-TypeScript.md) |
| [Front-end/Flutter](Front-end/Flutter) | Flutter · Dart（`flutter run`） | [FLUTTER-Dart.md](Front-end/Flutter/FLUTTER-Dart.md) |
| [Front-end/DotNet-Maui](Front-end/DotNet-Maui) | .NET MAUI（本机 `dotnet new maui` 生成工程） | [MAUI-DotNet.md](Front-end/DotNet-Maui/MAUI-DotNet.md) |
| [Front-end/Kotlin-Mobile](Front-end/Kotlin-Mobile) | KMM · Compose 片段（向导生成 Gradle） | [KOTLIN-KMM-Mobile.md](Front-end/Kotlin-Mobile/KOTLIN-KMM-Mobile.md) |
| [Front-end/Blazor-WebAssembly](Front-end/Blazor-WebAssembly) | Blazor WASM · .NET 9 · Razor（默认 `5210`） | [BLAZOR-WASM-DotNet.md](Front-end/Blazor-WebAssembly/BLAZOR-WASM-DotNet.md) |
| [Front-end/Blazor-Server](Front-end/Blazor-Server) | Blazor Server · SignalR · .NET 9（默认 `5211`） | [BLAZOR-SERVER-DotNet.md](Front-end/Blazor-Server/BLAZOR-SERVER-DotNet.md) |

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
| [Full-stack/RedwoodJS](Full-stack/RedwoodJS) | RedwoodJS 形态占位（Node `http`）+ 官方 CLI 说明 | **http://127.0.0.1:3037/** | [REDWOOD-FullStack-TypeScript.md](Full-stack/RedwoodJS/REDWOOD-FullStack-TypeScript.md) |
| [Full-stack/tanstack-start](Full-stack/tanstack-start) | TanStack Router（CLI 模板）· Vite | **http://127.0.0.1:3038/** | [TANSTACK-FullStack-TypeScript.md](Full-stack/tanstack-start/TANSTACK-FullStack-TypeScript.md) |

端口与补充说明（含 **RedwoodJS** 占位与完整 `yarn create` 说明）见：[Full-stack/README.md](Full-stack/README.md)。

### 后端 · Node（`Back-end/Node/`）

| 子项目 | 技术栈 | 默认入口（本地） | 说明文档 |
|--------|--------|------------------|----------|
| [Back-end/Node/Fastify](Back-end/Node/Fastify) | Fastify 5 · TypeScript | 呈现页 `http://127.0.0.1:3000/` | [FASTIFY-Node-TypeScript.md](Back-end/Node/Fastify/FASTIFY-Node-TypeScript.md) |
| [Back-end/Node/NestJS](Back-end/Node/NestJS) | NestJS 11 · TypeScript | 呈现页 `http://127.0.0.1:3001/` · Swagger `http://127.0.0.1:3001/docs` | [NESTJS-Node-TypeScript.md](Back-end/Node/NestJS/NESTJS-Node-TypeScript.md) |
| [Back-end/Node/Express](Back-end/Node/Express) | Express 4 · TypeScript | 呈现页 `http://127.0.0.1:3011/` | [EXPRESS-Node-TypeScript.md](Back-end/Node/Express/EXPRESS-Node-TypeScript.md) |
| [Back-end/Node/Koa](Back-end/Node/Koa) | Koa 2 · TypeScript | 呈现页 `http://127.0.0.1:3012/` | [KOA-Node-TypeScript.md](Back-end/Node/Koa/KOA-Node-TypeScript.md) |
| [Back-end/Node/Hapi](Back-end/Node/Hapi) | Hapi 21 · TypeScript | 呈现页 `http://127.0.0.1:3013/` | [HAPI-Node-TypeScript.md](Back-end/Node/Hapi/HAPI-Node-TypeScript.md) |
| [Back-end/Node/Restify](Back-end/Node/Restify) | Restify 11 · TypeScript | 呈现页 `http://127.0.0.1:3014/` | [RESTIFY-Node-TypeScript.md](Back-end/Node/Restify/RESTIFY-Node-TypeScript.md) |
| [Back-end/Node/AdonisJS](Back-end/Node/AdonisJS) | 形态占位（Node `http`）+ 文档链官方 CLI | 呈现页 `http://127.0.0.1:3015/` | [ADONISJS-Node-TypeScript.md](Back-end/Node/AdonisJS/ADONISJS-Node-TypeScript.md) |
| [Back-end/Node/Strapi](Back-end/Node/Strapi) | 形态占位（Node `http`）+ 文档链官方 CMS | 呈现页 `http://127.0.0.1:3016/` | [STRAPI-Node-TypeScript.md](Back-end/Node/Strapi/STRAPI-Node-TypeScript.md) |
| [Back-end/Node/Directus](Back-end/Node/Directus) | 形态占位（Node `http`）+ 文档链官方 BaaS | 呈现页 `http://127.0.0.1:3017/` | [DIRECTUS-Node-TypeScript.md](Back-end/Node/Directus/DIRECTUS-Node-TypeScript.md) |
| [Back-end/Node/Hono](Back-end/Node/Hono) | Hono 4 · @hono/node-server · TypeScript | 呈现页 `http://127.0.0.1:3018/` | [HONO-Node-TypeScript.md](Back-end/Node/Hono/HONO-Node-TypeScript.md) |
| [Back-end/Node/Elysia](Back-end/Node/Elysia) | Elysia 1 · Bun（非 Node 执行） | 呈现页 `http://127.0.0.1:3019/` | [ELYSIA-Node-TypeScript.md](Back-end/Node/Elysia/ELYSIA-Node-TypeScript.md) |
| [Back-end/Node/GraphQL](Back-end/Node/GraphQL) | Fastify · Mercurius（REST + `POST /graphql`） | 呈现页 `http://127.0.0.1:3088/` · GraphiQL `/graphiql` | [GRAPHQL-Node-TypeScript.md](Back-end/Node/GraphQL/GRAPHQL-Node-TypeScript.md) |
| [Back-end/Node/Trpc](Back-end/Node/Trpc) | Express · tRPC · Zod | 呈现页 `http://127.0.0.1:3089/` | [TRPC-Node-TypeScript.md](Back-end/Node/Trpc/TRPC-Node-TypeScript.md) |
| [Back-end/Node/Grpc](Back-end/Node/Grpc) | Express 呈现页 + `@grpc/grpc-js` Unary（gRPC 默认 **30900**） | 呈现页 `http://127.0.0.1:3090/` | [GRPC-Node-TypeScript.md](Back-end/Node/Grpc/GRPC-Node-TypeScript.md) |
| [Back-end/Node/OpenApiGenerator](Back-end/Node/OpenApiGenerator) | 形态占位 + `openapi-generator-cli` 说明 | 呈现页 `http://127.0.0.1:3092/` | [OPENAPIGEN-Node-TypeScript.md](Back-end/Node/OpenApiGenerator/OPENAPIGEN-Node-TypeScript.md) |
| [Back-end/Node/Prisma](Back-end/Node/Prisma) | Fastify · Prisma · SQLite | 呈现页 `http://127.0.0.1:3093/` · `GET /api/demo/items` | [PRISMA-Node-TypeScript.md](Back-end/Node/Prisma/PRISMA-Node-TypeScript.md) |
| [Back-end/Node/SupabaseEdge](Back-end/Node/SupabaseEdge) | 形态占位（Node `http`）+ 文档链 **Supabase Edge（Deno）** | 呈现页 `http://127.0.0.1:3094/` | [SUPABASE-EDGE-Node-TypeScript.md](Back-end/Node/SupabaseEdge/SUPABASE-EDGE-Node-TypeScript.md) |
| [Back-end/Node/FirebaseFunctions](Back-end/Node/FirebaseFunctions) | 形态占位（Node `http`）+ 文档链 **Cloud Functions** | 呈现页 `http://127.0.0.1:3095/` | [FIREBASE-FUNCTIONS-Node-TypeScript.md](Back-end/Node/FirebaseFunctions/FIREBASE-FUNCTIONS-Node-TypeScript.md) |
| [Back-end/Node/ServerlessAdapters](Back-end/Node/ServerlessAdapters) | 形态占位（Node `http`）+ **Vercel / AWS Lambda** 文档链 | 呈现页 `http://127.0.0.1:3096/` | [SERVERLESS-ADAPTERS-Node-TypeScript.md](Back-end/Node/ServerlessAdapters/SERVERLESS-ADAPTERS-Node-TypeScript.md) |
| [Back-end/Node/Drizzle](Back-end/Node/Drizzle) | Fastify · Drizzle · **sql.js**（无原生编译） | 呈现页 `http://127.0.0.1:3105/` · `GET /api/demo/items` | [DRIZZLE-Node-TypeScript.md](Back-end/Node/Drizzle/DRIZZLE-Node-TypeScript.md) |
| [Back-end/Node/TypeORM](Back-end/Node/TypeORM) | Fastify · TypeORM · **sql.js** | 呈现页 `http://127.0.0.1:3106/` · `GET /api/demo/items` | [TYPEORM-Node-TypeScript.md](Back-end/Node/TypeORM/TYPEORM-Node-TypeScript.md) |
| [Back-end/Node/GraphQLFederation](Back-end/Node/GraphQLFederation) | Fastify 4 · Mercurius · **graphql-tools stitch** | `http://127.0.0.1:3107/` · GraphiQL `/graphiql` | [GRAPHQL-FEDERATION-Node-TypeScript.md](Back-end/Node/GraphQLFederation/GRAPHQL-FEDERATION-Node-TypeScript.md) |
| [Back-end/Node/ConnectRpc](Back-end/Node/ConnectRpc) | Fastify 4 · **Connect（Buf）** Unary + 生成代码 `gen/` | 呈现页 `http://127.0.0.1:3108/` | [CONNECT-Buf-Node-TypeScript.md](Back-end/Node/ConnectRpc/CONNECT-Buf-Node-TypeScript.md) |

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
| [Back-end/Go/Stdlib](Back-end/Go/Stdlib) | 标准库 `net/http` + `ServeMux` | `http://127.0.0.1:3020/` | [STDLIB-Go.md](Back-end/Go/Stdlib/STDLIB-Go.md) |
| [Back-end/Go/GorillaMux](Back-end/Go/GorillaMux) | gorilla/mux | `http://127.0.0.1:3021/` | [GORILLAMUX-Go.md](Back-end/Go/GorillaMux/GORILLAMUX-Go.md) |
| [Back-end/Go/GoFrame](Back-end/Go/GoFrame) | GoFrame `ghttp` | `http://127.0.0.1:3022/` | [GOFRAME-Go.md](Back-end/Go/GoFrame/GOFRAME-Go.md) |
| [Back-end/Go/Buffalo](Back-end/Go/Buffalo) | 形态占位（`net/http`）+ 文档链 `buffalo new` | `http://127.0.0.1:3023/` | [BUFFALO-Go.md](Back-end/Go/Buffalo/BUFFALO-Go.md) |
| [Back-end/Go/Revel](Back-end/Go/Revel) | 形态占位（`net/http`）+ 文档链 `revel` CLI | `http://127.0.0.1:3024/` | [REVEL-Go.md](Back-end/Go/Revel/REVEL-Go.md) |
| [Back-end/Go/OapiCodegen](Back-end/Go/OapiCodegen) | `openapi.yaml` + `net/http`（手写与生成对照） | `http://127.0.0.1:3025/` · 契约 `http://127.0.0.1:3025/api/openapi` | [OAPICodegen-Go.md](Back-end/Go/OapiCodegen/OAPICodegen-Go.md) |
| [Back-end/Go/GoSwagger](Back-end/Go/GoSwagger) | 形态占位（`net/http`）+ 文档链 **go-swagger** | `http://127.0.0.1:3091/` | [GOSWAGGER-Go.md](Back-end/Go/GoSwagger/GOSWAGGER-Go.md) |

### 后端 · JVM（`Back-end/JVM/`）

汇总与端口表见 [`Back-end/JVM/README.md`](Back-end/JVM/README.md)。

| 子项目 | 技术栈 | 默认 URL | 说明文档 |
|--------|--------|----------|----------|
| [Back-end/JVM/Spring-Boot](Back-end/JVM/Spring-Boot) | Spring Boot 3 · Web MVC | `http://127.0.0.1:3070/` | [SPRINGBOOT-JVM-Java.md](Back-end/JVM/Spring-Boot/SPRINGBOOT-JVM-Java.md) |
| [Back-end/JVM/Quarkus](Back-end/JVM/Quarkus) | Quarkus 3 · RESTEasy Reactive | `http://127.0.0.1:3071/` | [QUARKUS-JVM-Java.md](Back-end/JVM/Quarkus/QUARKUS-JVM-Java.md) |
| [Back-end/JVM/Micronaut](Back-end/JVM/Micronaut) | Micronaut 4 · Netty | `http://127.0.0.1:3072/` | [MICRONAUT-JVM-Java.md](Back-end/JVM/Micronaut/MICRONAUT-JVM-Java.md) |
| [Back-end/JVM/Vertx](Back-end/JVM/Vertx) | Vert.x 4 · Web | `http://127.0.0.1:3073/` | [VERTX-JVM-Java.md](Back-end/JVM/Vertx/VERTX-JVM-Java.md) |
| [Back-end/JVM/Ktor](Back-end/JVM/Ktor) | Ktor 3 · Netty · Kotlin | `http://127.0.0.1:3074/` | [KTOR-JVM-Kotlin.md](Back-end/JVM/Ktor/KTOR-JVM-Kotlin.md) |
| [Back-end/JVM/Play](Back-end/JVM/Play) | 形态占位（JDK `HttpServer`）+ 文档链 `sbt new` | `http://127.0.0.1:3075/` | [PLAY-JVM.md](Back-end/JVM/Play/PLAY-JVM.md) |

### 后端 · DotNet / PHP / Python / Ruby

汇总：**[`Back-end/DotNet/README.md`](Back-end/DotNet/README.md)**、**[`Back-end/PHP/README.md`](Back-end/PHP/README.md)**、**[`Back-end/Python/README.md`](Back-end/Python/README.md)**、**[`Back-end/Ruby/README.md`](Back-end/Ruby/README.md)**。默认端口 **3080–3087**；**SQLAlchemy** 独立样例为 **3109**（与 Node **3105–3108**、JVM **3070–3075** 错开）。

| 子项目 | 技术栈 | 默认 URL | 说明文档 |
|--------|--------|----------|----------|
| [Back-end/DotNet/AspNetCore](Back-end/DotNet/AspNetCore) | ASP.NET Core · Minimal API | `http://127.0.0.1:3080/` | [ASPNETCORE-DotNet.md](Back-end/DotNet/AspNetCore/ASPNETCORE-DotNet.md) |
| [Back-end/PHP/Laravel](Back-end/PHP/Laravel) | PHP 内置路由对齐 + 文档链 `composer create-project` | `http://127.0.0.1:3081/` | [LARAVEL-PHP.md](Back-end/PHP/Laravel/LARAVEL-PHP.md) |
| [Back-end/PHP/Symfony](Back-end/PHP/Symfony) | PHP 内置路由对齐 + 文档链 `symfony new` | `http://127.0.0.1:3082/` | [SYMFONY-PHP.md](Back-end/PHP/Symfony/SYMFONY-PHP.md) |
| [Back-end/Python/FastAPI](Back-end/Python/FastAPI) | FastAPI · Uvicorn | `http://127.0.0.1:3083/` | [FASTAPI-Python.md](Back-end/Python/FastAPI/FASTAPI-Python.md) |
| [Back-end/Python/Flask](Back-end/Python/Flask) | Flask · Werkzeug | `http://127.0.0.1:3084/` | [FLASK-Python.md](Back-end/Python/Flask/FLASK-Python.md) |
| [Back-end/Python/Django](Back-end/Python/Django) | Django · `runserver` | `http://127.0.0.1:3085/` | [DJANGO-Python.md](Back-end/Python/Django/DJANGO-Python.md) |
| [Back-end/Python/SqlAlchemy](Back-end/Python/SqlAlchemy) | FastAPI · SQLAlchemy 2 · SQLite | `http://127.0.0.1:3109/` · `GET /api/demo/items` | [SQLALCHEMY-Python.md](Back-end/Python/SqlAlchemy/SQLALCHEMY-Python.md) |
| [Back-end/Ruby/Rails](Back-end/Ruby/Rails) | Rack 对齐 + 文档链 `rails new` | `http://127.0.0.1:3086/` | [RAILS-Ruby.md](Back-end/Ruby/Rails/RAILS-Ruby.md) |
| [Back-end/Ruby/Hanami](Back-end/Ruby/Hanami) | Rack 对齐 + 文档链 `hanami new` | `http://127.0.0.1:3087/` | [HANAMI-Ruby.md](Back-end/Ruby/Hanami/HANAMI-Ruby.md) |

### 后端 · Rust / Elixir / Deno / Scala / Clojure

汇总：**[`Back-end/Rust/README.md`](Back-end/Rust/README.md)**、**[`Back-end/Elixir/README.md`](Back-end/Elixir/README.md)**、**[`Back-end/Deno/README.md`](Back-end/Deno/README.md)**、**[`Back-end/Scala/README.md`](Back-end/Scala/README.md)**、**[`Back-end/Clojure/README.md`](Back-end/Clojure/README.md)**。默认端口 **3100–3104**；与 Node **Drizzle / TypeORM / GraphQLFederation / ConnectRpc（3105–3108）** 错开。

| 子项目 | 技术栈 | 默认 URL | 说明文档 |
|--------|--------|----------|----------|
| [Back-end/Rust/Axum](Back-end/Rust/Axum) | Axum · Tokio（文档链 actix-web / Rocket / Warp） | `http://127.0.0.1:3100/` | [AXUM-Rust.md](Back-end/Rust/Axum/AXUM-Rust.md) |
| [Back-end/Elixir/Phoenix](Back-end/Elixir/Phoenix) | Plug · Bandit（`mix phx.new` 说明） | `http://127.0.0.1:3101/` | [PHOENIX-Elixir.md](Back-end/Elixir/Phoenix/PHOENIX-Elixir.md) |
| [Back-end/Deno/Oak](Back-end/Deno/Oak) | Deno · Oak | `http://127.0.0.1:3102/` | [OAK-Deno-TypeScript.md](Back-end/Deno/Oak/OAK-Deno-TypeScript.md) |
| [Back-end/Scala/Http4s](Back-end/Scala/Http4s) | Scala 3 · http4s Ember（文档链 Finch） | `http://127.0.0.1:3103/` | [HTTP4S-Scala.md](Back-end/Scala/Http4s/HTTP4S-Scala.md) |
| [Back-end/Clojure/Pedestal](Back-end/Clojure/Pedestal) | Ring · Jetty（Pedestal 说明） | `http://127.0.0.1:3104/` | [PEDESTAL-Clojure.md](Back-end/Clojure/Pedestal/PEDESTAL-Clojure.md) |

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
│   ├── Blazor-Server/
│   ├── Blazor-WebAssembly/
│   ├── Fable/
│   ├── Inferno/
│   ├── Riot/
│   ├── Marko/
│   ├── Million/
│   ├── Htmx/
│   ├── Unpoly/
│   ├── Turbo/
│   ├── WebComponents/
│   ├── Capacitor/
│   ├── DotNet-Maui/
│   ├── Electron/
│   ├── Expo/
│   ├── Flutter/
│   ├── Ionic/
│   ├── Kotlin-Mobile/
│   ├── React-Native/
│   └── Tauri/
├── Full-stack/
│   ├── Analog/
│   ├── Astro/
│   ├── Blitz/
│   ├── Nextjs/
│   ├── Nuxt/
│   ├── RedwoodJS/
│   ├── Remix/
│   ├── SvelteKit/
│   └── tanstack-start/
└── Back-end/
    ├── Node/
    │   ├── AdonisJS/
    │   ├── ConnectRpc/
    │   ├── Directus/
    │   ├── Drizzle/
    │   ├── Elysia/
    │   ├── Express/
    │   ├── Fastify/
    │   ├── FirebaseFunctions/
    │   ├── GraphQL/
    │   ├── GraphQLFederation/
    │   ├── Grpc/
    │   ├── Hapi/
    │   ├── Hono/
    │   ├── Koa/
    │   ├── NestJS/
    │   ├── OpenApiGenerator/
    │   ├── Prisma/
    │   ├── Restify/
    │   ├── ServerlessAdapters/
    │   ├── Strapi/
    │   ├── SupabaseEdge/
    │   ├── Trpc/
    │   └── TypeORM/
    ├── Go/
        ├── Beego/
        ├── Buffalo/
        ├── Chi/
        ├── Echo/
        ├── Fiber/
        ├── Gin/
        ├── Go-kit/
        ├── Go-zero/
        ├── GoFrame/
        ├── GorillaMux/
        ├── GoSwagger/
        ├── Iris/
        ├── Kratos/
        ├── OapiCodegen/
        ├── Revel/
        └── Stdlib/
    ├── JVM/
        ├── Ktor/
        ├── Micronaut/
        ├── Play/
        ├── Quarkus/
        ├── Spring-Boot/
        └── Vertx/
    ├── DotNet/
    │   └── AspNetCore/
    ├── PHP/
    │   ├── Laravel/
    │   └── Symfony/
    ├── Python/
    │   ├── Django/
    │   ├── FastAPI/
    │   ├── Flask/
    │   └── SqlAlchemy/
    ├── Ruby/
    │   ├── Hanami/
    │   └── Rails/
    ├── Rust/
    │   └── Axum/
    ├── Elixir/
    │   └── Phoenix/
    ├── Deno/
    │   └── Oak/
    ├── Scala/
    │   └── Http4s/
    └── Clojure/
        └── Pedestal/

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

**Qwik / Preact / Lit / Alpine / Mithril / Backbone / Aurelia / Inferno / Riot / Marko / Million / Htmx / Unpoly / Turbo / WebComponents**（Vite 或各框架自带 dev）：在对应子目录执行 `npm install` 与 `npm run dev`（或 `npm start`）。**Ember**：`npm start`（`ember serve`）。**Stencil**：`npm start`。**Fable**：需先安装 .NET SDK，再按 [FABLE-DotNet.md](Front-end/Fable/FABLE-DotNet.md) 执行 `dotnet tool restore` 与 `dotnet fable`。**Blazor-WebAssembly / Blazor-Server**：安装 .NET SDK 后在该子目录执行 `dotnet run`（端口 **5210 / 5211**，见 `launchSettings.json`）。**Electron**：`npm run dev`（同时拉起 Vite 与 Electron）。**Tauri**：`npm run tauri dev`。**Expo**：`npm run web` / `npm start`。**React-Native**（Web 宿主）、**Ionic**、**Capacitor**：`npm run dev`。**Flutter**：`flutter pub get` 与 `flutter run`。**DotNet-Maui**、**Kotlin-Mobile**：见各目录说明（向导或 `dotnet new` 生成原生工程）。其中 **Inferno、Riot、Marko、Million、Htmx、Unpoly、Turbo、WebComponents** 的默认开发端口依次为 **5190–5197**；**Electron / React-Native / Ionic / Capacitor** 见各目录 **Vite** 配置（**5201、5204–5206**）；**Expo Web** 默认 **5208**；**Tauri** 前端开发端口默认 **1420**。

构建、预览与各子项目脚本见对应目录下的说明文档（如 `REACT-Vite-TypeScript.md`、`QWIK-Vite-TypeScript.md`、`FASTIFY-Node-TypeScript.md` 等）。

### 全栈（`Full-stack/`）

各子目录端口 **3030–3038**（含 **3037** RedwoodJS 占位），与 `Back-end` 默认端口错开。汇总表与 **RedwoodJS** 完整脚手架说明见 [Full-stack/README.md](Full-stack/README.md)。

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Full-stack\Nextjs'
npm install
npm run dev
```

（其余 **Nuxt / SvelteKit / Remix / Astro / Analog / Blitz / RedwoodJS / tanstack-start** 同样在 `Full-stack/<目录>` 下执行 `npm install` 与 `npm run dev`（**RedwoodJS** 占位目录为 `tsx` 跑 `http` 服务），默认 URL 见上表或 `Full-stack/README.md`。）

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

**其它 Node 后端（Express / Koa / Hapi / Restify / Hono）**：在对应子目录执行 `npm install` 与 `npm run dev`；默认端口 **3011–3014、3018**，呈现页与 **`GET /api/health`** 说明见各目录 `*-Node-TypeScript.md`。**GraphQL / tRPC / gRPC / OpenApiGenerator / Prisma / Drizzle / TypeORM / GraphQLFederation / ConnectRpc / SupabaseEdge / FirebaseFunctions / ServerlessAdapters** 见上表端口 **3088–3096、3105–3108**（gRPC 另见 **30900**）。

**AdonisJS / Strapi / Directus / SupabaseEdge / FirebaseFunctions / ServerlessAdapters**：同样 `npm install` 与 `npm run dev`（`tsx` 跑占位 `http` 服务），默认端口 **3015–3017、3094–3096**；完整平台或函数运行时见各目录说明文档。

**GraphQL / tRPC / gRPC / OpenAPI Generator / Prisma / Drizzle / TypeORM / GraphQLFederation / ConnectRpc / SupabaseEdge / FirebaseFunctions / ServerlessAdapters**：在对应子目录 `npm install` 与 `npm run start`（或 `npm run dev`）；默认端口 **3088–3090、3092–3096、3105–3108**，gRPC 另见 **`GRPC_PORT`（默认 30900）** 与 [`Back-end/Node/Grpc/GRPC-Node-TypeScript.md`](Back-end/Node/Grpc/GRPC-Node-TypeScript.md)。**ConnectRpc** 若修改 `proto/` 需执行 **`npm run generate`**（`buf generate`）。

**Elysia**（默认端口 `3019`，需 **Bun**）：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Elysia'
bun install
bun run dev
```

### 后端 · Go

在 **`Back-end/Go/<框架名>`** 下执行（示例为 Gin，默认端口 `3002`）：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Gin'
go mod tidy
go run .
```

浏览器访问 `http://127.0.0.1:3002/`。其它框架为同级目录（Fiber、Echo、Chi、Beego、Iris、Go-zero、Kratos、go-kit、Stdlib、GorillaMux、GoFrame、Buffalo、Revel、OapiCodegen、GoSwagger），同样执行 `go mod tidy` 与 `go run .`；**默认端口 3003–3010、3020–3025、3091** 见上表或各目录内的 `*-Go.md`。

### 后端 · JVM

在 **`Back-end/JVM/<目录名>`** 下执行（需 **JDK 17+** 与 **Maven**；示例为 **Spring Boot**，默认端口 `3070`）：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\JVM\Spring-Boot'
mvn -q spring-boot:run
```

**Quarkus**：`mvn -q quarkus:dev`。**Micronaut**：`mvn -q mn:run`。**Vert.x / Ktor / Play**：`mvn -q compile exec:java`。浏览器 URL 见上表或 [`Back-end/JVM/README.md`](Back-end/JVM/README.md)。

### 后端 · DotNet / PHP / Python / Ruby

- **ASP.NET Core**：`Set-Location` 到 [`Back-end/DotNet/AspNetCore`](Back-end/DotNet/AspNetCore) 后执行 **`dotnet run`**（默认 **http://127.0.0.1:3080/**）。  
- **Laravel / Symfony**：到对应子目录执行 **`php -S 127.0.0.1:<端口> router.php`**（**3081** / **3082**），见各 `*-PHP.md`。  
- **FastAPI / Flask / Django / SqlAlchemy**：建议先 **`python -m venv .venv`** 与 **`pip install -r requirements.txt`**；FastAPI 用 **`uvicorn main:app --host 127.0.0.1 --port 3083`**；Flask 用 **`python app.py`**；Django 用 **`python manage.py migrate`** 后 **`python manage.py runserver 127.0.0.1:3085`**；**SqlAlchemy** 子目录用 **`uvicorn main:app --host 127.0.0.1 --port 3109`**（见 [SQLALCHEMY-Python.md](Back-end/Python/SqlAlchemy/SQLALCHEMY-Python.md)）。  
- **Rails / Hanami**：**`bundle install`** 后 **`bundle exec rackup -o 127.0.0.1 -p 3086`** 或 **`-p 3087`**（见各 `*-Ruby.md`）。

### 后端 · Rust / Elixir / Deno / Scala / Clojure

- **Axum（Rust）**：`Set-Location` 到 [`Back-end/Rust/Axum`](Back-end/Rust/Axum) 后 **`cargo run`**（默认 **http://127.0.0.1:3100/**）。  
- **Phoenix 形态（Elixir）**：到 [`Back-end/Elixir/Phoenix`](Back-end/Elixir/Phoenix) 执行 **`mix deps.get`** 与 **`mix run --no-halt`**（默认 **3101**）。  
- **Oak（Deno）**：到 [`Back-end/Deno/Oak`](Back-end/Deno/Oak) 执行 **`deno task dev`**（默认 **3102**）。  
- **http4s（Scala）**：到 [`Back-end/Scala/Http4s`](Back-end/Scala/Http4s) 执行 **`sbt run`**（默认 **3103**）。  
- **Pedestal 形态（Clojure）**：到 [`Back-end/Clojure/Pedestal`](Back-end/Clojure/Pedestal) 执行 **`clojure -M:run`**（默认 **3104**）。

---

## 约定与提示

- **产物位置**：`node_modules`、`dist` 等出现在各 `Front-end/*`、`Full-stack/*` 与 `Back-end/Node/*` 子目录内；**`Back-end/Node/ConnectRpc/gen/`** 为 **Buf 生成物**（随 `proto/` 变更需 `npm run generate` 并提交）；`Back-end/Go` 下各模块在首次 `go mod tidy` 后生成 `go.sum`，`go build` 可在该子目录产出可执行文件；`Back-end/JVM/*` 与 **`Back-end/Scala/*`** 在 `mvn package` / `sbt package` 后产生 **`target/`**（已由根 `.gitignore` 忽略）；**`Back-end/Rust/*`** 的 **`target/`**、**`Back-end/Elixir/*`** 的 **`_build/`**、**`Back-end/Clojure/*`** 的 **`.cpcache/`** 同理；`Back-end/Python/*` 常见 **`.venv/`**、**`__pycache__/`** 与 **`SqlAlchemy/dev.db`**（已 `.gitignore`）；`Back-end/Ruby/*` 常见 **`.bundle/`**；`Back-end/DotNet/*` 的 **`bin/`、`obj/`**；`Back-end/PHP/*` 无 Composer 生成树时仅本地运行文件。  
- **文档分层**：本文件只做**总览**；各子目录的**按栈命名说明**（如 `VUE-Vite-TypeScript.md`、`NESTJS-Node-TypeScript.md`、`GIN-Go.md`）在统一思路下补充 **框架简介**（定位、官网）、**本仓库角色**、**环境 / 安装 / 端口**、**与其它子项目对照** 等，便于选型学习与并排打开阅读。  
- **跨栈对照**：多数 `Front-end/*` 为 **Vite 单页**；**Htmx / Unpoly / Turbo** 为 **HTML 片段 + 开发中间件** 形态（生产环境需接入真实模板路由）；**Electron / Tauri** 为 **桌面壳 + Web 前端**；**Expo / Capacitor / Ionic** 偏 **移动 + Web** 交付链路；**Flutter** 为 **Dart Widget**；**Blazor WebAssembly** 为 **C# → WASM**；**Blazor Server** 为 **服务端渲染 + SignalR**；**MAUI / KMM** 为 **原生 UI 栈**（本仓库对 MAUI、KMM 以说明与可合并源码为主，见各目录文档）；`Full-stack/*` 为 **全栈 / SSR / 同源 API**（实现方式因栈而异，见各目录 `*-FullStack-*.md`）。对照时可关注状态与副作用、模板与 JSX、Angular **signal**、Nitro / Route Handler、静态导出限制等。  
- **未收录框架清单**（前后端常见缺口）：根目录 [FRAMEWORK-GAP-LIST.md](FRAMEWORK-GAP-LIST.md)。

---

## 后续可扩展（可选）

- 在各 `Front-end/*` 中用环境变量配置 Vite `dev` 代理，指向任一后端子项目。  
- 按子项目独立补充 ESLint / Prettier 或 CI。  
- 新增其它前端、**全栈**或后端目录时，继续沿用「**语言层目录**（如 `Front-end/`、`Full-stack/`、`Back-end/Node/`、`Back-end/DotNet/` 等）+ **具体框架子目录**」模式即可。
