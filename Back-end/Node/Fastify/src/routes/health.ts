import type { FastifyPluginAsync } from 'fastify';

export const healthRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get(
    '/health',
    {
      schema: {
        response: {
          200: {
            type: 'object',
            properties: {
              ok: { type: 'boolean' },
              service: { type: 'string' },
            },
            required: ['ok', 'service'],
          },
        },
      },
    },
    async () => ({ ok: true, service: 'framework-back-end-fastify' }),
  );
};
