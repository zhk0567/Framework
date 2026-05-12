package com.example.framework;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.StaticHandler;

public class MainVerticle extends AbstractVerticle {

  @Override
  public void start() {
    Router router = Router.router(vertx);

    router.route().handler(
        ctx -> {
          ctx.response().putHeader("Access-Control-Allow-Origin", "*");
          ctx.response().putHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
          ctx.response().putHeader("Access-Control-Allow-Headers", "*");
          if (ctx.request().method().name().equals("OPTIONS")) {
            ctx.response().setStatusCode(204).end();
            return;
          }
          ctx.next();
        });

    router
        .get("/api/health")
        .handler(
            ctx ->
                ctx.response()
                    .putHeader("Content-Type", "application/json; charset=utf-8")
                    .end(
                        new JsonObject()
                            .put("ok", true)
                            .put("service", "framework-back-end-vertx")
                            .encode()));

    router
        .get("/api/info")
        .handler(
            ctx -> {
              JsonArray highlights =
                  new JsonArray()
                      .add(
                          new JsonObject()
                              .put("title", "事件循环")
                              .put("detail", "非阻塞 I/O 与 Handler 链式组合。"))
                      .add(
                          new JsonObject()
                              .put("title", "与 Gin 对照")
                              .put("detail", "均为轻量路由；Vert.x 更偏工具箱与生态模块。"));
              JsonObject body =
                  new JsonObject()
                      .put(
                          "message",
                          "Vert.x：Eclipse 基金会下的响应式工具集，Web 仅为其中一环（Router、Event Bus、Client 等）。")
                      .put("highlights", highlights);
              ctx.response()
                  .putHeader("Content-Type", "application/json; charset=utf-8")
                  .end(body.encode());
            });

    router.route("/*").handler(StaticHandler.create("webroot"));

    vertx
        .createHttpServer()
        .requestHandler(router)
        .listen(3073, "127.0.0.1")
        .onSuccess(
            s ->
                System.out.println(
                    "Vert.x http://127.0.0.1:" + s.actualPort() + "/"))
        .onFailure(Throwable::printStackTrace);
  }
}
