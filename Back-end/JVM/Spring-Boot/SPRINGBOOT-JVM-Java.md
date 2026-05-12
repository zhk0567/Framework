# Back-end / JVM / Spring Boot

## 框架简介

**Spring Boot** 是 Pivotal（现 Broadcom 生态）推出的 **约定优于配置** 运行时：通过 **起步依赖（starter）** 聚合 Servlet 容器、Jackson、Spring MVC 等，用 **`@SpringBootApplication`** 一键启动。是 **Java 企业应用与微服务** 的事实标准之一，与 **Spring Cloud**、**Spring Data** 等形成全家桶。

- 官方文档：<https://spring.io/projects/spring-boot>

## 在本仓库中的角色

**Maven** 单模块；**`spring-boot-starter-web`**；**`GET /api/health`**、**`GET /api/info`**；**`src/main/resources/static/index.html`** 为呈现页。默认 **http://127.0.0.1:3070/**

## 环境要求

- **JDK 17+**
- **Apache Maven 3.9+**（已加入 `PATH`）

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\JVM\Spring-Boot'
mvn -q spring-boot:run
```

浏览器打开 **http://127.0.0.1:3070/**

## 与仓库内其它后端对照

- **NestJS**：分层与 DI 叙事相近；对照 **Java 注解** 与 **TypeScript 装饰器**。  
- **Go Gin**：对照 **无容器** 与 **嵌入式 Servlet 容器** 的启动模型。
