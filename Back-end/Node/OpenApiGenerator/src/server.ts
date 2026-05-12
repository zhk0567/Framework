import cors from 'cors';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'framework-back-end-openapi-generator-guide',
    note: 'HTTP 形态占位；多语言代码生成请用 openapi-generator-cli（见 OPENAPIGEN-Node-TypeScript.md）。',
  });
});

app.get('/api/info', (_req, res) => {
  res.json({
    message:
      'OpenAPI Generator：从 OpenAPI 3 规范生成 **服务端桩、客户端 SDK、文档** 等；与 go-swagger、oapi-codegen 同属工具链。',
    highlights: [
      { title: 'CLI', detail: 'npx @openapitools/openapi-generator-cli generate …' },
      { title: '与 oapi-codegen 对照', detail: '本仓库 Go 侧已有 OapiCodegen 子工程；本目录占位 Node 侧 CLI 叙事。' },
    ],
  });
});

app.use(express.static(publicDir));

const port = Number(process.env.PORT ?? 3092);
const host = process.env.HOST ?? '127.0.0.1';

app.listen(port, host, () => {
  console.log(`OpenAPI Generator（形态占位）http://${host}:${port}/`);
});
