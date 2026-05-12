# warp（Rust Web）

本目录为 **最小可运行 warp** 工程：`GET /`、`GET /api/health`、`GET /api/info`，与同仓库 **Axum / actix-web / Rocket** 及 Node / Go 后端 JSON 形态对齐。

## 环境

- [Rust 工具链](https://www.rust-lang.org/tools/install)（`stable`）。

## 命令

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Rust\Warp'
cargo run
```

默认 **`http://127.0.0.1:3112/`**。改端口：

```powershell
$env:PORT = '3999'
cargo run
```

## 说明

**warp** 以 **Filter** 组合表达路由；与 **Axum** 的 `Router::merge` 等风格不同。crate 维护节奏与 **Hyper** 主版本绑定情况请自行关注 [docs.rs/warp](https://docs.rs/warp) 与 issue。

## 对照

- [`../Axum`](../Axum) · [`../ActixWeb`](../ActixWeb) · [`../Rocket`](../Rocket)
