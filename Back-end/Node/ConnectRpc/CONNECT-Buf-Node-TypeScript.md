# Connect（Buf）+ Fastify

本目录演示 **Buf** 生成 **Protobuf-es + Connect**，在 **Fastify** 上挂载 **Unary** `GreetService.SayHello`，并与 **`GET /api/health`**、呈现页共存。

## 生成代码

修改 **`proto/framework/greet/v1/greet.proto`** 后：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\ConnectRpc'
npm run generate
```

生成物在 **`gen/`**（已纳入仓库，便于离线 `npm install` 后直接 `npm run dev`；若你改了 proto，请重新生成并提交）。

## 调用 Unary（Connect JSON）

```powershell
Invoke-RestMethod -Uri 'http://127.0.0.1:3108/framework.greet.v1.GreetService/SayHello' `
  -Method Post -ContentType 'application/json' -Body '{"name":"Connect"}'
```

## 与 gRPC / gRPC-Web / Envoy 的关系

- **Node Grpc** 子工程：`@grpc/grpc-js` + 独立 **30900** 端口。  
- **Connect**：同一类 IDL（Protobuf）上，简化 **HTTP** 映射与浏览器友好路径；生产可与 **Envoy**、**gRPC-Web** 组合，详见 [Connect 文档](https://connectrpc.com/docs) 与 [Buf](https://buf.build/docs)。

## PHP Eloquent

**Laravel** 子工程已覆盖 **Eloquent** 叙事；若需「仅 ORM + 薄 API」，可在空目录 `composer create-project` 后对照本目录的 **`/api/*` JSON 形状**。
