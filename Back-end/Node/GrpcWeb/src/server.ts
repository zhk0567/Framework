import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * gRPC-Web 需 Envoy/grpcwebproxy 等将浏览器 grpc-web 转为后端 gRPC；此处仅 HTTP 占位与文档链。
 * 与 Back-end/Node/Grpc 的 Node Unary + REST 对照阅读。
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const indexPath = path.join(publicDir, 'index.html');

const port = Number(process.env.PORT ?? 3124);
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
      service: 'framework-back-end-grpc-web-guide',
      note: 'HTTP 占位；gRPC-Web + Envoy 见 GRPCWEB-Node-TypeScript.md',
    });
    return;
  }

  if (req.method === 'GET' && url === '/api/info') {
    sendJson(res, {
      message:
        'gRPC-Web：浏览器通过 HTTP/1.1 或 HTTP/2 调用类 gRPC 接口，通常经 Envoy 转标准 gRPC 至后端',
      doc: 'https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-WEB.md',
      envoy: 'https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/grpc_web_filter',
      highlights: [
        {
          title: '与 Grpc 子目录关系',
          detail:
            'Back-end/Node/Grpc 为 Node @grpc/grpc-js Unary + Express 呈现页；浏览器 grpc-web 需网关与本节文档中的链路说明。',
        },
        {
          title: '典型拓扑',
          detail: 'Browser → grpc-web-json 或 grpc-web-text → Envoy grpc_web filter → gRPC server（Go/Java/Node 等）。',
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
  console.log(`gRPC-Web / Envoy（形态占位）http://${host}:${port}/`);
});
