import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * 完整 Payload 为 TypeScript Headless CMS（Admin、字段类型、Hooks、数据库），不适合作为本仓库「轻量并排」子目录提交。
 * 此处仅对齐 `/api/health` 与呈现页，便于端口与联调习惯一致。
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const indexPath = path.join(publicDir, 'index.html');

const port = Number(process.env.PORT ?? 3116);
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
      service: 'framework-back-end-payload-guide',
      note: 'HTTP 形态占位；完整 Payload 见 PAYLOAD-Node-TypeScript.md',
    });
    return;
  }

  if (req.method === 'GET' && url === '/api/info') {
    sendJson(res, {
      message: 'Payload CMS：TypeScript 优先的无头 CMS、字段与访问控制',
      doc: 'https://payloadcms.com/docs',
      highlights: [
        {
          title: '官方创建命令',
          detail: 'npx create-payload-app@latest（需在空目录，按向导选择数据库等）。',
        },
        {
          title: '与本仓库对照',
          detail: '可与 Strapi、Directus 占位及 Keystone 并列对照 Admin 与 API 边界。',
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
  console.log(`Payload CMS（形态占位）http://${host}:${port}/`);
});
