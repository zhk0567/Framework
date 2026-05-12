# http4s（Scala）

本目录为 **Scala 3 + http4s Ember** 最小服务：`GET /`、`GET /api/health`、`GET /api/info`。

## 环境

- **JDK 17+**
- [sbt](https://www.scala-sbt.org/download.html)（本仓库锁定 **1.10.x**，见 `project/build.properties`）。

## 命令

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Scala\Http4s'
sbt run
```

默认 **`http://127.0.0.1:3103/`**。改端口：

```powershell
$env:PORT = '3113'
sbt run
```

## http4s 与 Finch

- **http4s**：Cats Effect 上的函数式 HTTP 抽象，Ember 为后端之一。  
- **Finch**（Twitter）：另一套基于 **Finagle** 的函数式路由组合子；生态与 http4s 不同，面试中常与 **Scala + 函数式 Web** 一起出现。本仓库只收录 **http4s** 一条可编译路径；Finch 可在空目录按 [Finch 文档](https://github.com/finagle/finch) 自建对照。

## 官方资源

- [http4s](https://http4s.org/)
