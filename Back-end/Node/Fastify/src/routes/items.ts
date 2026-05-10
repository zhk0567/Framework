import type { FastifyPluginAsync } from 'fastify';
import { randomUUID } from 'node:crypto';

type Item = { id: string; title: string; createdAt: string };

const store: Item[] = [
  { id: 'seed-1', title: '示例条目（内存存储）', createdAt: new Date().toISOString() },
];

const itemSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    createdAt: { type: 'string' },
  },
  required: ['id', 'title', 'createdAt'],
} as const;

export const itemsRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get(
    '/',
    {
      schema: {
        response: {
          200: {
            type: 'object',
            properties: {
              items: { type: 'array', items: itemSchema },
            },
            required: ['items'],
          },
        },
      },
    },
    async () => ({ items: [...store] }),
  );

  fastify.post<{ Body: { title: string } }>(
    '/',
    {
      schema: {
        body: {
          type: 'object',
          required: ['title'],
          properties: {
            title: { type: 'string', minLength: 1, maxLength: 120 },
          },
        },
        response: {
          201: {
            type: 'object',
            properties: { item: itemSchema },
            required: ['item'],
          },
        },
      },
    },
    async (request, reply) => {
      const item: Item = {
        id: randomUUID(),
        title: request.body.title.trim(),
        createdAt: new Date().toISOString(),
      };
      store.unshift(item);
      reply.code(201);
      return { item };
    },
  );
};
