# Back-end / Go / Echo（Go）

独立 Go 模块；路由与仓库内其他 Go/Node 后端对齐，默认端口 **3004**。

## 特点速览

- **高性能、API 清晰**：`echo.Context`、`Bind`、`JSON`。  
- **中间件**：`echo.HandlerFunc` 包装链，与标准 `net/http` 思维接近。  
- **本示例**：`go:embed` 呈现页、CORS、手写校验、路由组响应头。

## 运行

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Echo'
go mod tidy
go run .
```

访问 `http://127.0.0.1:3004/`。

