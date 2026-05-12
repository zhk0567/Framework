import cors from '@fastify/cors';
import staticFiles from '@fastify/static';
import { desc } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/sql-js';
import Fastify from 'fastify';
import initSqlJs, { type Database } from 'sql.js';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';

import * as schema from './db/schema.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const SQL = await initSqlJs({
  locateFile: (file) =>
    path.join(__dirname, '..', 'node_modules', 'sql.js', 'dist', file),
});

let database: Database = new SQL.Database();
database.run(`
CREATE TABLE IF NOT EXISTS items (
  id text PRIMARY KEY NOT NULL,
  title text NOT NULL,
  created_at integer NOT NULL
);
`);

const db = drizzle(database, { schema });

const app = Fastify({ logger: false });
await app.register(cors, { origin: true });

app.get('/api/health', async (_req, reply) => {
  return reply.send({ ok: true, service: 'framework-back-end-drizzle' });
});

app.get('/api/info', async (_req, reply) => {
  return reply.send({
    message: 'Drizzle ORM：SQL-like schema；本示例用 sql.js（无 better-sqlite3 原生编译）',
    doc: 'https://orm.drizzle.team/',
    highlights: [
      { title: 'sql.js', detail: 'WASM SQLite，适合 Windows 零工具链克隆；生产可换 better-sqlite3 / libsql。' },
      { title: 'Prisma', detail: '见 Back-end/Node/Prisma 文件库 + migrate 路径。' },
    ],
  });
});

app.get('/api/demo/items', async (_req, reply) => {
  const rows = await db.select().from(schema.items).orderBy(desc(schema.items.createdAt)).limit(50);
  if (rows.length === 0) {
    const id = randomUUID();
    await db.insert(schema.items).values({
      id,
      title: '示例条目（Drizzle insert）',
      createdAt: new Date(),
    });
    const again = await db.select().from(schema.items).orderBy(desc(schema.items.createdAt)).limit(50);
    return reply.send({
      items: again.map((r) => ({
        id: r.id,
        title: r.title,
        createdAt: new Date(r.createdAt).toISOString(),
      })),
    });
  }
  return reply.send({
    items: rows.map((r) => ({
      id: r.id,
      title: r.title,
      createdAt: new Date(r.createdAt).toISOString(),
    })),
  });
});

await app.register(staticFiles, { root: publicDir, prefix: '/' });

const port = Number(process.env.PORT ?? 3105);
const host = process.env.HOST ?? '127.0.0.1';

await app.listen({ port, host });
console.log(`Drizzle 演示 http://${host}:${port}/`);

process.on('beforeExit', () => {
  database.close();
});
