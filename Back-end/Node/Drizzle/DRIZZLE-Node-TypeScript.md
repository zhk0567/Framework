# Drizzle ORM + Fastify（sql.js）

本目录演示 **Drizzle ORM** 与 **Fastify**：`GET /api/health`、`GET /api/info`、`GET /api/demo/items`。

## 为何使用 sql.js

**`better-sqlite3`** 依赖 **node-gyp** 与本地编译，在部分 Windows 环境易失败。本示例改用 **`sql.js`**（SQLite WASM），**`npm install` 即可**，便于对照 **Drizzle SQL 写法** 与 **Prisma** 子工程。

若你本机已能稳定编译原生模块，可在空目录自行替换为 **`drizzle-orm/better-sqlite3`** 并接 **drizzle-kit** 做文件库迁移。

## 命令

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Drizzle'
npm install
npm run dev
```

默认 **`http://127.0.0.1:3105/`**。

## 与 Prisma 对照

| 维度 | Drizzle（本目录） | Prisma（`Back-end/Node/Prisma`） |
|------|-------------------|----------------------------------|
| schema | `drizzle-orm` 表定义 | `schema.prisma` |
| 运行时 | sql.js（WASM） | `@prisma/client` + 文件 `dev.db` |

官方文档：<https://orm.drizzle.team/>
