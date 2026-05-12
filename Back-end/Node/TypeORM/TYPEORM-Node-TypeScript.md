# TypeORM + Fastify（sql.js）

本目录演示 **TypeORM** 与 **Fastify**。数据库使用 **sql.js** 驱动并 **`autoSave`** 到 **`dev.db`**，避免 **better-sqlite3** 在 Windows 上的原生编译问题。

## Sequelize / MikroORM

**Sequelize**、**MikroORM** 未再单独建子工程；对照时可关注 **Model / Repository / UnitOfWork** 与本文 **`getRepository`** 用法的差异。

本示例与 [Drizzle](../Drizzle/DRIZZLE-Node-TypeScript.md)、[Prisma](../Prisma/PRISMA-Node-TypeScript.md) 形成 **ORM 三角** 对照。

## 命令

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\TypeORM'
npm install
npm run dev
```

默认 **`http://127.0.0.1:3106/`**。

开发态 **`synchronize: true`** 仅适合学习；生产请用迁移。
