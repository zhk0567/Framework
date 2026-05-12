# Sequelize（Node · ORM）

本目录为 **Fastify + Sequelize** 最小示例：**`/`** 呈现页、**`GET /api/health`**、**`GET /api/info`**、**`GET /api/demo/items`**（与 [`../Drizzle`](../Drizzle)、[`../TypeORM`](../TypeORM) 对齐）。

## 数据库（无原生 SQLite）

使用 **pg-mem** 提供 **内存 PostgreSQL**，通过 Sequelize **`postgres`** 方言接入，避免 **`sqlite3` / `better-sqlite3`** 在 Windows 上的 **node-gyp** 问题。生产环境请换真实连接串与迁移流程。

## 运行

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Sequelize'
npm install
npm run dev
```

默认 **http://127.0.0.1:3113/**。

## 对照

| 目录 | 侧重点 |
|------|--------|
| [`../TypeORM`](../TypeORM) | Decorator 实体、`DataSource` |
| [`../Drizzle`](../Drizzle) | SQL-like schema、轻量 |
| [`../MikroORM`](../MikroORM) | Unit of Work、Identity Map |
