# Back-end / Node / NestJS

## 框架简介

**NestJS** 是受 Angular 启发的 **Node.js 服务端框架**：以 **TypeScript** 为一等语言，提供 **模块化（Module）**、**依赖注入（DI）**、**装饰器式路由与守卫**、**管道（Pipe）校验**、**拦截器** 等企业级结构。底层 HTTP 适配默认基于 **Express** 或 **Fastify**（可切换），并常与 **TypeORM / Prisma**、**Passport**、**Swagger** 等集成。

- 官方网站：<https://nestjs.com/>
- 文档：<https://docs.nestjs.com/>

## 在本仓库中的角色

本目录为**独立 Node 工程**：依赖与锁文件仅存在于 `Back-end/Node/NestJS`，请勿在仓库根目录执行 `npm install`。示例覆盖模块拆分、DTO 校验、拦截器、Swagger 与静态呈现页。

## 与其他后端示例的关系

- **默认端口 `3001`**，便于与 `Back-end/Node/Fastify`（默认 `3000`）、`Back-end/Go/*`（默认 `3002`–`3010`）、其它 `Back-end/Node/*`（默认 `3011`–`3019`）同时运行；端口总览见仓库根目录 [README.md](../../../README.md)。  
- **路由形状对齐**：`/api/health`、`/api/demo/lifecycle`、`/api/items`、`/api/box/inner`，便于同一套 `fetch` 心智模型对比多种框架。

## 这个子项目想说明什么（Nest 特点）

| 能力 | 在本示例中的位置 |
|------|------------------|
| **模块（Module）拆分** | `src/*/*.module.ts`，在 `app.module.ts` 聚合 |
| **依赖注入（DI）** | `ItemsService` 注入 `ItemsController` |
| **DTO + 全局 ValidationPipe** | `src/items/dto/create-item.dto.ts` + `src/main.ts` |
| **拦截器（全局 / 路由级）** | `src/common/logging.interceptor.ts`；`DemoLifecycleInterceptor`、`StampBoxInterceptor` |
| **配置模块** | `@nestjs/config` 全局 `ConfigModule.forRoot` |
| **Swagger / OpenAPI** | `src/main.ts` 中 `DocumentBuilder`；浏览器访问 `/docs` |
| **静态呈现页** | `public/index.html`，由 `AppController` 在 `GET /` 返回 |

## 环境要求

- Node.js **20+**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\NestJS'
npm install
npm run start:dev
```

- **呈现页**：`http://127.0.0.1:3001/`  
- **Swagger UI**：`http://127.0.0.1:3001/docs`

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run start:dev` | 监听文件变更，开发常用 |
| `npm run start` | 单次启动（无 watch） |
| `npm run build` | 编译到 `dist/` |
| `npm run start:prod` | 运行编译产物（需先 `npm run build`） |

## 主要 API 一览

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/` | 返回 `public/index.html`（呈现页） |
| GET | `/docs` | Swagger UI |
| GET | `/api/health` | 健康检查 |
| GET | `/api/demo/lifecycle` | 管道说明 + 路由级拦截器响应头 |
| GET | `/api/items` | 内存列表 |
| POST | `/api/items` | 创建条目（`CreateItemDto` 校验） |
| GET | `/api/box/inner` | 盒内路由 + `x-feature-box` 响应头 |

## 目录结构（摘要）

```
NestJS/
  NESTJS-Node-TypeScript.md   # 本目录说明（按栈命名，便于检索）
  public/index.html
  src/
    main.ts
    app.module.ts
    app.controller.ts
    common/logging.interceptor.ts
    health/
    demo/
    items/
    feature-box/
```

## 与前端联调（可选）

在 Vite 子项目中将 `/api` 代理到 `http://127.0.0.1:3001`（注意端口与其他后端区分），即可在开发服务器中访问上述路径。
