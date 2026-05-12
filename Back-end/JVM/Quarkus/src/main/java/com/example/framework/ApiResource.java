package com.example.framework;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;
import java.util.Map;

@Path("/api")
public class ApiResource {

  @GET
  @Path("/health")
  @Produces(MediaType.APPLICATION_JSON)
  public Map<String, Object> health() {
    return Map.of("ok", true, "service", "framework-back-end-quarkus");
  }

  @GET
  @Path("/info")
  @Produces(MediaType.APPLICATION_JSON)
  public Map<String, Object> info() {
    return Map.of(
        "message",
        "Quarkus：云原生 Java，GraalVM 原生镜像、Dev UI、Supersonic Subatomic Java 叙事。",
        "highlights",
        List.of(
            Map.of(
                "title",
                "Reactive / Imperative",
                "detail",
                "RESTEasy Reactive 与 Vert.x 事件循环深度集成。"),
            Map.of("title", "与 Spring Boot 对照", "detail", "启动时间与内存占用常作为选型对比点。")));
  }
}
