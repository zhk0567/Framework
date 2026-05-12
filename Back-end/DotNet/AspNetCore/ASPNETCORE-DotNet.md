# Back-end / DotNet / ASP.NET Core

## 框架简介

**ASP.NET Core** 是 **.NET** 上的跨平台 Web 框架：**Minimal API**、**MVC / Razor Pages**、**SignalR**、**gRPC** 等可组合；与 **Kestrel** 宿主及 **OpenAPI** 生态常见搭配。

- 官方文档：<https://learn.microsoft.com/aspnet/core/>

## 在本仓库中的角色

**`dotnet new` 风格** 单项目：**Minimal API** 提供 **`GET /api/health`**、**`GET /api/info`**；**`wwwroot/index.html`** 为呈现页。默认 **http://127.0.0.1:3080/**

## 环境要求

- **.NET SDK 9**（或按 `TargetFramework` 调整 `AspNetCore.csproj` 后使用 **.NET 8 SDK**）

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\DotNet\AspNetCore'
dotnet run
```

浏览器打开 **http://127.0.0.1:3080/**

## 与仓库内其它后端对照

- **Spring Boot**：对照 **注解 MVC** 与 **委托式 Minimal 端点**。  
- **Fastify**：对照 **管道中间件** 与 **插件/过滤器** 命名习惯。
