import type { IncomingMessage, ServerResponse } from 'http';
import { defineConfig } from 'vite';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function unpolyDemoMiddleware() {
  let count = 0;
  let items = ['示例项'];

  return (req: IncomingMessage, res: ServerResponse, next: () => void) => {
    if (req.method !== 'GET') {
      next();
      return;
    }
    const raw = req.url ?? '/';
    const path = raw.split('?')[0] ?? '/';
    if (path !== '/api/unpoly/count' && path !== '/api/unpoly/list') {
      next();
      return;
    }
    const url = new URL(raw, 'http://local');
    if (path === '/api/unpoly/count') {
      count += 1;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(
        `<span id="unpoly-count-wrap"><span id="unpoly-count">${count}</span></span>`,
      );
      return;
    }
    const add = url.searchParams.get('add')?.trim();
    if (add) items = [add, ...items];
    const lis = items.map((x) => `<li>${escapeHtml(x)}</li>`).join('');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(
      `<div id="unpoly-list-slot"><ul id="unpoly-list">${lis}</ul></div>`,
    );
  };
}

const unpolyFragments = (): import('vite').Plugin => ({
  name: 'unpoly-demo-fragments',
  configureServer(server) {
    server.middlewares.use(unpolyDemoMiddleware());
  },
  configurePreviewServer(server) {
    server.middlewares.use(unpolyDemoMiddleware());
  },
});

export default defineConfig({
  plugins: [unpolyFragments()],
  server: { port: 5195 },
  preview: { port: 5195 },
});
