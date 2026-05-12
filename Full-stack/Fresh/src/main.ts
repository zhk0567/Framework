/**
 * 完整 Fresh 为 Deno 官方全栈（Islands、文件路由等）；本仓库不提交 `fresh.config` 生成树。
 * 此处用 Deno.serve 对齐全栈目录惯例：`/` 呈现页与 `/api/health`、`/api/info`。
 */
const indexPath = new URL('../public/index.html', import.meta.url);
const INDEX_HTML = await Deno.readTextFile(indexPath);

const port = Number(Deno.env.get('PORT') ?? '3041');
const host = Deno.env.get('HOST') ?? '127.0.0.1';

function json(body: unknown): Response {
  return new Response(JSON.stringify(body), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

Deno.serve({ port, hostname: host }, (req) => {
  const pathname = new URL(req.url).pathname.split('?')[0] ?? '/';

  if (req.method === 'GET' && pathname === '/api/health') {
    return json({
      ok: true,
      service: 'framework-full-stack-fresh-guide',
      note: 'HTTP 形态占位；完整 Fresh 见 FRESH-FullStack-TypeScript.md',
    });
  }

  if (req.method === 'GET' && pathname === '/api/info') {
    return json({
      message: 'Fresh：Deno 官方全栈框架（Islands、Preact 等）',
      doc: 'https://fresh.deno.dev/docs/getting-started',
      highlights: [
        {
          title: '官方初始化',
          detail: 'deno run -Ar jsr:@fresh/init（或文档中的等价命令；需在已安装 Deno 的环境执行）。',
        },
      ],
    });
  }

  if (req.method === 'GET' && (pathname === '/' || pathname === '/index.html')) {
    return new Response(INDEX_HTML, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }

  return new Response('Not Found', { status: 404 });
});

console.log(`Fresh（形态占位）http://${host}:${port}/`);
