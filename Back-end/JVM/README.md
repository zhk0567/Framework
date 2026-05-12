# Back-end / JVM

本目录为 **Java / Kotlin on JVM** 的最小 HTTP 示例，与 [`Back-end/Node`](../Node)、[`Back-end/Go`](../Go) 在 **`GET /api/health`**、**`GET /api/info`** 及 **`/` 呈现页** 上对齐，便于对照注解式路由、构建工具与启动方式。

| 子目录 | 技术 | 默认端口 | 构建 |
|--------|------|----------|------|
| [Spring-Boot](Spring-Boot) | Spring Boot 3 · Web MVC | **3070** | Maven |
| [WebFlux](WebFlux) | Spring Boot 3 · WebFlux · RouterFunction | **3076** | Maven |
| [Quarkus](Quarkus) | Quarkus 3 · JAX-RS | **3071** | Maven |
| [Micronaut](Micronaut) | Micronaut 4 · HTTP Server | **3072** | Maven |
| [Vertx](Vertx) | Vert.x 4 · Web Router | **3073** | Maven |
| [Ktor](Ktor) | Ktor 3 · Netty · Kotlin | **3074** | Maven（Kotlin 源码） |
| [Play](Play) | 形态占位（JDK `HttpServer`）+ 官方 sbt 模板说明 | **3075** | `java` / 见 `PLAY-JVM.md` |

**环境**：**JDK 17+**（Spring Boot 3 / Quarkus 3 / 多数现代栈的基线）。**Apache Maven 3.9+**（本目录各 Java/Kotlin 子工程均用 Maven 构建与运行）。命令示例见根目录 [README.md](../../README.md) 与各子目录 `*-JVM*.md`。
