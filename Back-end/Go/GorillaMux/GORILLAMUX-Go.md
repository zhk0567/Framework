# Back-end / Go / gorilla/mux（Go）

## 框架简介

**gorilla/mux** 是成熟稳定的 **HTTP 路由器**（Gorilla Toolkit 一员）：支持 **路径变量、正则、Host 约束、Method 限制、子路由** 等，API 贴近 **REST 资源建模**。许多遗留服务与网关仍在使用；新项目也常与 **chi** 或 **Go 1.22+ ServeMux** 对照选型。

- 源码与说明：<https://github.com/gorilla/mux>

## 在本仓库中的角色

独立 Go 模块；默认端口 **3021**。使用 **`mux.NewRouter()`**、**`PathPrefix` + `Subrouter`** 组织 **`/api`**，与 Gin/Chi 等保持 **同一套 JSON 路径**，便于 `fetch` 对照。

## 与 Node / 其它 Go 后端的关系

- 路由形状与其它 `Back-end/Go/*` 一致。  
- 端口总览见根目录 [README.md](../../../README.md)。

## 环境要求

- Go 1.21+

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\GorillaMux'
go mod tidy
go run .
```

浏览器：**http://127.0.0.1:3021/**

## 可选环境变量

见 `.env.example`。

## 与仓库内其它子项目对照

- **Chi**：二者均为「轻路由 + 标准库 Handler」；API 风格不同。  
- **标准库 Stdlib**：无第三方依赖时手写路径分支。
