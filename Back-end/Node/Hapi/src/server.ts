import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const port = Number(process.env.PORT ?? 3013);
const host = process.env.HOST ?? '127.0.0.1';

async function main() {
  const server = Hapi.server({
    port,
    host,
    routes: {
      files: {
        relativeTo: publicDir,
      },
    },
  });

  await server.register(Inert);

  server.route([
    {
      method: 'GET',
      path: '/api/health',
      handler: () => ({ ok: true, service: 'framework-back-end-hapi' }),
    },
    {
      method: 'GET',
      path: '/api/info',
      handler: () => ({
        message: 'Hapi 最小演示：显式 route 表 + Inert 静态',
        highlights: [
          {
            title: '插件系统',
            detail: '通过 server.register 组合能力（如 Inert）；适合企业向分层与配置驱动路由。',
          },
          {
            title: '与 Express 差异',
            detail: 'handler 返回 payload 或 h 工具链；文件响应常用 h.file 与 relativeTo。',
          },
        ],
      }),
    },
    {
      method: 'GET',
      path: '/',
      handler: (_request, h) => h.file('index.html'),
    },
  ]);

  await server.start();
  console.log(`Hapi 演示 ${server.info.uri}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
