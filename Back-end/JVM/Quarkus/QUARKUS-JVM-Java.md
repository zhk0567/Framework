# Back-end / JVM / Quarkus

## 框架简介

**Quarkus** 是面向 **Kubernetes / 云原生** 的 Java 栈：强调 **启动快、内存省**，与 **GraalVM 原生镜像**、**Dev UI**、**Supersonic Subatomic Java** 等叙事绑定；HTTP 层常见为 **JAX-RS（RESTEasy Reactive）** 与 **Vert.x** 集成。

- 官方文档：<https://quarkus.io/guides/>

## 在本仓库中的角色

**Maven** 单模块；**`quarkus-resteasy-reactive-jackson`**；**`GET /api/health`**、**`GET /api/info`**；**`src/main/resources/META-INF/resources/index.html`** 为呈现页。默认 **http://127.0.0.1:3071/**

## 环境要求

- **JDK 17+**
- **Apache Maven 3.9+**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\JVM\Quarkus'
mvn -q quarkus:dev
```

浏览器打开 **http://127.0.0.1:3071/**（开发模式；生产可 `mvn package` 后运行 `java -jar target/quarkus-app/quarkus-run.jar`）。

## 与仓库内其它后端对照

- **Spring Boot**：对照 **Servlet 生态** 与 **Reactive / 云原生默认假设** 的差异。  
- **Micronaut**：均为 **编译期元数据 / AOT** 叙事较强的 JVM 框架，可对照 **扩展模型与 CLI**。
