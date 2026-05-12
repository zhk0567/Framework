import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** 完整 Nx 为 Monorepo 任务图与生成器；此处仅 HTTP 占位与文档链。 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const indexPath = path.join(publicDir, 'index.html');

const port = Number(process.env.PORT ?? 3120);
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
      service: 'framework-tooling-nx-guide',
      note: 'HTTP 占位；完整 Nx 见 NX-Tooling-TypeScript.md',
    });
    return;
  }

  if (req.method === 'GET' && url === '/api/info') {
    sendJson(res, {
      message: 'Nx：任务图、本地/远程缓存、生成器、与 Angular/React 等插件生态',
      doc: 'https://nx.dev/docs',
      highlights: [
        {
          title: '官方创建命令',
          detail: 'npx create-nx-workspace@latest（空目录；按需选择预设与包管理器）。',
        },
        {
          title: '与本仓库关系',
          detail: '本仓库刻意保持「每框架一目录」而非单一 Nx workspace；对照学习时可对比 Nx 的 graph 与本仓库多目录并行打开方式。',
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
  console.log(`Nx（形态占位）http://${host}:${port}/`);
});
