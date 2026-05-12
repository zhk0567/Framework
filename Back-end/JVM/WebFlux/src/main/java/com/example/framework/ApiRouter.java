package com.example.framework;

import java.nio.charset.StandardCharsets;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;

@Configuration
public class ApiRouter {

  @Bean
  public RouterFunction<ServerResponse> routes() throws Exception {
    ClassPathResource html = new ClassPathResource("static/index.html");
    String indexBody =
        new String(html.getInputStream().readAllBytes(), StandardCharsets.UTF_8);

    return RouterFunctions.route(
            GET("/api/health"),
            req ->
                ServerResponse.ok()
                    .contentType(MediaType.APPLICATION_JSON)
                    .bodyValue(
                        Map.of(
                            "ok",
                            true,
                            "service",
                            "framework-jvm-webflux",
                            "note",
                            "Spring WebFlux · RouterFunction")))
        .andRoute(
            GET("/api/info"),
            req -> {
              Map<String, String> h = new LinkedHashMap<>();
              h.put("title", "与 Spring MVC 对照");
              h.put(
                  "detail",
                  "见 Back-end/JVM/Spring-Boot；本目录为 WebFlux.fn + 反应式栈。");
              Map<String, Object> body = new LinkedHashMap<>();
              body.put("message", "Spring WebFlux：反应式 Web（RouterFunction / WebClient）");
              body.put("doc", "https://docs.spring.io/spring-framework/reference/web/webflux.html");
              body.put("highlights", List.of(h));
              return ServerResponse.ok()
                  .contentType(MediaType.APPLICATION_JSON)
                  .bodyValue(body);
            })
        .andRoute(
            GET("/"),
            req ->
                ServerResponse.ok()
                    .contentType(MediaType.TEXT_HTML)
                    .bodyValue(indexBody));
  }
}
