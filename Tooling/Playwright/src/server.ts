import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** 完整 Playwright 为浏览器 E2E；此处仅 HTTP 占位与 init 文档链（避免在本仓提交浏览器二进制）。 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const indexPath = path.join(publicDir, 'index.html');

const port = Number(process.env.PORT ?? 3122);
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
      service: 'framework-tooling-playwright-guide',
      note: 'HTTP 占位；完整 Playwright 见 PLAYWRIGHT-Tooling-TypeScript.md',
    });
    return;
  }

  if (req.method === 'GET' && url === '/api/info') {
    sendJson(res, {
      message: 'Playwright：跨浏览器 E2E、trace、Codegen、CI 矩阵',
      doc: 'https://playwright.dev/docs/intro',
      highlights: [
        {
          title: '官方初始化',
          detail: 'npm init playwright@latest（需下载浏览器；建议在仓库外或 CI 缓存目录执行）。',
        },
        {
          title: '与 Vitest 对照',
          detail: 'Vitest 偏单元/组件速度与 Vite 集成；Playwright 偏真实浏览器与用户流；本仓库 [`Tooling/Vitest`](../Vitest) 提供可跑的 `vitest run` 最小例。',
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
  console.log(`Playwright（形态占位）http://${host}:${port}/`);
});
