package com.example.framework;

import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import java.util.List;
import java.util.Map;

@Controller("/api")
public class ApiController {

  @Get("/health")
  public Map<String, Object> health() {
    return Map.of("ok", true, "service", "framework-back-end-micronaut");
  }

  @Get("/info")
  public Map<String, Object> info() {
    return Map.of(
        "message",
        "Micronaut：编译期注解处理、低开销反射、云原生与 GraalVM 友好叙事。",
        "highlights",
        List.of(
            Map.of("title", "AOT", "detail", "构建期生成 Bean 元数据与配置。"),
            Map.of("title", "与 Spring 对照", "detail", "启动时间与内存亦常为对比维度。")));
  }
}
