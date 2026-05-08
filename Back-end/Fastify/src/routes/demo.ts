import type { FastifyPluginAsync } from 'fastify';

const highlights = [
  {
    title: '插件（register）与封装',
    detail:
      '子应用通过 register 挂载；默认装饰器与钩子仅在当前封装域内可见，常用 fastify-plugin 提升到外层。',
  },
  {
    title: 'JSON Schema 校验与序列化',
    detail:
      '路由级 schema 在 preValidation 阶段校验入参，并可约束出参形状，错误时返回结构化 400（由框架整合）。',
  },
  {
    title: '生命周期钩子',
    detail:
      'onRequest → preParsing → preValidation → preHandler → handler → preSerialization → onSend → onResponse；本路由在「呈现页」展示截至 handler 的快照，尾部步骤见控制台 Pino 日志。',
  },
  {
    title: '高性能日志',
    detail: '默认集成 Pino；全局 onResponse 会打印完整轨迹与耗时，便于对照官方文档。',
  },
] as const;

export const demoRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook('preSerialization', async (request) => {
    request.demoTrace.push('preSerialization（仅挂载在 demo 子树的路由）');
  });

  fastify.get(
    '/demo/lifecycle',
    {
      schema: {
        response: {
          200: {
            type: 'object',
            properties: {
              message: { type: 'string' },
              hookTraceThroughHandler: {
                type: 'array',
                items: { type: 'string' },
              },
              fastifyHighlights: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    title: { type: 'string' },
                    detail: { type: 'string' },
                  },
                  required: ['title', 'detail'],
                },
              },
            },
            required: ['message', 'hookTraceThroughHandler', 'fastifyHighlights'],
          },
        },
      },
    },
    async (request) => {
      request.demoTrace.push('handler（业务逻辑）');
      const hookTraceThroughHandler = [...request.demoTrace];
      return {
        message:
          'hookTraceThroughHandler 为「截至路由 handler 返回」的快照；preSerialization、onSend、onResponse 在其后执行，完整顺序见运行服务的终端日志。',
        hookTraceThroughHandler,
        fastifyHighlights: [...highlights],
      };
    },
  );
};
