import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * 完整 Keystone 为 Admin + GraphQL + Prisma 向的 Headless CMS，版本与维护策略请以官方为准。
 * 此处仅对齐 `/api/health` 与呈现页，便于端口与联调习惯一致。
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const indexPath = path.join(publicDir, 'index.html');

const port = Number(process.env.PORT ?? 3117);
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
      service: 'framework-back-end-keystone-guide',
      note: 'HTTP 形态占位；完整 Keystone 见 KEYSTONE-Node-TypeScript.md',
    });
    return;
  }

  if (req.method === 'GET' && url === '/api/info') {
    sendJson(res, {
      message: 'Keystone：Admin UI、GraphQL API、Prisma 数据层（版本与升级见官方）',
      doc: 'https://keystonejs.com/docs',
      highlights: [
        {
          title: '官方创建命令',
          detail: 'npm create keystone-app@latest（需在空目录，按向导配置）。',
        },
        {
          title: '与本仓库对照',
          detail: 'GraphQL 形态可与 Back-end/Node/GraphQL（Mercurius）对照；内容与权限可与 Strapi、Directus、Payload 占位并列。',
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
  console.log(`Keystone（形态占位）http://${host}:${port}/`);
});
