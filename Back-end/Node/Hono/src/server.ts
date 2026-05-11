import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const app = new Hono();

app.get('/api/health', (c) =>
  c.json({ ok: true, service: 'framework-back-end-hono' }),
);

app.get('/api/info', (c) =>
  c.json({
    message: 'Hono 最小演示：同一套路由可跑 Node / Workers / Bun 等多运行时',
    highlights: [
      { title: '轻量', detail: '路由与中间件 API 紧凑，常与 @hono/node-server 等适配器组合。' },
      { title: '静态', detail: '本示例使用 @hono/node-server 提供的 serveStatic。' },
    ],
  }),
);

app.use('*', serveStatic({ root: publicDir }));

const port = Number(process.env.PORT ?? 3018);
const host = process.env.HOST ?? '127.0.0.1';

serve({ fetch: app.fetch, hostname: host, port }, (info) => {
  console.log(`Hono 演示 http://${info.address}:${info.port}/`);
});
