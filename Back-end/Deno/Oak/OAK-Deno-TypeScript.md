# Oak（Deno）

本目录为 **Deno + Oak** 最小服务：`GET /`、`GET /api/health`、`GET /api/info`。

## 环境

- [Deno](https://docs.deno.com/runtime/getting_started/installation/)（建议 **2.x**）。

## 命令

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Deno\Oak'
deno task dev
```

默认 **`http://127.0.0.1:3102/`**。改端口：

```powershell
$env:PORT = '3112'
deno task dev
```

## 与 Node 侧 Hono 的关系

二者均为「中间件 + 路由」风格；**运行时不同**：本目录在 **Deno** 上执行，权限模型为 **显式 `--allow-*`**，与 Node 的 `npm` 生态分离。对照时可并排打开本目录与 [`Back-end/Node/Hono`](../../Node/Hono)。

## 官方资源

- [Oak（deno.land/x）](https://deno.land/x/oak)
- [Deno 手册](https://docs.deno.com/runtime/manual/)
