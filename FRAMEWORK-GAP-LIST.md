# 本仓库未收录框架清单

下列均为当前仓库内**没有**对应子工程的常见技术名（按类别归纳）。**已收录栈一律不写进本文件**，路径、端口与命令只以根目录 [README.md](README.md) 及各子目录说明为准。  
新名字会持续出现，本清单**不求穷尽**。

---

## 一、全栈 / SSR / 路由一体化（元框架）

**RedwoodJS** 已提供形态占位子工程 **[`Full-stack/RedwoodJS`](Full-stack/RedwoodJS)**（`tsx` + Node `http` + 官方文档链）；**`yarn create redwood-app` 完整生成树**仍不在仓库内，满足 **Node 20.x（小于 21）** 与 **yarn** 后可在空目录执行官方脚手架，再与 [`Full-stack/README.md`](Full-stack/README.md) 中其它全栈示例对照。

---

## 二、其它语言 · 系统级 / 函数式 / 常见面试名

**Rust（Axum，文档含 actix-web / Rocket / Warp）**、**Elixir（Phoenix 形态：Plug + Bandit）**、**Deno（Oak）**、**Scala（http4s，文档含 Finch）**、**Clojure（Pedestal 形态：Ring + Jetty）**已各对应子工程，路径与端口见根目录 [README.md](README.md) 中 **后端 · 其它语言** 表（`Back-end/Rust/Axum`、`Back-end/Elixir/Phoenix`、`Back-end/Deno/Oak`、`Back-end/Scala/Http4s`、`Back-end/Clojure/Pedestal`）。

---

## 三、BaaS / Serverless 厂商框架（偏平台）

**Supabase Edge Functions**、**Firebase Cloud Functions**、**Vercel Serverless / AWS Lambda 适配形态**已各对应子工程，路径与端口见根目录 [README.md](README.md) 中 **后端 · Node** 表（`Back-end/Node/SupabaseEdge`、`FirebaseFunctions`、`ServerlessAdapters`）。

---

## 四、API 形态 / 数据层（已迁入子工程，见 README）

**Drizzle ORM**、**TypeORM（文档含 Sequelize / MikroORM）**、**GraphQL 多子图（graphql-tools stitch）**、**Connect（Buf）Unary**、**SQLAlchemy 独立 API（文档含 PHP Eloquent 与 Laravel 关系）**已各对应子工程，路径与端口见根目录 [README.md](README.md) 中 **后端 · Node** 与 **后端 · DotNet / PHP / Python / Ruby** 表（`Back-end/Node/Drizzle`、`TypeORM`、`GraphQLFederation`、`ConnectRpc`；`Back-end/Python/SqlAlchemy`）。
