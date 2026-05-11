# Back-end / Node / Fastify

## 框架简介

**Fastify** 是专注于**高性能**的 Node.js Web 框架：默认集成 **Pino** 日志、基于 **JSON Schema** 的请求/响应校验与序列化，并以 **插件（plugin）** 与 **装饰器式封装域** 组织路由与中间件。由 OpenJS Foundation 孵化路线相关社区维护，在微服务与 API Gateway 场景中常见。

- 官方网站：<https://fastify.dev/>
- 文档：<https://fastify.dev/docs/latest/>

## 在本仓库中的角色

本目录为**独立 Node 工程**：依赖与锁文件仅存在于 `Back-end/Node/Fastify`，请勿在仓库根目录执行 `npm install`。示例展示插件、`fastify-plugin` 提升作用域、Schema、生命周期钩子与静态资源同机托管。

## 这个子项目想说明什么（Fastify 特点）

| 能力 | 在本示例中的位置 |
|------|------------------|
| **插件 `register` 与封装域** | `src/routes/feature-box.ts`：`decorateReply` 仅在内层子树可用 |
| **`fastify-plugin`（`fp`）提升作用域** | `src/plugins/trace-lifecycle.ts`：全局钩子与 `request.demoTrace` 对所有路由可见 |
| **JSON Schema 校验 / 响应序列化** | `src/routes/items.ts`、`src/routes/health.ts`、`src/routes/demo.ts` 的 `schema` 字段 |
| **生命周期钩子顺序** | 同上 trace 插件 + `demo` 子树中的 `preSerialization`；完整尾部见 Pino 日志 |
| **静态资源与 API 同机** | `src/app.ts` 中 `@fastify/static` 托管 `public/`，API 先注册避免抢路由 |
| **CORS** | `@fastify/cors`，便于其他端口上的前端联调 |
| **高性能结构化日志** | Fastify 内置 Pino；`onResponse` 打印耗时与轨迹 |

## 环境要求

- Node.js **20+**（与 `package.json` 中 `engines` 一致）

## 安装与运行（Windows PowerShell）

请先进入本目录再执行命令：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Fastify'
npm install
npm run dev
```

启动后终端会打印监听地址。用浏览器打开：

- **呈现页（静态 + 调用 API）**：`http://127.0.0.1:3000/` 或 `http://127.0.0.1:3000/index.html`

若端口被占用，可临时指定（勿与 Nest `3001`、各 Go 示例 `3002`–`3010`、其它 Node 子目录 `3011`–`3019` 冲突；端口表见仓库根目录 [README.md](../../../README.md)）：

```powershell
$env:PORT = '3020'
npm run dev
```

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run dev` | `tsx watch` 热重载开发 |
| `npm start` | 单次运行（无 watch） |
| `npm run typecheck` | `tsc --noEmit` 类型检查 |

## 环境变量（可选）

复制 `.env.example` 为 `.env` 并按需修改；也可直接在 PowerShell 中设置 `HOST`、`PORT`、`LOG_LEVEL`。

## 主要 API 一览

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/health` | 健康检查（带 response schema） |
| GET | `/api/demo/lifecycle` | 钩子轨迹快照 + Fastify 要点文案 |
| GET | `/api/items/` | 内存列表（带 response schema） |
| POST | `/api/items/` | 创建条目（body schema：`title`） |
| GET | `/api/box/inner` | 封装盒内路由 + `x-feature-box` 响应头 |

## 目录结构

```
Fastify/
  FASTIFY-Node-TypeScript.md   # 本目录说明（按栈命名，便于检索）
  public/index.html            # 呈现页（静态）
  src/
    app.ts                     # 组装插件与路由顺序
    server.ts                  # 监听入口
    plugins/
      trace-lifecycle.ts
    routes/
      health.ts
      demo.ts
      items.ts
      feature-box.ts
    types/
      fastify.d.ts             # request 字段类型扩充
```

## 与前端联调（可选）

在 Vite 子项目中为 `dev` 配置 `server.proxy`，将 `/api` 代理到本服务地址（例如 `http://127.0.0.1:3000`），即可在 React/Vue/Svelte 开发服务器中同源访问 API。
