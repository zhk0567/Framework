import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import cors from 'cors';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const protoPath = path.join(__dirname, '..', 'proto', 'demo.proto');

const packageDefinition = protoLoader.loadSync(protoPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const demoImpl: grpc.UntypedServiceImplementation = {
  Health: (_call: grpc.ServerUnaryCall<unknown, unknown>, cb: grpc.sendUnaryData<unknown>) => {
    cb(null, { ok: true, service: 'framework-back-end-grpc' });
  },
  Info: (_call: grpc.ServerUnaryCall<unknown, unknown>, cb: grpc.sendUnaryData<unknown>) => {
    cb(null, {
      message:
        'gRPC：HTTP/2 上的二进制 RPC；本示例使用 Node @grpc/grpc-js Unary，与 REST 呈现页同进程双端口。',
      highlights: [
        { title: 'Unary', detail: '一问一答；流式为 client/server/bidi streaming。' },
        { title: '与 Connect 对照', detail: 'Connect 可在同一端口兼容 gRPC-web 与 JSON；本目录为原生 gRPC。' },
      ],
    });
  },
};

const grpcServer = new grpc.Server();
const pkg = grpc.loadPackageDefinition(packageDefinition) as Record<string, unknown>;
const apiV1 =
  (pkg.api as { v1: { Demo: { service: grpc.ServiceDefinition } } } | undefined)?.v1 ??
  (pkg['api.v1'] as { Demo: { service: grpc.ServiceDefinition } } | undefined);
if (!apiV1?.Demo?.service) {
  throw new Error('proto: expected package api.v1 service Demo');
}
grpcServer.addService(apiV1.Demo.service, demoImpl);

const httpPort = Number(process.env.PORT ?? 3090);
const grpcPort = Number(process.env.GRPC_PORT ?? 30900);
const host = process.env.HOST ?? '127.0.0.1';

grpcServer.bindAsync(`${host}:${grpcPort}`, grpc.ServerCredentials.createInsecure(), (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  grpcServer.start();
  console.log(`gRPC Demo 监听 grpc://${host}:${grpcPort} (package api.v1.Demo)`);
});

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'framework-back-end-grpc' });
});

app.get('/api/info', (_req, res) => {
  res.json({
    message:
      'gRPC：HTTP/2 上的二进制 RPC；本示例使用 Node @grpc/grpc-js Unary，与 REST 呈现页同进程双端口。',
    highlights: [
      { title: 'Unary', detail: '一问一答；流式为 client/server/bidi streaming。' },
      { title: '与 Connect 对照', detail: 'Connect 可在同一端口兼容 gRPC-web 与 JSON；本目录为原生 gRPC。' },
    ],
  });
});

app.use(express.static(publicDir));

app.listen(httpPort, host, () => {
  console.log(`gRPC 呈现页 http://${host}:${httpPort}/`);
});
