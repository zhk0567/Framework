import cors from '@fastify/cors';
import staticFiles from '@fastify/static';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { newDb } from 'pg-mem';
import { DataTypes, Sequelize } from 'sequelize';
import Fastify from 'fastify';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const mem = newDb();
const sequelize = new Sequelize({
  dialect: 'postgres',
  dialectModule: mem.adapters.createPg(),
  logging: false,
});

const Item = sequelize.define(
  'Item',
  {
    id: { type: DataTypes.UUID, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
  },
  { tableName: 'items', timestamps: false },
);

await sequelize.sync({ force: true });

const app = Fastify({ logger: false });
await app.register(cors, { origin: true });

app.get('/api/health', async (_req, reply) => {
  return reply.send({ ok: true, service: 'framework-back-end-sequelize' });
});

app.get('/api/info', async (_req, reply) => {
  return reply.send({
    message: 'Sequelize：Active Record / Model、迁移与多数据库方言',
    doc: 'https://sequelize.org/',
    highlights: [
      {
        title: '本示例数据库',
        detail: 'pg-mem 内存 PostgreSQL（无本机 Postgres、无 sqlite 原生绑定）；生产可换真实连接串。',
      },
      { title: '对照', detail: 'TypeORM、Drizzle、MikroORM 见 Back-end/Node 各子目录。' },
    ],
  });
});

app.get('/api/demo/items', async (_req, reply) => {
  let rows = await Item.findAll({
    order: [['createdAt', 'DESC']],
    limit: 50,
  });
  if (rows.length === 0) {
    await Item.create({
      id: randomUUID(),
      title: '示例条目（Sequelize create）',
      createdAt: new Date(),
    });
    rows = await Item.findAll({
      order: [['createdAt', 'DESC']],
      limit: 50,
    });
  }
  return reply.send({
    items: rows.map((r) => ({
      id: r.get('id') as string,
      title: r.get('title') as string,
      createdAt: (r.get('createdAt') as Date).toISOString(),
    })),
  });
});

await app.register(staticFiles, { root: publicDir, prefix: '/' });

const port = Number(process.env.PORT ?? 3113);
const host = process.env.HOST ?? '127.0.0.1';

await app.listen({ port, host });
console.log(`Sequelize 演示 http://${host}:${port}/`);

process.on('beforeExit', async () => {
  await sequelize.close();
});
