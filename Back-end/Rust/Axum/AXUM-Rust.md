# Axum（Rust Web）

本目录为 **最小可运行 Axum** 工程：`GET /`、`GET /api/health`、`GET /api/info`，与同仓库 Go / Node 后端的 JSON 形态对齐。

## 环境

- [Rust 工具链](https://www.rust-lang.org/tools/install)（`rustc` / `cargo`），建议 **stable**。

## 命令

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Rust\Axum'
cargo run
```

默认监听 **`http://127.0.0.1:3100/`**。改端口：

```powershell
$env:PORT = '3110'
cargo run
```

## 面试常见「Rust Web 三件套」对照

| 名称 | 特点 | 文档 |
|------|------|------|
| **Axum** | Tokio 生态、Tower 中间件、类型化提取器 | [docs.rs/axum](https://docs.rs/axum) |
| **actix-web** | Actor 模型、高性能、生态成熟 | [actix.rs](https://actix.rs/) |
| **Rocket** | 属性宏路由、强类型表单 | [rocket.rs](https://rocket.rs/) |
| **warp** | 函数式过滤器组合；维护节奏请自行关注 crate 与 issue | [docs.rs/warp](https://docs.rs/warp) |

本仓库只提交 **Axum** 一条可编译路径，避免多 crate 重复；选型时在空目录分别 `cargo new` 官方示例即可并排实验。
