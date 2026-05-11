import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * 完整 Strapi 为无头 CMS（Admin、内容类型、数据库迁移、插件生态），不适合作为本仓库「轻量并排」子目录提交。
 * 此处仅对齐 `/api/health` 与呈现页，便于端口与联调习惯一致。
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const indexPath = path.join(publicDir, 'index.html');

const port = Number(process.env.PORT ?? 3016);
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
      service: 'framework-back-end-strapi-guide',
      note: 'HTTP 形态占位；完整 Strapi 见 STRAPI-Node-TypeScript.md',
    });
    return;
  }

  if (req.method === 'GET' && url === '/api/info') {
    sendJson(res, {
      message: 'Strapi：无头 CMS、内容类型构建器、REST/GraphQL、角色权限',
      doc: 'https://docs.strapi.io/',
      highlights: [
        {
          title: '官方创建命令',
          detail: 'npx create-strapi-app@latest（需在空目录，准备数据库与较长时间安装）。',
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
  console.log(`Strapi（形态占位）http://${host}:${port}/`);
});
