package com.example.framework;

import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

/**
 * 与 Go 目录下 Buffalo/Revel 占位一致：仅对齐 HTTP 形态与呈现页；完整 Play 应用请用官方 sbt 模板（见
 * PLAY-JVM.md）。
 */
public final class PlayPlaceholder {

  public static void main(String[] args) throws IOException {
    String host = System.getenv().getOrDefault("HOST", "127.0.0.1");
    int port = Integer.parseInt(System.getenv().getOrDefault("PORT", "3075"));
    Path indexPath = Path.of("public", "index.html");
    byte[] indexHtml = Files.readAllBytes(indexPath);

    HttpServer server = HttpServer.create(new InetSocketAddress(host, port), 0);
    server.createContext("/", new StaticHandler(indexHtml));
    server.createContext("/api/health", new JsonHandler(Map.of("ok", true, "service", "framework-back-end-play-guide", "note", "HTTP 形态占位；完整 Play 应用请用官方 sbt new（见 PLAY-JVM.md）。")));
    server.createContext(
        "/api/info",
        new JsonHandler(
            Map.of(
                "message",
                "Play Framework：Lightbend 生态下的 Scala/Java Web 栈，路由、Twirl 模板与 sbt 交付链路常见。",
                "highlights",
                List.of(
                    Map.of("title", "官方脚手架", "detail", "sbt new playframework/play-scala-seed.g8 等模板。"),
                    Map.of("title", "与 Spring Boot 对照", "detail", "Play 偏全栈与强约定；本仓库仅占位 HTTP。")))));
    server.setExecutor(null);
    server.start();
    System.out.println("Play（形态占位）http://" + host + ":" + port + "/");
  }

  private static final class StaticHandler implements HttpHandler {
    private final byte[] body;

    StaticHandler(byte[] body) {
      this.body = body;
    }

    @Override
    public void handle(HttpExchange exchange) throws IOException {
      if (!"GET".equalsIgnoreCase(exchange.getRequestMethod())) {
        exchange.sendResponseHeaders(405, -1);
        exchange.close();
        return;
      }
      exchange.getResponseHeaders().add("Content-Type", "text/html; charset=utf-8");
      exchange.sendResponseHeaders(200, body.length);
      try (OutputStream os = exchange.getResponseBody()) {
        os.write(body);
      }
    }
  }

  private static final class JsonHandler implements HttpHandler {
    private final String json;

    JsonHandler(Map<String, ?> map) {
      this.json = toJson(map);
    }

    @Override
    public void handle(HttpExchange exchange) throws IOException {
      if (!"GET".equalsIgnoreCase(exchange.getRequestMethod())) {
        exchange.sendResponseHeaders(405, -1);
        exchange.close();
        return;
      }
      exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
      exchange.getResponseHeaders().add("Content-Type", "application/json; charset=utf-8");
      byte[] bytes = json.getBytes(StandardCharsets.UTF_8);
      exchange.sendResponseHeaders(200, bytes.length);
      try (OutputStream os = exchange.getResponseBody()) {
        os.write(bytes);
      }
    }

    private static String toJson(Map<String, ?> map) {
      StringBuilder sb = new StringBuilder();
      sb.append('{');
      boolean first = true;
      for (Map.Entry<String, ?> e : map.entrySet()) {
        if (!first) {
          sb.append(',');
        }
        first = false;
        sb.append('"').append(escape(e.getKey())).append("\":");
        sb.append(valueJson(e.getValue()));
      }
      sb.append('}');
      return sb.toString();
    }

    private static String valueJson(Object v) {
      if (v instanceof String s) {
        return '"' + escape(s) + '"';
      }
      if (v instanceof Boolean b) {
        return b ? "true" : "false";
      }
      if (v instanceof List<?> list) {
        StringBuilder sb = new StringBuilder();
        sb.append('[');
        boolean first = true;
        for (Object o : list) {
          if (!first) {
            sb.append(',');
          }
          first = false;
          if (o instanceof Map<?, ?> m) {
            @SuppressWarnings("unchecked")
            Map<String, ?> sm = (Map<String, ?>) m;
            sb.append(toJson(sm));
          } else {
            sb.append(valueJson(o));
          }
        }
        sb.append(']');
        return sb.toString();
      }
      if (v instanceof Map<?, ?> m) {
        @SuppressWarnings("unchecked")
        Map<String, ?> sm = (Map<String, ?>) m;
        return toJson(sm);
      }
      return "null";
    }

    private static String escape(String s) {
      return s.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", "\\n").replace("\r", "\\r");
    }
  }

  private PlayPlaceholder() {}
}
