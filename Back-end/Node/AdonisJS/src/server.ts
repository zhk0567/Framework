import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * 本目录**不是**完整 AdonisJS 应用：全量 CLI 会生成多包目录与 Ace 命令行，
 * 体积与 Node 版本约束不适合与本仓库其它「单目录 npm 即跑」示例完全同构。
 * 此处用 Node 内置 http 对齐 Fastify 等子目录的 `/api/health` 与呈现页路径。
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const indexPath = path.join(publicDir, 'index.html');

const port = Number(process.env.PORT ?? 3015);
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
      service: 'framework-back-end-adonisjs-guide',
      note: 'HTTP 形态占位；完整 AdonisJS 见 ADONISJS-Node-TypeScript.md',
    });
    return;
  }

  if (req.method === 'GET' && url === '/api/info') {
    sendJson(res, {
      message: 'AdonisJS：全功能 MVC、Lucid ORM、认证与 IoC 容器',
      highlights: [
        {
          title: '官方脚手架',
          detail: '在空目录执行 npm create adonisjs@latest，选择 API / Web 等 kit。',
        },
        {
          title: '与本仓库对照',
          detail: '对照 Fastify、NestJS 目录的路由拆分、中间件与配置分层方式。',
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
  console.log(`AdonisJS（形态占位）http://${host}:${port}/`);
});
