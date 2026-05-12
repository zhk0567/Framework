package com.example.framework

import io.ktor.serialization.jackson.jackson
import io.ktor.server.application.install
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.server.plugins.contentnegotiation.ContentNegotiation
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.http.content.staticResources
import io.ktor.server.response.respond
import io.ktor.server.routing.get
import io.ktor.server.routing.routing

fun main() {
  embeddedServer(Netty, port = 3074, host = "127.0.0.1") {
        install(CORS) { anyHost() }
        install(ContentNegotiation) { jackson() }
        routing {
          get("/api/health") {
            call.respond(mapOf("ok" to true, "service" to "framework-back-end-ktor"))
          }
          get("/api/info") {
            call.respond(
                mapOf(
                    "message" to
                        "Ktor：JetBrains 推出的 Kotlin 异步 Web 框架，Pipeline、协程与可插拔引擎（Netty、CIO 等）常见。",
                    "highlights" to
                        listOf(
                            mapOf("title" to "Pipeline", "detail" to "Application、Routing、Features 组合。"),
                            mapOf(
                                "title" to "与 Spring Boot 对照",
                                "detail" to "Kotlin 一等公民；生态体量与「全家桶」取舍不同。"))))
          }
          staticResources("/", "static")
        }
      }
      .start(wait = true)
}
