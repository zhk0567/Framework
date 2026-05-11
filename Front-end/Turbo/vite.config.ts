import type { IncomingMessage, ServerResponse } from 'http';
import { defineConfig } from 'vite';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function turboDemoMiddleware() {
  let count = 0;
  let items = ['示例项'];

  return (req: IncomingMessage, res: ServerResponse, next: () => void) => {
    if (req.method !== 'GET') {
      next();
      return;
    }
    const raw = req.url ?? '/';
    const path = raw.split('?')[0] ?? '/';
    if (path !== '/api/turbo/count' && path !== '/api/turbo/list') {
      next();
      return;
    }
    const url = new URL(raw, 'http://local');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (path === '/api/turbo/count') {
      if (url.searchParams.get('inc') === '1') count += 1;
      res.end(`<turbo-frame id="turbo-count">
  <p class="lead">计数：${count}</p>
  <div class="row">
    <a href="/api/turbo/count?inc=1" data-turbo-frame="turbo-count">+1（Turbo Frame）</a>
  </div>
</turbo-frame>`);
      return;
    }
    const add = url.searchParams.get('add')?.trim();
    if (add) items = [add, ...items];
    const lis = items.map((x) => `<li>${escapeHtml(x)}</li>`).join('');
    res.end(`<turbo-frame id="turbo-list">
  <form class="row" method="get" action="/api/turbo/list" data-turbo-frame="turbo-list">
    <input type="text" name="add" placeholder="新条目" />
    <button type="submit" class="secondary">添加</button>
  </form>
  <ul>${lis}</ul>
</turbo-frame>`);
  };
}

const turboFragments = (): import('vite').Plugin => ({
  name: 'turbo-demo-fragments',
  configureServer(server) {
    server.middlewares.use(turboDemoMiddleware());
  },
  configurePreviewServer(server) {
    server.middlewares.use(turboDemoMiddleware());
  },
});

export default defineConfig({
  plugins: [turboFragments()],
  server: { port: 5196 },
  preview: { port: 5196 },
});
