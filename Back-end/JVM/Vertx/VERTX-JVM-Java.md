# Back-end / JVM / Vert.x

## 框架简介

**Vert.x** 是 **Eclipse 基金会** 下的 **响应式应用平台**：核心为 **事件循环** 与 **非阻塞 API**；**`vertx-web`** 提供路由、会话、静态资源等；还可组合 **Event Bus、数据库客户端、消息** 等模块。

- 官方文档：<https://vertx.io/docs/>

## 在本仓库中的角色

**Maven** 单模块；**`vertx-core` + `vertx-web`**；**`GET /api/health`**、**`GET /api/info`**；**`src/main/resources/webroot/index.html`** 为呈现页（`StaticHandler`）。默认 **http://127.0.0.1:3073/**

## 环境要求

- **JDK 17+**
- **Apache Maven 3.9+**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\JVM\Vertx'
mvn -q compile exec:java
```

浏览器打开 **http://127.0.0.1:3073/**

## 与仓库内其它后端对照

- **Quarkus**：Quarkus HTTP 层常与 **Vert.x** 深度集成；本示例为 **纯 Vert.x Router**，便于只看路由与静态资源挂载。  
- **Node Fastify**：对照 **回调/链式 Handler** 与 **中间件顺序**（本例在 API 之后挂 `StaticHandler`）。
