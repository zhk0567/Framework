import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * 完整 Supabase Edge Functions 在 Deno 运行时与 Supabase CLI 中部署。
 * 此处仅对齐 `/api/health` 与呈现页，便于与本仓库其它 Node 后端对照 HTTP 形态。
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const indexPath = path.join(publicDir, 'index.html');

const port = Number(process.env.PORT ?? 3094);
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
      service: 'framework-back-end-supabase-edge-guide',
      note: 'HTTP 形态占位；Edge Functions 为 Deno，见 SUPABASE-EDGE-Node-TypeScript.md',
    });
    return;
  }

  if (req.method === 'GET' && url === '/api/info') {
    sendJson(res, {
      message: 'Supabase Edge Functions：靠近用户的 Deno 函数，常与 Auth、Storage、DB 钩子配合',
      doc: 'https://supabase.com/docs/guides/functions',
      highlights: [
        {
          title: '本地与部署',
          detail: '使用 Supabase CLI：`supabase functions new` / `supabase functions serve`。',
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
  console.log(`Supabase Edge（形态占位）http://${host}:${port}/`);
});
