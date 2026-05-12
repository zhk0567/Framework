import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * 完整 Waku 为 React Server Components 向的轻量全栈；本仓库不提交其生成树。
 * 此处仅对齐全栈目录惯例：`/` 呈现页与 `/api/health`、`/api/info`。
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const indexPath = path.join(publicDir, 'index.html');

const port = Number(process.env.PORT ?? 3042);
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
      service: 'framework-full-stack-waku-guide',
      note: 'HTTP 形态占位；完整 Waku 见 WAKU-FullStack-TypeScript.md',
    });
    return;
  }

  if (req.method === 'GET' && url === '/api/info') {
    sendJson(res, {
      message: 'Waku：轻量 React 全栈，强调 RSC 与 Vite 开发体验',
      doc: 'https://waku.gg/',
      highlights: [
        {
          title: '官方脚手架',
          detail: 'npm create waku@latest（Node 版本以官方 README 为准，通常需较新 LTS）。',
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
  console.log(`Waku（形态占位）http://${host}:${port}/`);
});
