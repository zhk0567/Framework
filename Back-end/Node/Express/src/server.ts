import cors from 'cors';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'framework-back-end-express' });
});

app.get('/api/info', (_req, res) => {
  res.json({
    message: 'Express 4 最小演示：路由 + 中间件 + 静态文件',
    highlights: [
      { title: '中间件链', detail: 'app.use 顺序决定请求管道；本示例先 CORS、再 JSON、再 API、最后 static。' },
      { title: '生态', detail: '教程与中间件数量大；大型项目常配合路由拆分与类型增强（如 Zod）。' },
    ],
  });
});

app.use(express.static(publicDir));

const port = Number(process.env.PORT ?? 3011);
const host = process.env.HOST ?? '127.0.0.1';

app.listen(port, host, () => {
  console.log(`Express 演示 http://${host}:${port}/`);
});
