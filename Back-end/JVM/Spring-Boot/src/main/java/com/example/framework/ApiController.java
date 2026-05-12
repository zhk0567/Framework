package com.example.framework;

import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ApiController {

  @GetMapping("/health")
  public Map<String, Object> health() {
    return Map.of("ok", true, "service", "framework-back-end-spring-boot");
  }

  @GetMapping("/info")
  public Map<String, Object> info() {
    return Map.of(
        "message",
        "Spring Boot：约定优于配置、自动装配、Spring Web MVC 与庞大生态。",
        "highlights",
        List.of(
            Map.of(
                "title",
                "起步依赖",
                "detail",
                "spring-boot-starter-web 集成 Tomcat、Jackson、Spring MVC。"),
            Map.of("title", "与 NestJS 对照", "detail", "均为「企业向」分层与 DI；Java 注解 vs TypeScript 装饰器。")));
  }
}
