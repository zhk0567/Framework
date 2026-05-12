import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Vercel Serverless Functions 与 AWS Lambda（Node 处理器）常为「导出 handler」模型，
 * 与长驻 Node http 服务不同。此处仅对齐同源 `/api/*` 与呈现页。
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const indexPath = path.join(publicDir, 'index.html');

const port = Number(process.env.PORT ?? 3096);
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
      service: 'framework-back-end-serverless-adapters-guide',
      note: 'HTTP 形态占位；Vercel / Lambda handler 见 SERVERLESS-ADAPTERS-Node-TypeScript.md',
    });
    return;
  }

  if (req.method === 'GET' && url === '/api/info') {
    sendJson(res, {
      message: 'Vercel Serverless 与 AWS Lambda：按请求扩缩、handler 签名与全栈框架（Next/Nuxt 等）常绑定',
      doc: 'https://vercel.com/docs/functions',
      highlights: [
        {
          title: 'AWS Lambda Node',
          detail: 'https://docs.aws.amazon.com/lambda/latest/dg/typescript-handler.html',
        },
        {
          title: '与框架关系',
          detail: 'Next.js `app`/`pages` API、Nuxt server routes 等常编译为各平台函数形态。',
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
  console.log(`Serverless 适配形态（占位）http://${host}:${port}/`);
});
