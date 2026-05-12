# Back-end / JVM / Micronaut

## 框架简介

**Micronaut** 强调 **编译期依赖注入与 AOT 友好**：通过 **注解处理器** 在构建阶段生成框架元数据，降低运行时反射与类路径扫描成本，常与 **GraalVM 原生镜像**、**微服务** 场景一起讨论。

- 官方文档：<https://docs.micronaut.io/>

## 在本仓库中的角色

**Maven** 单模块（**`micronaut-parent`**）；**Netty HTTP**；**`GET /api/health`**、**`GET /api/info`**；**`src/main/resources/public/index.html`** 为呈现页。默认 **http://127.0.0.1:3072/**

## 环境要求

- **JDK 17+**
- **Apache Maven 3.9+**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\JVM\Micronaut'
mvn -q mn:run
```

浏览器打开 **http://127.0.0.1:3072/**

## 与仓库内其它后端对照

- **Spring Boot**：对照 **运行时组件扫描** 与 **编译期生成元数据** 的取舍。  
- **Quarkus**：均为 **云原生 / 快启** 常见选项；可对照 **JAX-RS vs Micronaut `@Controller`** 写法。
