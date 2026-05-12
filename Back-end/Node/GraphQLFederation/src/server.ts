import cors from '@fastify/cors';
import staticFiles from '@fastify/static';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { stitchSchemas } from '@graphql-tools/stitch';
import Fastify from 'fastify';
import mercurius from 'mercurius';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const usersSub = makeExecutableSchema({
  typeDefs: `
    type Query {
      users: [User!]!
    }
    type User {
      id: ID!
      name: String!
    }
  `,
  resolvers: {
    Query: {
      users: () => [
        { id: '1', name: 'Alice' },
        { id: '2', name: 'Bob' },
      ],
    },
  },
});

const ordersSub = makeExecutableSchema({
  typeDefs: `
    type Query {
      orders(userId: ID!): [Order!]!
    }
    type Order {
      id: ID!
      userId: ID!
      total: Int!
    }
  `,
  resolvers: {
    Query: {
      orders: (_: unknown, args: { userId: string }) =>
        args.userId === '1'
          ? [
              { id: 'o1', userId: '1', total: 42 },
              { id: 'o2', userId: '1', total: 7 },
            ]
          : [],
    },
  },
});

const schema = stitchSchemas({
  subschemas: [{ schema: usersSub }, { schema: ordersSub }],
});

const app = Fastify({ logger: false });
await app.register(cors, { origin: true });

app.get('/api/health', async (_req, reply) => {
  return reply.send({ ok: true, service: 'framework-back-end-graphql-federation' });
});

app.get('/api/info', async (_req, reply) => {
  return reply.send({
    message:
      '本示例用 graphql-tools stitchSchemas 将两个本地子 schema 合成单一 endpoint；与单服务 Mercurius（GraphQL 目录）对照。',
    doc: 'https://the-guild.dev/graphql/stitching',
    graphqlPath: '/graphql',
    graphiqlPath: '/graphiql',
    highlights: [
      {
        title: 'Apollo Federation',
        detail: '生产多子图联邦常用 Apollo Router / Federation v2 与 SDL composition；本仓库不内置 Router。',
      },
    ],
  });
});

await app.register(mercurius, {
  schema,
  path: '/graphql',
  graphiql: true,
});

await app.register(staticFiles, { root: publicDir, prefix: '/' });

const port = Number(process.env.PORT ?? 3107);
const host = process.env.HOST ?? '127.0.0.1';

await app.listen({ port, host });
console.log(`GraphQL Federation（stitch）http://${host}:${port}/  GraphiQL /graphiql`);
