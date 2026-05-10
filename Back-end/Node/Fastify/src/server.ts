import { buildApp } from './app.js';

const port = Number(process.env.PORT ?? 3000);
const host = process.env.HOST ?? '127.0.0.1';

const app = await buildApp();

try {
  await app.listen({ port, host });
  app.log.info(
    { port, host },
    'Fastify 演示已启动：浏览器打开显示的本地地址即可查看「呈现页」',
  );
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
