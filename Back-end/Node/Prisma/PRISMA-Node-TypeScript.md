# Back-end / Node / Prisma

## 框架简介

**Prisma** 是 TypeScript/JavaScript 的 **ORM 与迁移工具**：`schema.prisma` 描述模型，**Prisma Client** 提供类型安全查询，常与 **PostgreSQL / SQLite** 等搭配。

- 官方文档：<https://www.prisma.io/docs>

## 在本仓库中的角色

**Fastify + Prisma（SQLite）**：**`GET /api/health`**、**`GET /api/info`**；**`GET /api/demo/items`** 演示 **Prisma 查询**；**`public/index.html`** 为呈现页。默认 **http://127.0.0.1:3093/**

## 环境要求

- **Node.js 20+**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Prisma'
npm install
npx prisma generate
npx prisma migrate deploy
npm run start
```

浏览器打开 **http://127.0.0.1:3093/**

## 与仓库内其它后端对照

- **Django ORM**：对照 **schema-first（Prisma）** 与 **模型类优先（Django）**。  
- **TypeORM / Drizzle**：同属 Node ORM/查询层选型，可对照迁移与类型生成策略。
