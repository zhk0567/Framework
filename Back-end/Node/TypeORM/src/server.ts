import 'reflect-metadata';
import cors from '@fastify/cors';
import staticFiles from '@fastify/static';
import Fastify from 'fastify';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';

import { AppDataSource } from './data-source.js';
import { Item } from './entity/Item.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

await AppDataSource.initialize();

const app = Fastify({ logger: false });
await app.register(cors, { origin: true });

app.get('/api/health', async (_req, reply) => {
  return reply.send({ ok: true, service: 'framework-back-end-typeorm' });
});

app.get('/api/info', async (_req, reply) => {
  return reply.send({
    message: 'TypeORM：Decorator 实体、DataSource、Active Record / Repository 模式',
    doc: 'https://typeorm.io/',
    highlights: [
      { title: '其它 Node ORM', detail: 'Sequelize、MikroORM 等未单独建目录，可与此处 Repository 用法对照。' },
      { title: 'SQLite', detail: '开发态 synchronize: true；生产请用迁移。' },
    ],
  });
});

app.get('/api/demo/items', async (_req, reply) => {
  const repo = AppDataSource.getRepository(Item);
  let list = await repo.find({ order: { createdAt: 'DESC' }, take: 50 });
  if (list.length === 0) {
    const row = repo.create({
      id: randomUUID(),
      title: '示例条目（TypeORM save）',
    });
    await repo.save(row);
    list = await repo.find({ order: { createdAt: 'DESC' }, take: 50 });
  }
  const items = list.map((r) => ({
    id: r.id,
    title: r.title,
    createdAt: r.createdAt.toISOString(),
  }));
  return reply.send({ items });
});

await app.register(staticFiles, { root: publicDir, prefix: '/' });

const port = Number(process.env.PORT ?? 3106);
const host = process.env.HOST ?? '127.0.0.1';

await app.listen({ port, host });
console.log(`TypeORM 演示 http://${host}:${port}/`);

process.on('beforeExit', async () => {
  if (AppDataSource.isInitialized) {
    await AppDataSource.destroy();
  }
});
