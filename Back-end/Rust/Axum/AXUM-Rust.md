# Axum（Rust Web）

本目录为 **最小可运行 Axum** 工程：`GET /`、`GET /api/health`、`GET /api/info`，与同仓库 Go / Node 后端的 JSON 形态对齐。

## 环境

- [Rust 工具链](https://www.rust-lang.org/tools/install)（`rustc` / `cargo`），建议 **stable**。

## 命令

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Rust\Axum'
cargo run
```

默认监听 **`http://127.0.0.1:3100/`**。改端口（勿与 **actix-web 3110 / Rocket 3111 / warp 3112** 冲突）：

```powershell
$env:PORT = '3999'
cargo run
```

## 面试常见「Rust Web 四件套」对照

| 名称 | 默认端口（本仓库） | 文档 |
|------|-------------------|------|
| **Axum** | **3100** | 本目录 |
| **actix-web** | **3110** | [`../ActixWeb`](../ActixWeb) |
| **Rocket** | **3111** | [`../Rocket`](../Rocket) |
| **warp** | **3112** | [`../Warp`](../Warp) |

各子目录均为 **`cargo run`** 可编译的最小 HTTP；选型时亦可在空目录 `cargo new` 官方模板扩展。
