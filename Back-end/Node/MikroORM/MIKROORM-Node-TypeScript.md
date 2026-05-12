# MikroORM（Node · ORM）

本目录为 **Fastify + MikroORM 7 + `@mikro-orm/libsql`** 最小示例：**`/`** 呈现页、**`GET /api/health`**、**`GET /api/info`**、**`GET /api/demo/items`**（与 [`../Drizzle`](../Drizzle)、[`../TypeORM`](../TypeORM) 对齐）。

## 数据库

使用 **LibSQL `:memory:`** 作为嵌入式内存库（随 **`@mikro-orm/libsql`**），避免 **`better-sqlite3`** 等原生模块在 Windows 上的编译问题。实体采用 **MikroORM 7** 的 **`EntitySchema`**；启动时用 **`em.getConnection().execute(...)`** 执行 **`CREATE TABLE`**（本仓库未引入额外 schema 扩展包，便于对照 SQL 与 ORM 映射）。生产可换 **Turso / 文件库** 及官方 **SchemaGenerator / 迁移** 流程。

## 运行

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\MikroORM'
npm install
npm run dev
```

默认 **http://127.0.0.1:3114/**。

## 对照

| 目录 | 侧重点 |
|------|--------|
| [`../TypeORM`](../TypeORM) | 宽用户基数、DataMapper |
| [`../Drizzle`](../Drizzle) | 类型 SQL、零迁移魔法 |
| [`../Sequelize`](../Sequelize) | 老牌 Model、多方言 |
