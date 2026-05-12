import cors from '@fastify/cors';
import staticFiles from '@fastify/static';
import { fastifyConnectPlugin } from '@connectrpc/connect-fastify';
import Fastify from 'fastify';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import routes from './connect.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const app = Fastify({ logger: false });
await app.register(cors, { origin: true });

app.get('/api/health', async (_req, reply) => {
  return reply.send({ ok: true, service: 'framework-back-end-connect-rpc-multi' });
});

app.get('/api/info', async (_req, reply) => {
  return reply.send({
    message: 'Connect（Buf）：同一 Fastify 上挂载 **GreetService** 与 **EchoService** 两个 Unary RPC',
    doc: 'https://connectrpc.com/docs/node/getting-started',
    rpcPaths: [
      'POST /framework.greet.v1.GreetService/SayHello',
      'POST /framework.echo.v1.EchoService/Ping',
    ],
    highlights: [
      {
        title: '代码生成',
        detail: '修改 proto 后在本目录执行 npm run generate（需 buf）。',
      },
      {
        title: '与 ConnectRpc 单服务对照',
        detail: 'Back-end/Node/ConnectRpc 仅 GreetService；本目录演示多 package 多 service 同进程注册。',
      },
      {
        title: '兼容破坏性检测',
        detail: '见 CONNECT-MULTI-Buf-Node-TypeScript.md 中 buf breaking 与 CI 示例。',
      },
    ],
  });
});

await app.register(fastifyConnectPlugin, {
  routes,
});

await app.register(staticFiles, { root: publicDir, prefix: '/' });

const port = Number(process.env.PORT ?? 3125);
const host = process.env.HOST ?? '127.0.0.1';

await app.listen({ port, host });
console.log(`Connect（Buf）多服务 http://${host}:${port}/`);
