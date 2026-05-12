# Back-end / JVM / Ktor

## 框架简介

**Ktor** 是 **JetBrains** 推出的 **Kotlin** 异步 Web 框架：以 **Application Pipeline**、**Routing**、**Content negotiation** 与 **可插拔引擎**（如 **Netty**）组织服务，常与 **协程** 一起使用。

- 官方文档：<https://ktor.io/docs/>

## 在本仓库中的角色

**Maven** 单模块（**Kotlin** 源码）；**`ktor-server-netty-jvm`** + **Jackson** 序列化；**`GET /api/health`**、**`GET /api/info`**；**`src/main/resources/static/index.html`** 为呈现页。默认 **http://127.0.0.1:3074/**

## 环境要求

- **JDK 17+**
- **Apache Maven 3.9+**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\JVM\Ktor'
mvn -q compile exec:java
```

浏览器打开 **http://127.0.0.1:3074/**

## 与仓库内其它后端对照

- **Spring Boot**：对照 **注解式 MVC** 与 **Kotlin DSL / Pipeline** 风格。  
- **Vert.x**：均可挂 **Netty**；Ktor 更偏 **应用框架层** 的 API 设计。
