import cors from '@fastify/cors';
import staticFiles from '@fastify/static';
import { PrismaClient } from '@prisma/client';
import Fastify from 'fastify';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const prisma = new PrismaClient();

const app = Fastify({ logger: false });
await app.register(cors, { origin: true });

app.get('/api/health', async (_req, reply) => {
  return reply.send({ ok: true, service: 'framework-back-end-prisma' });
});

app.get('/api/info', async (_req, reply) => {
  return reply.send({
    message:
      'Prisma：schema-first ORM；迁移、类型安全 Client 与 Prisma Studio 常见。',
    highlights: [
      { title: 'SQLite', detail: '本示例 file:./dev.db，便于零配置对照。' },
      { title: '与 Drizzle 对照', detail: '见 `Back-end/Node/Drizzle`：Drizzle 偏 SQL-like schema；Prisma 偏声明式模型。' },
    ],
  });
});

app.get('/api/demo/items', async (_req, reply) => {
  const items = await prisma.item.findMany({ orderBy: { createdAt: 'desc' }, take: 50 });
  return reply.send({ items });
});

await app.register(staticFiles, { root: publicDir, prefix: '/' });

const port = Number(process.env.PORT ?? 3093);
const host = process.env.HOST ?? '127.0.0.1';

await app.listen({ port, host });
console.log(`Prisma 演示 http://${host}:${port}/`);

process.on('beforeExit', async () => {
  await prisma.$disconnect();
});
