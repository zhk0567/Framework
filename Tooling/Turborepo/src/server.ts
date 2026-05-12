import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** 完整 Turborepo 为 turbo.json pipeline；此处仅 HTTP 占位与文档链。 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const indexPath = path.join(publicDir, 'index.html');

const port = Number(process.env.PORT ?? 3121);
const host = process.env.HOST ?? '127.0.0.1';

function sendJson(res: http.ServerResponse, body: unknown) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

const server = http.createServer((req, res) => {
  const url = (req.url ?? '/').split('?')[0] ?? '/';

  if (req.method === 'GET' && url === '/api/health') {
    sendJson(res, {
      ok: true,
      service: 'framework-tooling-turborepo-guide',
      note: 'HTTP 占位；完整 Turborepo 见 TURBOREPO-Tooling-TypeScript.md',
    });
    return;
  }

  if (req.method === 'GET' && url === '/api/info') {
    sendJson(res, {
      message: 'Turborepo：任务 pipeline、本地与远程缓存；常与 npm/pnpm/yarn workspaces 组合',
      doc: 'https://turbo.build/repo/docs',
      highlights: [
        {
          title: '官方创建命令',
          detail: 'npx create-turbo@latest（空目录；可选 pnpm 等）。',
        },
        {
          title: '与 Nx 对照',
          detail: 'Nx 偏「图 + 生成器 + 多框架插件」；Turborepo 偏「轻量 pipeline + 缓存」；二者可与本仓库「无根 workspace」模式对照选型。',
        },
      ],
    });
    return;
  }

  if (req.method === 'GET' && (url === '/' || url === '/index.html')) {
    fs.readFile(indexPath, 'utf8', (err, html) => {
      if (err) {
        res.statusCode = 500;
        res.end(String(err));
        return;
      }
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(html);
    });
    return;
  }

  res.statusCode = 404;
  res.end('Not Found');
});

server.listen(port, host, () => {
  console.log(`Turborepo（形态占位）http://${host}:${port}/`);
});
