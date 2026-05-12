# actix-web（Rust Web）

本目录为 **最小可运行 actix-web** 工程：`GET /`、`GET /api/health`、`GET /api/info`，与同仓库 **Axum / Rocket / warp** 及 Node / Go 后端 JSON 形态对齐。

## 环境

- [Rust 工具链](https://www.rust-lang.org/tools/install)（`stable`）。

## 命令

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Rust\ActixWeb'
cargo run
```

默认 **`http://127.0.0.1:3110/`**。改端口：

```powershell
$env:PORT = '3999'
cargo run
```

## 对照

- [`../Axum`](../Axum) · [`../Rocket`](../Rocket) · [`../Warp`](../Warp)
