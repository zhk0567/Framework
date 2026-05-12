import 'reflect-metadata';
import cors from '@fastify/cors';
import staticFiles from '@fastify/static';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Fastify from 'fastify';
import { MikroORM } from '@mikro-orm/libsql';

import { ItemSchema } from './entity/Item.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const orm = await MikroORM.init({
  entities: [ItemSchema],
  dbName: ':memory:',
  allowGlobalContext: true,
});

const conn = orm.em.getConnection();
await conn.execute(`
  CREATE TABLE IF NOT EXISTS items (
    id text PRIMARY KEY NOT NULL,
    title text NOT NULL,
    created_at text NOT NULL
  );
`);

const app = Fastify({ logger: false });
await app.register(cors, { origin: true });

app.get('/api/health', async (_req, reply) => {
  return reply.send({ ok: true, service: 'framework-back-end-mikroorm' });
});

app.get('/api/info', async (_req, reply) => {
  return reply.send({
    message: 'MikroORM：Unit of Work、Identity Map、Data Mapper',
    doc: 'https://mikro-orm.io/',
    highlights: [
      {
        title: '本示例数据库',
        detail: 'LibSQL :memory:（@mikro-orm/libsql）；建表使用原生 SQL，避免额外 schema 扩展包。',
      },
      { title: '对照', detail: 'Sequelize、TypeORM、Drizzle 见 Back-end/Node 各子目录。' },
    ],
  });
});

app.get('/api/demo/items', async (_req, reply) => {
  const em = orm.em.fork();
  let list = await em.find(ItemSchema, {}, { orderBy: { createdAt: 'DESC' }, limit: 50 });
  if (list.length === 0) {
    const row = em.create(ItemSchema, {
      id: randomUUID(),
      title: '示例条目（MikroORM persist）',
      createdAt: new Date(),
    });
    em.persist(row);
    await em.flush();
    list = await em.find(ItemSchema, {}, { orderBy: { createdAt: 'DESC' }, limit: 50 });
  }
  return reply.send({
    items: list.map((r) => ({
      id: r.id,
      title: r.title,
      createdAt: r.createdAt.toISOString(),
    })),
  });
});

await app.register(staticFiles, { root: publicDir, prefix: '/' });

const port = Number(process.env.PORT ?? 3114);
const host = process.env.HOST ?? '127.0.0.1';

await app.listen({ port, host });
console.log(`MikroORM 演示 http://${host}:${port}/`);

process.on('beforeExit', async () => {
  await orm.close();
});
