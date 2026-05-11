# 本仓库未收录框架清单

下列均为当前仓库内**没有**对应子工程的常见技术名（按类别归纳）。**已收录项不在此列出**；路径与命令见根目录 [README.md](README.md)。  
新名字会持续出现，本清单**不求穷尽**。

---

## 一、全栈 / SSR / 路由一体化（元框架）

| 名称 | 备注 |
|------|------|
| **RedwoodJS** | 官方 `create-redwood-app` 要求 **Node 20.x（小于 21）**、**yarn** 与交互式向导，生成 **web + api** 多包及 Prisma 等；本仓库未提交其生成树。满足环境后可在空目录执行官方 CLI，再与 [`Full-stack/README.md`](Full-stack/README.md) 中其它示例对照。 |

---

## 二、前端 · 组件库 / 运行时（非「整应用脚手架」级）

下列技术已迁入 **`Front-end/`** 子工程（Inferno、Riot、Marko、Million、Htmx、Unpoly、Turbo、WebComponents），端口与命令见根目录 [README.md](README.md)。

---

## 三、前端 · 跨端 / 非浏览器为主

下列技术已迁入 **`Front-end/`**（Electron、Tauri、Expo、React-Native、Ionic、Capacitor、Flutter）或以 **说明 / 可合并源码** 形式提供（DotNet-Maui、Kotlin-Mobile；**Capacitor** 说明中含 **Cordova** 对照）。路径与命令见根目录 [README.md](README.md)。

---

## 四、前端 · 微软 / WASM UI

**Blazor WebAssembly** 与 **Blazor Server** 已迁入 **`Front-end/Blazor-WebAssembly`**、**`Front-end/Blazor-Server`**，命令见根目录 [README.md](README.md)。

---

## 五、Node.js 后端

下列技术已迁入 **`Back-end/Node/`**（Express、Koa、Hapi、Restify、Hono 为 **npm + tsx** 最小示例；**Elysia** 为 **Bun** 脚本；**AdonisJS / Strapi / Directus** 为 **`/api/health` 形态对齐的 Node `http` 占位** + 各目录内指向官方 CLI 的说明）。默认端口 **3011–3019**，与 Fastify `3000`、Nest `3001`、Go 示例错开；命令与树见根目录 [README.md](README.md)。

---

## 六、Go 后端

| 名称 | 备注 |
|------|------|
| **标准库 net/http** | 无第三方路由的最小服务 |
| **gorilla/mux** | 经典路由 |
| **Buffalo** | 全栈约定式 |
| **Revel** | 较老的全栈框架 |
| **GoFrame** | 国内常用全家桶 |
| **go-swagger / oapi-codegen** | 生成式 OpenAPI 服务（偏工具链） |

---

## 七、其它语言 · JVM

| 名称 | 备注 |
|------|------|
| **Spring Boot** | Java 常见选型 |
| **Quarkus** | 云原生、编译快启 |
| **Micronaut** | AOT 友好 |
| **Vert.x** | 响应式工具集 |
| **Play Framework** | Scala/Java |
| **Ktor** | Kotlin 异步服务 |

---

## 八、其它语言 · .NET / PHP / Python / Ruby

| 名称 | 备注 |
|------|------|
| **ASP.NET Core** | C# Web API / Minimal API |
| **Laravel** | PHP 全栈 |
| **Symfony** | PHP 企业组件化 |
| **FastAPI** | Python 异步 API |
| **Django** | Python 全栈 |
| **Flask** | Python 微框架 |
| **Rails (Ruby on Rails)** | Ruby 全栈约定 |
| **Hanami** | Ruby 轻量模块化 |

---

## 九、其它语言 · 系统级 / 函数式 / 常见面试名

| 名称 | 备注 |
|------|------|
| **Actix-web / Axum / Rocket** | Rust Web 常见组合 |
| **Warp** | Rust（维护状态需自行关注） |
| **Phoenix** | Elixir 全栈 |
| **Oak / Hono（Deno）** | Deno/TS 运行时 |
| **http4s / Finch** | Scala |
| **Pedestal** | Clojure |

---

## 十、BaaS / Serverless 厂商框架（偏平台）

| 名称 | 备注 |
|------|------|
| **Supabase Edge Functions** | Deno |
| **Firebase Cloud Functions** | Node/多语言 |
| **Vercel Serverless / AWS Lambda 适配器** | 与全栈框架或网关常一起出现 |

---

## 十一、API 形态 / 数据层（未以独立子工程提供）

| 名称 | 备注 |
|------|------|
| **GraphQL** | Apollo Server、Mercurius、graphql-go、gqlgen 等 |
| **tRPC** | TypeScript 端到端类型 |
| **gRPC / Connect** | 二进制/流式 RPC 栈 |
| **OpenAPI 生成** | `oapi-codegen`、`openapi-generator` 等 |
| **ORM / 查询构建** | Prisma、Drizzle、TypeORM、Sequelize、SQLAlchemy、Eloquent、GORM 等（库级，非完整 Web 框架） |
