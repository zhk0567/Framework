# Back-end / Go / GoFrame（Go）

## 框架简介

**GoFrame（GF）** 是面向工程化的 **Go 全家桶框架**：**`ghttp`** 提供 Web 服务、路由与中间件；配套 **配置、日志、ORM、校验、链路** 等模块，在国内中大型后端与运营系统中较常见。

- 官方网站：<https://goframe.org/>

## 在本仓库中的角色

独立 Go 模块；默认端口 **3022**（在 `main.go` 中 `s.SetPort(3022)`）。演示 **`g.Server()`**、**`BindHandler`**、**`Group` 子路由**、**`Response.WriteJson`** 与 **组级中间件**（`X-Feature-Box`），API 形态与其它 Go 示例对齐。

## 环境要求

- Go 1.21+

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\GoFrame'
go mod tidy
go run .
```

浏览器：**http://127.0.0.1:3022/**

## 可选环境变量

`.env.example` 中 `PORT` 对 **GoFrame 默认端口** 仅作文档提示；本示例端口在代码中 `SetPort`，若需环境变量驱动可改为读取 `os.Getenv` 后 `SetPort`。

## 与仓库内其它子项目对照

- **Beego**：同为「全家桶」取向，可对照目录约定与模块边界。  
- **Gin**：偏薄路由层；GoFrame 偏一体化平台。

## 延伸阅读

- Web 开发入门：<https://goframe.org/docs/web/start>
