# Back-end / Go / Buffalo（形态占位）

## 框架简介

**Buffalo** 是 **全栈约定式** Go Web 框架：集成 **路由、资源（actions）、POP ORM、Webpack 前端资产、生成器与 CLI**，适合快速搭「页面 + API」一体应用。官方工作流以 **`buffalo new` / `buffalo dev`** 为中心，生成目录较多。

- 官方网站：<https://gobuffalo.io/>

## 在本仓库中的角色

本目录**不提交** `buffalo new` 完整生成树（体积、版本与前端链路与本仓库「单目录 go run」策略不一致）。用 **标准库 `net/http`** 实现与其它示例 **相同的 `/api/*` 与呈现页**，并在 **`GET /api/health`** 的 JSON 中带 **`note`** 指向本文档。默认端口 **3023**。

## 生成完整 Buffalo 应用（建议在仓库外空目录）

```powershell
go install github.com/gobuffalo/cli/v2/cmd/buffalo@latest
buffalo new myapp
cd myapp
buffalo dev
```

将生成路由、模型与资产管线；再与本目录或 **`Back-end/Go/Gin`** 对照 HTTP 分层。

## 环境要求

- Go 1.21+（仅运行本占位服务）。  
- **完整 Buffalo**：以官方文档为准安装 CLI 与数据库依赖。

## 安装与运行占位服务（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Buffalo'
go mod tidy
go run .
```

浏览器：**http://127.0.0.1:3023/**

## 与仓库内其它子项目对照

- **Revel**：同为历史全栈路线；新项目多转向 **Gin + SPA** 或 **GoFrame/Kratos**。  
- **Node 目录 AdonisJS 占位**：同为「CLI 全栈 vs 仓库内形态对齐」叙事。
