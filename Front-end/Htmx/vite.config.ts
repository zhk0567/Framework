import type { IncomingMessage, ServerResponse } from 'http';
import { defineConfig } from 'vite';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** 开发态内存状态，演示 htmx 通过 HTTP 片段刷新 DOM（非客户端路由）。 */
function htmxDemoMiddleware() {
  let count = 0;
  let items = ['示例项'];

  return (req: IncomingMessage, res: ServerResponse, next: () => void) => {
    if (req.method !== 'GET') {
      next();
      return;
    }
    const raw = req.url ?? '/';
    const path = raw.split('?')[0] ?? '/';
    if (path !== '/api/htmx/count' && path !== '/api/htmx/list') {
      next();
      return;
    }
    const url = new URL(raw, 'http://local');
    if (path === '/api/htmx/count') {
      count += 1;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(`<span id="htmx-count">${count}</span>`);
      return;
    }
    const add = url.searchParams.get('add')?.trim();
    if (add) items = [add, ...items];
    const lis = items.map((x) => `<li>${escapeHtml(x)}</li>`).join('');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(lis);
  };
}

const htmxPlugin = (): import('vite').Plugin => ({
  name: 'htmx-demo-fragments',
  configureServer(server) {
    server.middlewares.use(htmxDemoMiddleware());
  },
  configurePreviewServer(server) {
    server.middlewares.use(htmxDemoMiddleware());
  },
});

export default defineConfig({
  plugins: [htmxPlugin()],
  server: { port: 5194 },
  preview: { port: 5194 },
});
