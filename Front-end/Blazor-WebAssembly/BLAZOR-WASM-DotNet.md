# Blazor WebAssembly（.NET 9）

## 框架简介

**Blazor WebAssembly（WASM）** 是微软 **ASP.NET Core** 生态中的 **Web UI 框架**：使用 **C#** 与 **Razor 组件** 编写 SPA，通过 **.NET 运行时以 WebAssembly** 形式下载到浏览器执行。与 **Blazor Server**（SignalR 驱动）不同，WASM 模式将 **.NET 程序集** 带到客户端，适合离线能力与丰富客户端交互，但首包体积与冷启动需纳入考量。

- 官方文档：<https://learn.microsoft.com/zh-cn/aspnet/core/blazor/hosting-models#blazor-webassembly>
- Blazor 总览：<https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor>

## 在本仓库中的角色

本目录为最小 **计数 + 列表** 能力展台，演示组件状态与 Razor 模板；与 **`Front-end/Blazor-Server`** 对照 **托管模型差异**。

## 技术栈

| 层级 | 选型 |
|------|------|
| 运行时 | .NET 9、浏览器 WebAssembly |
| UI | Razor 组件、 `@code` / 分部类 |
| 构建 | `dotnet` CLI |

## 环境要求

- 安装 [.NET 9 SDK](https://dotnet.microsoft.com/download)。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Blazor-WebAssembly'
dotnet run
```

## 默认 URL

- **http://127.0.0.1:5210/**（见 `Properties/launchSettings.json`）。

## 与 Blazor Server 对照

| 维度 | WebAssembly | Server |
|------|-------------|--------|
| 执行位置 | 浏览器 WASM | ASP.NET Core 服务端 |
| 实时通道 | 无内置 SignalR UI 管道 | SignalR 推送 DOM diff |
| 首屏/离线 | 需下载运行时 | 依赖持续连接 |

## 延伸阅读

- WASM 性能与加载：<https://learn.microsoft.com/zh-cn/aspnet/core/blazor/webassembly-performance>
