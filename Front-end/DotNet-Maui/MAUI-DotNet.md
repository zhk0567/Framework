# .NET MAUI（C#）

## 框架简介

**.NET Multi-platform App UI（.NET MAUI）** 是微软 **.NET 6+** 时代的**跨平台原生 UI 框架**：单一代码库面向 **Android、iOS、macOS、Windows** 等，使用 **XAML + C#**（或纯 C#）描述界面，底层通过各平台 **原生控件或 Skia** 渲染（取决于控件类型）。与 **WPF / WinUI** 有技术渊源，与 **Uno Platform**、**Avalonia** 等形成不同取舍。

- 官方文档：<https://learn.microsoft.com/dotnet/maui/>
- 安装与工作量：<https://learn.microsoft.com/dotnet/maui/get-started/installation>

## 在本仓库中的角色

完整 MAUI 工程含 **XAML、Platforms/*、资源与字体** 等大量生成文件，且依赖 **.NET SDK + MAUI 工作负载** 与（在 macOS 上）**Xcode**、（在 Windows/Android 上）**Android SDK**。本目录**不提交**整套 `dotnet new maui` 树，以免与克隆机环境不一致；提供 **`global.json`** 与 **生成命令**，引导你在本机生成可构建工程。

## 在本目录生成工程（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\DotNet-Maui'
dotnet workload install maui
dotnet new maui -n DotNetMauiApp -o ./generated --force
Set-Location -LiteralPath '.\generated'
dotnet build
dotnet run
```

生成后可将 **`MainPage.xaml`** 改为与其它前端子目录一致的「计数 + 列表」展台，对照 **XAML + 代码隐藏**。

## 与仓库内其它子项目对照

- **Flutter**：Dart + Widget；MAUI 为 C# + XAML 生态。
- **Blazor**：Web 技术栈；MAUI 为原生应用模型。

## 延伸阅读

- MAUI 与 Blazor Hybrid：<https://learn.microsoft.com/dotnet/maui/blazor/>
