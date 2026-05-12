# Back-end · Rust

| 子项目 | 说明 | 默认 URL | 文档 |
|--------|------|-----------|------|
| [Axum](Axum) | Axum · Tokio | `http://127.0.0.1:3100/` | [AXUM-Rust.md](Axum/AXUM-Rust.md) |
| [ActixWeb](ActixWeb) | actix-web 4 | `http://127.0.0.1:3110/` | [ACTIXWEB-Rust.md](ActixWeb/ACTIXWEB-Rust.md) |
| [Rocket](Rocket) | Rocket 0.5 | `http://127.0.0.1:3111/` | [ROCKET-Rust.md](Rocket/ROCKET-Rust.md) |
| [Warp](Warp) | warp 0.3 | `http://127.0.0.1:3112/` | [WARP-Rust.md](Warp/WARP-Rust.md) |

各子目录均为 **`cargo run`** 最小 HTTP；改端口可用环境变量 **`PORT`**（Rocket 另见各目录 **`Rocket.toml`**）。
