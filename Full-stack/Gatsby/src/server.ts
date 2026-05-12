import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * 完整 Gatsby 为 GraphQL 数据层 + 页面生成与插件生态；本仓库不提交其生成树。
 * 此处仅对齐全栈目录惯例：`/` 呈现页与 `/api/health`、`/api/info`。
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const indexPath = path.join(publicDir, 'index.html');

const port = Number(process.env.PORT ?? 3040);
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
      service: 'framework-full-stack-gatsby-guide',
      note: 'HTTP 形态占位；完整 Gatsby 见 GATSBY-FullStack-TypeScript.md',
    });
    return;
  }

  if (req.method === 'GET' && url === '/api/info') {
    sendJson(res, {
      message: 'Gatsby：GraphQL 数据层 + React 页面，静态/混合站点常见选型',
      doc: 'https://www.gatsbyjs.com/docs/',
      highlights: [
        {
          title: '官方 CLI',
          detail: 'npm init gatsby 或 gatsby new（需按官方文档选择模板与 Node 版本）。',
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
  console.log(`Gatsby（形态占位）http://${host}:${port}/`);
});
