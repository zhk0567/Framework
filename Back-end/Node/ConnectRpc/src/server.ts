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
  return reply.send({ ok: true, service: 'framework-back-end-connect-rpc' });
});

app.get('/api/info', async (_req, reply) => {
  return reply.send({
    message:
      'Connect（Buf）：Unary RPC，默认 Connect 协议 JSON POST（与 gRPC 路径风格相近）',
    doc: 'https://connectrpc.com/docs/node/getting-started',
    rpcPath: 'POST /framework.greet.v1.GreetService/SayHello',
    highlights: [
      {
        title: '代码生成',
        detail: '修改 proto 后在本目录执行 npm run generate（需 buf）。',
      },
      {
        title: 'gRPC-Web / Envoy',
        detail: '全链路与浏览器侧说明见 Back-end/Node/GrpcWeb（3124）；多 Unary 服务见 ConnectRpcMulti（3125）。',
      },
    ],
  });
});

await app.register(fastifyConnectPlugin, {
  routes,
});

await app.register(staticFiles, { root: publicDir, prefix: '/' });

const port = Number(process.env.PORT ?? 3108);
const host = process.env.HOST ?? '127.0.0.1';

await app.listen({ port, host });
console.log(`Connect（Buf）http://${host}:${port}/`);
