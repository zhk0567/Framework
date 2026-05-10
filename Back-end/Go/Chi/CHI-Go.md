# Back-end / Go / Chi（Go）

独立 Go 模块；**标准 `net/http`** 之上轻量路由，默认端口 **3005**。

## 特点速览

- **极简、可预测**：`chi.Router` + `middleware` 包。  
- **本示例**：内置 `RequestID`、`Logger`、`Recoverer`；`go-chi/cors`；子路由 `/api/box` 写响应头。

## 运行

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Chi'
go mod tidy
go run .
```

访问 `http://127.0.0.1:3005/`。

