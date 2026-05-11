import Router from '@koa/router';
import cors from '@koa/cors';
import Koa from 'koa';
import serve from 'koa-static';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const app = new Koa();
const router = new Router();

app.use(cors({ origin: '*' }));

router.get('/api/health', (ctx) => {
  ctx.body = { ok: true, service: 'framework-back-end-koa' };
});

router.get('/api/info', (ctx) => {
  ctx.body = {
    message: 'Koa 2 最小演示：洋葱模型 + @koa/router',
    highlights: [
      { title: '洋葱模型', detail: 'await next() 向内层执行后再回到外层，适合日志、错误边界与可组合中间件。' },
      { title: '与 Express 差异', detail: 'ctx 对象封装 req/res；路由常配合 @koa/router 或等价库拆分。' },
    ],
  };
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve(publicDir));

const port = Number(process.env.PORT ?? 3012);
const host = process.env.HOST ?? '127.0.0.1';

app.listen(port, host, () => {
  console.log(`Koa 演示 http://${host}:${port}/`);
});
