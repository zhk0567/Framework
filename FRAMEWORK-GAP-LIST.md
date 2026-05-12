# 本仓库未收录框架清单

下列均为当前仓库内**没有**对应子工程的常见技术名（按类别归纳）。**已收录栈一律不写进本文件**，路径、端口与命令只以根目录 [README.md](README.md) 及各子目录说明为准。  
新名字会持续出现，本清单**不求穷尽**。

**第十一节及以后**为「**计划逐个补子工程或扩展示例**」的**候选队列**（**当前为空**：每迁入一项请删表行或节标题）。**第五节**为已迁入全栈元框架的索引说明（非候选表）。**第六节**为已迁入 **Vike** 的索引说明（非候选表）。**第七节**为已迁入 **Spring WebFlux、Actix-web、Rocket、warp、Sequelize、MikroORM** 的索引说明（非候选表）。**第八节**为已迁入 **Medusa、Payload CMS、Keystone** 的索引说明（非候选表）。**第九节**为已迁入 **Nx、Turborepo、Vitest、Playwright** 的索引说明（非候选表）。**第十节**为已迁入 **Apollo Router（Fed v2 文档链）、gRPC-Web + Envoy（文档链）、Connect 多服务 + buf breaking** 的索引说明（非候选表）。

---

## 一、全栈 / SSR / 路由一体化（元框架）

**RedwoodJS** 已提供形态占位子工程 **[`Full-stack/RedwoodJS`](Full-stack/RedwoodJS)**（`tsx` + Node `http` + 官方文档链）；**`yarn create redwood-app` 完整生成树**仍不在仓库内，满足 **Node 20.x（小于 21）** 与 **yarn** 后可在空目录执行官方脚手架，再与 [`Full-stack/README.md`](Full-stack/README.md) 中其它全栈示例对照。

---

## 二、其它语言 · 系统级 / 函数式 / 常见面试名

**Rust（Axum、actix-web、Rocket、warp）**、**Elixir（Phoenix 形态：Plug + Bandit）**、**Deno（Oak）**、**Scala（http4s，文档含 Finch）**、**Clojure（Pedestal 形态：Ring + Jetty）**已各对应子工程，路径与端口见根目录 [README.md](README.md) 中 **后端 · 其它语言** 表（`Back-end/Rust/*`、`Back-end/Elixir/Phoenix`、`Back-end/Deno/Oak`、`Back-end/Scala/Http4s`、`Back-end/Clojure/Pedestal`）。

---

## 三、BaaS / Serverless 厂商框架（偏平台）

**Supabase Edge Functions**、**Firebase Cloud Functions**、**Vercel Serverless / AWS Lambda 适配形态**已各对应子工程，路径与端口见根目录 [README.md](README.md) 中 **后端 · Node** 表（`Back-end/Node/SupabaseEdge`、`FirebaseFunctions`、`ServerlessAdapters`）。

---

## 四、API 形态 / 数据层（已迁入子工程，见 README）

**Drizzle ORM**、**TypeORM（文档含 Sequelize / MikroORM）**、**GraphQL 多子图（graphql-tools stitch）**、**Connect（Buf）Unary**、**SQLAlchemy 独立 API（文档含 PHP Eloquent 与 Laravel 关系）**已各对应子工程，路径与端口见根目录 [README.md](README.md) 中 **后端 · Node** 与 **后端 · DotNet / PHP / Python / Ruby** 表（`Back-end/Node/Drizzle`、`TypeORM`、`GraphQLFederation`、`ConnectRpc`；`Back-end/Python/SqlAlchemy`）。**§十加深项**：**Apollo Router / Fed v2**、**gRPC-Web + Envoy**、**Connect 多服务 + buf breaking** 见 **`Back-end/Node/ApolloRouter`**、**`GrpcWeb`**、**`ConnectRpcMulti`**。

---

## 五、全栈 / SSR / 元框架（已迁入，见 README）

