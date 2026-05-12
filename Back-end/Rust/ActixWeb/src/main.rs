use std::env;

use actix_web::{get, App, HttpResponse, HttpServer, Responder};
use serde_json::json;

const INDEX_HTML: &str = include_str!("../public/index.html");

#[get("/api/health")]
async fn health() -> impl Responder {
    HttpResponse::Ok().json(json!({
        "ok": true,
        "service": "framework-back-end-actix-web",
        "note": "HTTP 形态对齐；见 ACTIXWEB-Rust.md"
    }))
}

#[get("/api/info")]
async fn info() -> impl Responder {
    HttpResponse::Ok().json(json!({
        "message": "actix-web：Actor 模型向的异步 Web 框架",
        "doc": "https://actix.rs/",
        "highlights": [
            { "title": "同类", "detail": "Axum、Rocket、Warp — 见仓库 Rust 各子目录。" }
        ]
    }))
}

#[get("/")]
async fn index() -> impl Responder {
    HttpResponse::Ok()
        .content_type("text/html; charset=utf-8")
        .body(INDEX_HTML)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let port: u16 = env::var("PORT")
        .ok()
        .and_then(|s| s.parse().ok())
        .unwrap_or(3110);

    println!("actix-web http://127.0.0.1:{port}/");
    HttpServer::new(|| {
        App::new()
            .service(health)
            .service(info)
            .service(index)
    })
    .bind(("127.0.0.1", port))?
    .run()
    .await
}
