# Back-end / Go / Beego（Go）

独立 Go 模块；**MVC + Router 映射** 风格，默认端口 **3006**。

## 特点速览

- **全家桶可选**：本示例仅用 `web.Router`、`InsertFilter`、Controller 方法。  
- **InsertFilter**：在 `/api/box/*` 上写 `X-Feature-Box`，与 Gin 的 Group 中间件对照。  
- **运行**：`web.Run("127.0.0.1:3006")`（端口写死在示例中，可按需改为读环境变量）。

## 运行

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Beego'
go mod tidy
go run .
```

访问 `http://127.0.0.1:3006/`。

