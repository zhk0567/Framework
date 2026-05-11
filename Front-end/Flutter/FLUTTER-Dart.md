# Flutter（Dart）

## 框架简介

**Flutter** 是 Google 开源的 **UI 工具包**：使用 **Dart** 语言与 **Widget** 组合描述界面，通过 **Skia / Impeller** 自绘引擎在目标平台渲染像素，而非依赖各平台原生控件树（与部分「桥接原生组件」方案不同）。同一套代码可编译到 **iOS、Android、Web、Windows、macOS、Linux** 等（具体目标取决于本机 SDK 与 `flutter devices`）。

- 官方网站：<https://flutter.dev/>
- Dart 语言：<https://dart.dev/>

## 在本仓库中的角色

本目录为最小 **「计数 + 列表」** 能力展台，演示 **StatefulWidget**、列表与本地状态；与 **React Native / Expo** 等「JS 生态跨端」对照 **Dart + Widget** 心智。

## 核心概念与特点

| 概念 | 说明 |
|------|------|
| Widget | 一切皆组件；`StatelessWidget` / `StatefulWidget` 描述 UI 与生命周期。 |
| 布局 | `Row`、`Column`、`Flex`、`Stack` 等组合；约束向下传递、尺寸向上汇总。 |
| 状态管理 | 官方 `setState`、以及 Riverpod、Bloc、Provider 等社区方案（本示例保持最小）。 |
| 与 RN 对比 | RN 偏「桥接原生视图」；Flutter 偏「自绘一致 UI」，升级与像素控制路径不同。 |

## 环境要求

- 安装 [Flutter SDK](https://docs.flutter.dev/get-started/install)，并确保 **`flutter` 在 PATH**。
- 可选：Android Studio / Xcode 用于真机与模拟器（本示例可用 **Chrome** 跑 Web）。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Flutter'
flutter pub get
flutter run -d chrome
```

设备列表：

```powershell
flutter devices
```

## 与仓库内其它子项目对照

- **Expo / React-Native**：JS/TS 技术栈跨端；本目录为 Dart 单栈。
- **.NET MAUI**：微软原生跨端栈，见 `Front-end/DotNet-Maui`。

## 延伸阅读

- Flutter 架构概览：<https://docs.flutter.dev/resources/architectural-overview>
