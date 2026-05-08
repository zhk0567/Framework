import type { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

/**
 * 使用 fastify-plugin 打破封装，把「生命周期轨迹」挂到全局实例，
 * 便于在任意子路由里读取 demoTrace（体现 fp 与默认 register 封装差异）。
 */
const traceLifecyclePlugin: FastifyPluginAsync = async (fastify) => {
  fastify.addHook('onRequest', async (request) => {
    request._startedAtNs = process.hrtime.bigint();
    request.demoTrace = [];
    request.demoTrace.push('onRequest');
  });

  fastify.addHook('preParsing', async (request) => {
    request.demoTrace.push('preParsing');
  });

  fastify.addHook('preValidation', async (request) => {
    request.demoTrace.push('preValidation');
  });

  fastify.addHook('preHandler', async (request) => {
    request.demoTrace.push('preHandler');
  });

  fastify.addHook('onSend', async (request, _reply, payload) => {
    request.demoTrace.push('onSend');
    return payload;
  });

  fastify.addHook('onResponse', async (request, reply) => {
    request.demoTrace.push('onResponse');
    const elapsedMs = Number(process.hrtime.bigint() - request._startedAtNs) / 1e6;
    reply.log.info(
      { trace: request.demoTrace, elapsedMs: Math.round(elapsedMs * 1000) / 1000 },
      'request completed (Fastify lifecycle demo)',
    );
  });
};

export default fp(traceLifecyclePlugin, {
  name: 'trace-lifecycle',
});
