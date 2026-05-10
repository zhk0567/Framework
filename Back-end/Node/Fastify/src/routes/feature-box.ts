import type { FastifyPluginAsync, FastifyReply } from 'fastify';

/**
 * 内层插件：decorateReply 仅在本 register 子树内可用，
 * 用于对照「未使用 fastify-plugin 提升」时的封装边界（见呈现页说明）。
 */
const innerBox: FastifyPluginAsync = async (fastify) => {
  fastify.decorateReply('stampBox', function (this: FastifyReply) {
    this.header('x-feature-box', 'inner-decorateReply');
  });

  fastify.get('/inner', async (_request, reply) => {
    (reply as FastifyReply & { stampBox: () => void }).stampBox();
    return {
      where: '/api/box/inner',
      note: 'reply.stampBox() 仅在本封装盒内注册；根上其他路由无法安全调用该方法。',
    };
  });
};

export const featureBoxRoutes: FastifyPluginAsync = async (fastify) => {
  await fastify.register(innerBox);
};
