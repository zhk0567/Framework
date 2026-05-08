import 'fastify';

declare module 'fastify' {
  interface FastifyRequest {
    /** 由演示插件写入，用于展示钩子执行顺序 */
    demoTrace: string[];
    /** 高精度耗时起点（decorate + onResponse） */
    _startedAtNs: bigint;
  }
}
