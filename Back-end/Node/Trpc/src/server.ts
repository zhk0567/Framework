import { createExpressMiddleware } from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { appRouter } from './router.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'framework-back-end-trpc' });
});

app.get('/api/info', (_req, res) => {
  res.json({
    message:
      'tRPC：端到端类型安全的 TypeScript API 层；与 React Query、TanStack Query 等常见组合。',
    highlights: [
      { title: 'Procedure', detail: 'query / mutation / subscription 与 Zod 输入校验。' },
      { title: '与 GraphQL 对照', detail: 'tRPC 绑定 TypeScript 类型；GraphQL 绑定 schema 与多语言客户端。' },
    ],
  });
});

app.use(
  '/api/trpc',
  createExpressMiddleware({
    router: appRouter,
    createContext: () => ({}),
  }),
);

app.use(express.static(publicDir));

const port = Number(process.env.PORT ?? 3089);
const host = process.env.HOST ?? '127.0.0.1';

app.listen(port, host, () => {
  console.log(`tRPC 演示 http://${host}:${port}/  · tRPC HTTP 前缀 /api/trpc`);
});
