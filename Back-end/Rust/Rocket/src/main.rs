#[macro_use]
extern crate rocket;

use rocket::response::content::RawHtml;
use rocket::serde::json::Json;
use serde_json::json;

const INDEX_HTML: &str = include_str!("../public/index.html");

#[get("/api/health")]
fn health() -> Json<serde_json::Value> {
    Json(json!({
        "ok": true,
        "service": "framework-back-end-rocket",
        "note": "HTTP 形态对齐；见 ROCKET-Rust.md"
    }))
}

#[get("/api/info")]
fn info() -> Json<serde_json::Value> {
    Json(json!({
        "message": "Rocket：宏路由 + 类型安全的 Web 框架",
        "doc": "https://rocket.rs/",
        "highlights": [
            { "title": "同类", "detail": "Axum、actix-web、Warp — 见仓库 Rust 各子目录。" }
        ]
    }))
}

#[get("/")]
fn index() -> RawHtml<&'static str> {
    RawHtml(INDEX_HTML)
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index, health, info])
}
