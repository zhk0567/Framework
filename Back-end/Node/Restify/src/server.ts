import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import restify from 'restify';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const server = restify.createServer({ name: 'framework-back-end-restify' });

server.get('/api/health', (_req, res, next) => {
  res.json({ ok: true, service: 'framework-back-end-restify' });
  return next();
});

server.get('/api/info', (_req, res, next) => {
  res.json({
    message: 'Restify 最小演示：面向 REST API 的链式服务',
    highlights: [
      { title: 'REST 专注', detail: '常见场景为版本化 API、可观测性与规范化错误体。' },
      { title: '静态页', detail: '本示例对 / 与 /index.html 直接读文件，避免额外静态插件版本差异。' },
    ],
  });
  return next();
});

function sendHtml(_req: restify.Request, res: restify.Response, next: restify.Next) {
  const file = path.join(publicDir, 'index.html');
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      res.status(500);
      res.send(String(err));
      return next(false);
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(data);
    return next();
  });
}

server.get('/', sendHtml);
server.get('/index.html', sendHtml);

const port = Number(process.env.PORT ?? 3014);
const host = process.env.HOST ?? '127.0.0.1';

server.listen(port, host, () => {
  console.log(`Restify 演示 http://${host}:${port}/`);
});
