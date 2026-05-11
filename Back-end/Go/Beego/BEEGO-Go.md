# Back-end / Go / Beego（Go）

## 框架简介

**Beego** 是国产开源的 **全功能 Go Web 框架**（灵感部分来自 Django）：内置 **ORM、Session、日志、配置、热编译、Admin** 等模块，适合希望 **一体化约定** 的团队。v2 在模块划分与性能上相对 v1 有演进；本仓库示例以 **Beego v2** 为基线（以 `go.mod` 为准）。

- 官方网站：<https://beego.me/>
- 文档：<https://beego.me/docs/intro/>

## 在本仓库中的角色

独立 Go 模块；默认端口 **3006**。在保持与其它示例 **相同 `/api/*` 路由形状** 的前提下，演示 Beego 的 **Controller、RouterFilter、ORM 风格绑定** 等典型写法入口。

## 与 Node / 其它 Go 后端的关系

- 默认端口 **3006**；见根目录 [README.md](../../../README.md)。

## 环境要求

- Go 1.21+（以 `go.mod` 为准）。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Beego'
go mod tidy
go run .
```

访问 **http://127.0.0.1:3006/**。

## 延伸阅读

- Beego MVC 说明：<https://beego.me/docs/mvc/controller/overview.md>
