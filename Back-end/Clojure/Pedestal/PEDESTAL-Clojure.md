# Pedestal（Clojure）

本目录用 **Ring + Jetty** 提供 **`/`、`/api/health`、`/api/info`**，与同仓库其它后端的 JSON 形态对齐。**Pedestal** 在 Ring 之上提供 **拦截器链、路由即数据** 等模型；完整 Pedestal 服务见官方仓库与模板。

## 环境

- [Clojure CLI](https://clojure.org/guides/install_clojure)（`clojure` / `clj`）。

## 命令

在 **`Back-end/Clojure/Pedestal`** 下执行（需能访问 Maven Central 以下载依赖）：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Clojure\Pedestal'
clojure -M:run
```

默认 **`http://127.0.0.1:3104/`**。改端口：

```powershell
$env:PORT = '3114'
clojure -M:run
```

## Pedestal 本体

- [pedestal/pedestal](https://github.com/pedestal/pedestal)
- 典型起点：在空目录按官方 README 生成带 **`:io.pedestal/pedestal.service`** 的项目，再对照本目录的 **`/api/health` JSON 形状**。

## 为何用 Ring 占位

Pedestal 依赖与概念多于「单文件 Jetty」；本仓库用 **最小 Ring handler** 固定 **`GET /api/*`** 响应结构，便于与 **http4s、Axum、Plug** 并排阅读。
