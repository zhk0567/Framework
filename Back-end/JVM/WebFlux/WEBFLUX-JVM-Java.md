# Spring WebFlux（JVM · 反应式 Web）

本目录为 **Spring Boot 3 + WebFlux** 最小示例：**`RouterFunction`** 暴露 **`/`**、**`GET /api/health`**、**`GET /api/info`**，与 [`../Spring-Boot`](../Spring-Boot) 的 **Web MVC / 注解式 Controller** 对照。

## 环境

- **JDK 17+**
- **Apache Maven 3.9+**

## 运行

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\JVM\WebFlux'
mvn -q spring-boot:run
```

默认 **http://127.0.0.1:3076/**（见 `application.properties`）。

## 与 Spring MVC 的差异（提要）

| 维度 | Spring MVC（`Spring-Boot`） | WebFlux（本目录） |
|------|-----------------------------|-------------------|
| 栈 | 阻塞式 Servlet（默认 Tomcat） | 反应式 Netty |
| 路由风格 | `@RestController` + `@GetMapping` 等 | `RouterFunction` / `HandlerFunction` |
| 适用 | 典型 CRUD、同步 JDBC | 高并发 I/O、WebClient、背压敏感场景 |

官方文档：[Spring WebFlux](https://docs.spring.io/spring-framework/reference/web/webflux.html)。
