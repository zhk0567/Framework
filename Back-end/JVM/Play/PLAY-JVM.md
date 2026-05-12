# Back-end / JVM / Play（形态占位）

## 框架简介

**Play Framework** 是面向 **Scala / Java** 的全栈 Web 框架：常见组合为 **sbt** 构建、**Twirl** 模板、**路由 DSL** 与 **JSON** 插件；与 **Akka / Pekko** 生态在历史上关联紧密。

- 官方文档：<https://www.playframework.com/documentation>

## 在本仓库中的角色

本目录**不提交** `sbt new` 生成的完整 Play 工程树；仅提供与 **Node / Go** 后端一致的 **`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页**（**JDK `com.sun.net.httpserver.HttpServer`**），默认 **http://127.0.0.1:3075/**。与 [`Back-end/Go/Buffalo`](../../Go/Buffalo) 等「**HTTP 占位 + 官方 CLI 说明**」策略一致。

## 环境要求

- **JDK 17+**
- **Apache Maven 3.9+**（用于 `exec:java`；亦可自行 `javac` / `java`）

## 安装与运行（Windows PowerShell）

在 **`Play` 目录**下执行（以便读取 `public/index.html`）：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\JVM\Play'
mvn -q compile exec:java
```

浏览器打开 **http://127.0.0.1:3075/**

## 生成完整 Play 应用（官方模板）

需本机安装 **sbt** 与 **JDK**，在**空目录**中执行（示例为 Scala seed，版本以官方模板为准）：

```powershell
sbt new playframework/play-scala-seed.g8
```

生成后在其工程目录内按模板 README 运行；再将路由与 JSON 响应对齐到本仓库的 **`/api/health`**、**`/api/info`** 约定即可对照学习。

## 与仓库内其它后端对照

- **Spring Boot / Ktor**：Play 偏 **全栈 + sbt 交付**；本仓库仅占位 **HTTP + 静态页**。  
- **Go Buffalo**：均为「**仓库内不占位完整生成树**」；对照 **JVM / Go** 工具链差异。
