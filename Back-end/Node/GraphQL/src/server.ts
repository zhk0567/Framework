import cors from '@fastify/cors';
import staticFiles from '@fastify/static';
import Fastify from 'fastify';
import mercurius from 'mercurius';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const app = Fastify({ logger: false });

await app.register(cors, { origin: true });

app.get('/api/health', async (_req, reply) => {
  return reply.send({ ok: true, service: 'framework-back-end-graphql' });
});

app.get('/api/info', async (_req, reply) => {
  return reply.send({
    message:
      'GraphQL：单一端点 + 强类型查询语言；Mercurius 为 Fastify 的 GraphQL 适配器。',
    highlights: [
      { title: '查询形状', detail: '客户端按需取字段，减少 over-fetching。' },
      { title: '与 REST 对照', detail: '本示例同时保留 GET /api/* 便于并排对照。' },
    ],
  });
});

const schema = `
  type Health {
    ok: Boolean!
    service: String!
  }
  type Highlight {
    title: String!
    detail: String!
  }
  type InfoPayload {
    message: String!
    highlights: [Highlight!]!
  }
  type Query {
    health: Health!
    info: InfoPayload!
  }
`;

const resolvers = {
  Query: {
    health: () => ({ ok: true, service: 'framework-back-end-graphql' }),
    info: () => ({
      message:
        'GraphQL：单一端点 + 强类型查询语言；Mercurius 为 Fastify 的 GraphQL 适配器。',
      highlights: [
        { title: '查询形状', detail: '客户端按需取字段，减少 over-fetching。' },
        { title: '与 REST 对照', detail: '本示例同时保留 GET /api/* 便于并排对照。' },
      ],
    }),
  },
};

await app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true,
  path: '/graphql',
});

await app.register(staticFiles, { root: publicDir, prefix: '/' });

const port = Number(process.env.PORT ?? 3088);
const host = process.env.HOST ?? '127.0.0.1';

await app.listen({ port, host });
console.log(`GraphQL 演示 http://${host}:${port}/  · GraphiQL /graphiql · POST /graphql`);
