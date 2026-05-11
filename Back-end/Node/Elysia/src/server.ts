import { staticPlugin } from '@elysiajs/static';
import { Elysia } from 'elysia';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const port = Number(process.env.PORT ?? 3019);
const hostname = process.env.HOST ?? '127.0.0.1';

new Elysia()
  .get('/api/health', () => ({ ok: true, service: 'framework-back-end-elysia' }))
  .get('/api/info', () => ({
    message: 'Elysia 最小演示：Bun 生态常见、端到端类型体验突出',
    highlights: [
      { title: 'Bun', detail: '请使用 Bun 执行本目录脚本（见 package.json 的 engines）。' },
      { title: '静态', detail: '@elysiajs/static 托管 public/。' },
    ],
  }))
  .use(
    staticPlugin({
      assets: publicDir,
      prefix: '/',
    }),
  )
  .listen({ port, hostname }, ({ hostname: h, port: p }) => {
    console.log(`Elysia 演示 http://${h}:${p}/`);
  });
