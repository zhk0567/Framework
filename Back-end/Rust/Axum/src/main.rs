use std::env;

use axum::{
    response::{Html, IntoResponse, Json},
    routing::get,
    Router,
};
use serde_json::json;

const INDEX_HTML: &str = include_str!("../public/index.html");

#[tokio::main]
async fn main() {
    let port: u16 = env::var("PORT")
        .ok()
        .and_then(|s| s.parse().ok())
        .unwrap_or(3100);

    let app = Router::new()
        .route("/", get(|| async { Html(INDEX_HTML) }))
        .route("/api/health", get(health))
        .route("/api/info", get(info));

    let addr = format!("127.0.0.1:{port}");
    let listener = tokio::net::TcpListener::bind(&addr).await.expect("bind");
    println!("Axum（Rust）http://{addr}/");
    axum::serve(listener, app).await.expect("serve");
}

async fn health() -> impl IntoResponse {
    Json(json!({
        "ok": true,
        "service": "framework-back-end-axum-guide",
        "note": "HTTP 形态对齐；Actix-web / Rocket / Warp 见 AXUM-Rust.md"
    }))
}

async fn info() -> impl IntoResponse {
    Json(json!({
        "message": "Axum：基于 Tower / Hyper 的异步路由与提取器",
        "doc": "https://docs.rs/axum",
        "highlights": [
            { "title": "同类框架", "detail": "actix-web、rocket、warp（Reactor 模型与维护状态见各 crate）。" }
        ]
    }))
}
