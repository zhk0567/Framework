use std::env;

use serde_json::json;
use warp::Filter;

const INDEX_HTML: &str = include_str!("../public/index.html");

#[tokio::main]
async fn main() {
    let port: u16 = env::var("PORT")
        .ok()
        .and_then(|s| s.parse().ok())
        .unwrap_or(3112);

    let index = warp::path::end().map(|| {
        warp::reply::with_header(INDEX_HTML, "content-type", "text/html; charset=utf-8")
    });

    let health = warp::path!("api" / "health").map(|| {
        warp::reply::with_header(
            serde_json::to_string(&json!({
                "ok": true,
                "service": "framework-back-end-warp",
                "note": "HTTP 形态对齐；见 WARP-Rust.md"
            }))
            .unwrap(),
            "content-type",
            "application/json; charset=utf-8",
        )
    });

    let info = warp::path!("api" / "info").map(|| {
        warp::reply::with_header(
            serde_json::to_string(&json!({
                "message": "warp：Filter 组合式异步 Web（维护节奏需关注 crate）",
                "doc": "https://docs.rs/warp",
                "highlights": [
                    { "title": "同类", "detail": "Axum、actix-web、Rocket — 见仓库 Rust 各子目录。" }
                ]
            }))
            .unwrap(),
            "content-type",
            "application/json; charset=utf-8",
        )
    });

    let routes = health.or(info).or(index);

    println!("warp http://127.0.0.1:{port}/");
    warp::serve(routes).run(([127, 0, 0, 1], port)).await;
}
