# Phoenix（Elixir 全栈）

本目录用 **Plug + Bandit** 提供 **`/`、`/api/health`、`/api/info`**，与同仓库其它后端的 HTTP/JSON 形态对齐；**不提交** `mix phx.new` 生成的完整 Phoenix 树（资产、LiveView、Ecto 迁移等），以降低仓库体积。

## 环境

- [Elixir 与 Erlang/OTP](https://elixir-lang.org/install.html)（建议 **1.14+**）、[Hex](https://hex.pm/docs/usage)。

## 命令

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Elixir\Phoenix'
mix deps.get
mix run --no-halt
```

默认 **`http://127.0.0.1:3101/`**。改端口：

```powershell
$env:PORT = '3111'
mix run --no-halt
```

## 完整 Phoenix 项目

```powershell
mix archive.install hex phx_new
mix phx.new my_app --no-ecto
```

详见 [Phoenix 官方指南](https://hexdocs.pm/phoenix/overview.html)。

## 为何用 Plug 占位

Phoenix 建立在 **Plug** 与 **Cowboy/Bandit** 之上；本仓库用最小依赖演示 **路由 + JSON + 静态页**，便于与 **Axum、Oak、http4s** 等同读 `GET /api/*` 的响应结构。
