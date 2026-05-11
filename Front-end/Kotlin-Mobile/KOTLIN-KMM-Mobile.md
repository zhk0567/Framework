# Kotlin Multiplatform Mobile（说明 + 可粘贴源码）

## 框架简介

**Kotlin Multiplatform（KMP）** 允许在 **`commonMain`** 共享业务逻辑与领域模型，在 **`androidMain` / `iosMain`** 等源集接入各平台 API；**Compose Multiplatform** 可在 Android 与 Desktop 等目标共享 UI，**iOS** 上常与 **SwiftUI / UIKit** 互操作。与 **Flutter**（Dart 单栈）或 **React Native**（JS 桥）相比，KMP 强调 **Kotlin 优先** 与 **渐进式共享**。

- 官方文档：<https://kotlinlang.org/docs/multiplatform.html>
- Mobile 入门：<https://kotlinlang.org/docs/multiplatform-mobile-getting-started.html>

## 在本仓库中的角色

典型工程含 **`shared` 源集** + 各端 **UI 壳**。完整 **Gradle + Xcode** 工程由 **Android Studio / KMM 插件向导** 生成，体积大且与本机 SDK 强绑定，故本目录**不提交**完整生成树，仅提供 **`shared/App.kt`** 中可合并的 **`ShowcaseApp` Composable** 片段。

## 推荐步骤（Windows / macOS）

1. 安装 [Android Studio](https://developer.android.com/studio) 与 [KMP 插件](https://kotlinlang.org/docs/multiplatform-mobile-getting-started.html)。  
2. 使用向导创建 **Kotlin Multiplatform → Mobile** 模板（可放在本目录旁任意路径）。  
3. 将本目录 **`shared/App.kt`** 中的 **`ShowcaseApp`** 合并到向导生成的 **`shared/src/commonMain/kotlin`**，并在 Android / iOS 入口调用。

## 与仓库内其它子项目对照

- **Flutter**：单语言 UI + 自绘；KMP 可与原生 UI 更细粒度混编。
- **.NET MAUI**：微软跨端栈；见 `Front-end/DotNet-Maui`。

## 延伸阅读

- Compose Multiplatform：<https://www.jetbrains.com/lp/compose-multiplatform/>
