import cors from '@fastify/cors';
import fastifyStatic from '@fastify/static';
import Fastify from 'fastify';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import traceLifecycle from './plugins/trace-lifecycle.js';
import { demoRoutes } from './routes/demo.js';
import { featureBoxRoutes } from './routes/feature-box.js';
import { healthRoutes } from './routes/health.js';
import { itemsRoutes } from './routes/items.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function buildApp() {
  const fastify = Fastify({
    logger: {
      level: process.env.LOG_LEVEL ?? 'info',
    },
  });

  await fastify.register(cors, { origin: true });

  /** 全局生命周期轨迹（依赖 fastify-plugin 提升作用域） */
  await fastify.register(traceLifecycle);

  /** 先注册 API，避免与静态根路径抢匹配 */
  await fastify.register(healthRoutes, { prefix: '/api' });
  await fastify.register(demoRoutes, { prefix: '/api' });
  await fastify.register(itemsRoutes, { prefix: '/api/items' });
  /** 插件封装盒：内部 decorateReply 不会泄漏到盒外路由 */
  await fastify.register(featureBoxRoutes, { prefix: '/api/box' });

  await fastify.register(fastifyStatic, {
    root: path.join(__dirname, '../public'),
    prefix: '/',
    decorateReply: false,
  });

  return fastify;
}
