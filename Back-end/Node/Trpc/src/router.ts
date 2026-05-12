import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const appRouter = t.router({
  health: t.procedure.query(() => ({
    ok: true as const,
    service: 'framework-back-end-trpc',
  })),
  info: t.procedure.query(() => ({
    message:
      'tRPC：端到端类型安全的 TypeScript API 层；与 React Query、TanStack Query 等常见组合。',
    highlights: [
      { title: 'Procedure', detail: 'query / mutation / subscription 与 Zod 输入校验。' },
      { title: '与 GraphQL 对照', detail: 'tRPC 绑定 TypeScript 类型；GraphQL 绑定 schema 与多语言客户端。' },
    ],
  })),
  echo: t.procedure.input(z.object({ text: z.string().min(1).max(200) })).query(({ input }) => ({
    echo: input.text,
  })),
});

export type AppRouter = typeof appRouter;
