import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * 生产环境 Apollo Router + Federation v2 子图需独立二进制与 SDL；此处仅 HTTP 占位与文档链。
 * 与本仓库 graphql-tools **stitch** 教学向对照见 GraphQLFederation 子目录。
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const indexPath = path.join(publicDir, 'index.html');

const port = Number(process.env.PORT ?? 3123);
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
      service: 'framework-back-end-apollo-router-guide',
      note: 'HTTP 占位；Router + Fed v2 见 APOLLOROUTER-Node-TypeScript.md',
    });
    return;
  }

  if (req.method === 'GET' && url === '/api/info') {
    sendJson(res, {
      message:
        'Apollo Router：GraphQL Federation 网关、查询规划、子图路由与可观测性（与 stitch 语义不同）',
      doc: 'https://www.apollographql.com/docs/graphos/schema-design/federated-schemas/overview',
      router: 'https://www.apollographql.com/docs/router',
      highlights: [
        {
          title: '与 GraphQLFederation 子目录对照',
          detail:
            'Back-end/Node/GraphQLFederation 使用 Mercurius + graphql-tools stitch 合并子图；生产联邦常选 Router + @link v2 SDL 子图。',
        },
        {
          title: '本地起 Router',
          detail: '在空目录按官方文档拉取 router 镜像或二进制，并配置 subgraph URL 与 supergraph SDL。',
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
  console.log(`Apollo Router（形态占位）http://${host}:${port}/`);
});
