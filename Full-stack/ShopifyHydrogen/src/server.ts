import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * 完整 Hydrogen 依赖 Shopify Storefront API、Oxygen 部署与 Remix 生态；本仓库不提交其生成树。
 * 此处仅对齐全栈目录惯例：`/` 呈现页与 `/api/health`、`/api/info`。
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const indexPath = path.join(publicDir, 'index.html');

const port = Number(process.env.PORT ?? 3043);
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
      service: 'framework-full-stack-shopify-hydrogen-guide',
      note: 'HTTP 形态占位；完整 Hydrogen 见 SHOPIFY-HYDROGEN-FullStack-TypeScript.md',
    });
    return;
  }

  if (req.method === 'GET' && url === '/api/info') {
    sendJson(res, {
      message:
        'Shopify Hydrogen：无头电商 + Remix 向全栈，需 Storefront API 与 Shopify 店铺上下文',
      doc: 'https://shopify.dev/docs/custom-storefronts/hydrogen',
      highlights: [
        {
          title: '官方 CLI',
          detail: 'npm create @shopify/hydrogen@latest（需 Node、Shopify CLI 与店铺/令牌按文档配置）。',
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
  console.log(`Shopify Hydrogen（形态占位）http://${host}:${port}/`);
});
