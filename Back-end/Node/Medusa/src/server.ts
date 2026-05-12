import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * 完整 Medusa 为无头电商（订单流、插件、Admin、数据库与工作区），不适合作为本仓库「轻量并排」子目录提交。
 * 此处仅对齐 `/api/health` 与呈现页，便于端口与联调习惯一致。
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const indexPath = path.join(publicDir, 'index.html');

const port = Number(process.env.PORT ?? 3115);
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
      service: 'framework-back-end-medusa-guide',
      note: 'HTTP 形态占位；完整 Medusa 见 MEDUSA-Node-TypeScript.md',
    });
    return;
  }

  if (req.method === 'GET' && url === '/api/info') {
    sendJson(res, {
      message: 'Medusa：Node 无头电商、插件与工作区、REST/Store API',
      doc: 'https://docs.medusajs.com/',
      highlights: [
        {
          title: '官方创建命令',
          detail: 'npx create-medusa-app@latest（需在空目录，准备 PostgreSQL 等依赖）。',
        },
        {
          title: '与本仓库对照',
          detail: '订单与目录边界可与 Fastify/NestJS REST 子工程对照；内容侧可与 Strapi、Directus、Payload、Keystone 占位并列打开端口。',
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
  console.log(`Medusa（形态占位）http://${host}:${port}/`);
});
