# Rocket（Rust Web）

本目录为 **最小可运行 Rocket** 工程：`GET /`、`GET /api/health`、`GET /api/info`，与同仓库 **Axum / actix-web / warp** 及 Node / Go 后端 JSON 形态对齐。

## 环境

- [Rust 工具链](https://www.rust-lang.org/tools/install)（`stable`；Rocket **0.5** 需满足官方文档中的最低 `rustc` 版本）。

## 命令

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Rust\Rocket'
cargo run
```

默认 **`http://127.0.0.1:3111/`**（见根目录 `Rocket.toml`）。改端口可编辑 **`Rocket.toml`** 或使用 [Rocket 配置](https://rocket.rs/v0/guide/configuration/) 中的环境变量约定。

## 对照

- [`../Axum`](../Axum) · [`../ActixWeb`](../ActixWeb) · [`../Warp`](../Warp)