**SolidStart**、**Gatsby**、**Fresh**、**Waku**、**Shopify Hydrogen** 已各对应子工程，路径与端口见根目录 [README.md](README.md) 与 [`Full-stack/README.md`](Full-stack/README.md)（[`Full-stack/SolidStart`](Full-stack/SolidStart)、[`Full-stack/Gatsby`](Full-stack/Gatsby)、[`Full-stack/Fresh`](Full-stack/Fresh)、[`Full-stack/Waku`](Full-stack/Waku)、[`Full-stack/ShopifyHydrogen`](Full-stack/ShopifyHydrogen)）。**Fresh** 为 **`deno task dev`**（默认 **3041**）；其余四项与 **RedwoodJS** 同为 **`npm run dev`** 的 **Node `http` + `tsx` 占位** 及官方 CLI 文档链。

---

## 六、前端 · Vite SSR 中间层（已迁入，见 README）

**Vike**（原 **vite-plugin-ssr** 演进）已对应子工程 **[`Front-end/Vike`](Front-end/Vike)**（`npm create vike@latest` + **React**；开发端口 **5198**），说明见 [VIKE-Vite-TypeScript.md](Front-end/Vike/VIKE-Vite-TypeScript.md) 与根目录 [README.md](README.md) 前端表。

---

## 七、后端 · JVM / Rust / ORM 补充（已迁入，见 README）

**Spring WebFlux**、**Actix-web**、**Rocket**、**warp**、**Sequelize**、**MikroORM** 已各对应子工程，路径与端口见根目录 [README.md](README.md) 与 [`Back-end/JVM/README.md`](Back-end/JVM/README.md)、[`Back-end/Rust/README.md`](Back-end/Rust/README.md)、**Node** 表（[`Back-end/JVM/WebFlux`](Back-end/JVM/WebFlux) **3076**；[`Back-end/Rust/ActixWeb`](Back-end/Rust/ActixWeb) **3110**、[`Rocket`](Back-end/Rust/Rocket) **3111**、[`Warp`](Back-end/Rust/Warp) **3112**；[`Back-end/Node/Sequelize`](Back-end/Node/Sequelize) **3113**、[`MikroORM`](Back-end/Node/MikroORM) **3114**）。

---

## 八、无头商务 / Headless CMS（已迁入，见 README）

**Medusa**、**Payload CMS**、**Keystone** 已各对应子工程，路径与端口见根目录 [README.md](README.md) 中 **后端 · Node** 表（[`Back-end/Node/Medusa`](Back-end/Node/Medusa) **3115**、[`Back-end/Node/Payload`](Back-end/Node/Payload) **3116**、[`Back-end/Node/Keystone`](Back-end/Node/Keystone) **3117**）。与 **Strapi、Directus** 同为 **Node `http` 形态占位 + 官方 CLI 文档链**，完整平台请在仓库外空目录按各目录 `*-Node-TypeScript.md` 创建。

---

## 九、Monorepo 与质量工具链（已迁入，见 README）

**Nx**、**Turborepo**、**Vitest**、**Playwright** 已各对应子工程，汇总见 [`Tooling/README.md`](Tooling/README.md) 与根目录 [README.md](README.md) 中 **工具链** 表（[`Tooling/Nx`](Tooling/Nx) **3120**、[`Tooling/Turborepo`](Tooling/Turborepo) **3121**、[`Tooling/Playwright`](Tooling/Playwright) **3122**；[`Tooling/Vitest`](Tooling/Vitest) 为 **`npm test`**（`vitest run`）最小可运行单测，**无 HTTP 端口**）。

---

## 十、API / 数据层 · 加深项（已迁入，见 README）

**Apollo Router（GraphQL Federation v2 文档链）**、**gRPC-Web + Envoy（全链路文档链）**、**Connect（Buf）多 Unary 服务 + `buf breaking` 说明** 已各对应子工程，路径与端口见根目录 [README.md](README.md) 中 **后端 · Node** 表（[`Back-end/Node/ApolloRouter`](Back-end/Node/ApolloRouter) **3123**、[`GrpcWeb`](Back-end/Node/GrpcWeb) **3124**、[`ConnectRpcMulti`](Back-end/Node/ConnectRpcMulti) **3125**）。与 **§四** 已有 [`GraphQLFederation`](Back-end/Node/GraphQLFederation)（stitch）、[`Grpc`](Back-end/Node/Grpc)（Unary）、[`ConnectRpc`](Back-end/Node/ConnectRpc)（单服务）**并列对照**，而非替换。
