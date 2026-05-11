# Blazor Server（.NET 9）

## 框架简介

**Blazor Server** 在 **ASP.NET Core** 进程内渲染 **Razor 组件**，通过 **SignalR**（`blazor.server.js`）在浏览器与服务器之间同步 UI 事件与渲染差异。优点是 **首包小、可使用完整 .NET BCL 与机密配置**；缺点是 **交互依赖网络延迟与连接稳定性**，扩展与伸缩需按会话规划。

- 官方文档：<https://learn.microsoft.com/zh-cn/aspnet/core/blazor/hosting-models#blazor-server>
- SignalR：<https://learn.microsoft.com/zh-cn/aspnet/core/signalr/introduction>

## 在本仓库中的角色

最小 **计数 + 列表** 展台，与 **`Front-end/Blazor-WebAssembly`** 对照 **同一 Razor 组件模型** 在不同托管下的行为差异。

## 技术栈

| 层级 | 选型 |
|------|------|
| 宿主 | ASP.NET Core 9 |
| 实时 | SignalR |
| UI | Razor 组件 |

## 环境要求

- 安装 [.NET 9 SDK](https://dotnet.microsoft.com/download)。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Blazor-Server'
dotnet run
```

## 默认 URL

- **http://127.0.0.1:5211/**（见 `Properties/launchSettings.json`）。

## 延伸阅读

- 电路与重连：<https://learn.microsoft.com/zh-cn/aspnet/core/blazor/fundamentals/signalr>
