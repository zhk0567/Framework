# Back-end / Go / Revel（形态占位）

## 框架简介

**Revel** 是较早的 Go **全栈 MVC 框架**（拦截器、验证、模板、自动重载等）。目前社区活跃度与 **Gin/Fiber/GoFrame** 相比偏弱，但在学习「**约定式目录 + 拦截器链**」时仍有对照价值。

- 项目主页：<https://revel.github.io/>

## 在本仓库中的角色

本目录**不提交** `revel run` 完整工程。使用 **`net/http`** 实现与其它 Go 示例一致的 **`/api/*`** 与呈现页；**`GET /api/health`** 含 **`note`** 说明。默认端口 **3024**。

## 创建 Revel 工程（建议在仓库外）

```powershell
go install github.com/revel/cmd/revel@latest
revel new myapp
cd myapp
revel run
```

## 环境要求

- Go 1.21+（占位服务）。  
- **Revel CLI**：见官方安装说明。

## 安装与运行占位服务（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Revel'
go mod tidy
go run .
```

浏览器：**http://127.0.0.1:3024/**

## 与仓库内其它子项目对照

- **Buffalo**：同为全栈 CLI 路线。  
- **Beego / GoFrame**：若需要「仍在积极维护的全家桶」，优先对照后两者。
