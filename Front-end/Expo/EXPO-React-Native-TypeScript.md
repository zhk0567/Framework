# Expo（React Native + TypeScript）

## 框架简介

**Expo** 在 **React Native** 之上提供 **CLI、开发客户端（Expo Go）、原生预构建（prebuild）、EAS Build/Submit** 等工具链，降低原生工程配置门槛。可用 **Expo Router** 做文件系统路由，也可保持经典 React Navigation。`npm run web` 可走 **react-native-web** 在浏览器预览（与纯 RN 真机/模拟器路径不同）。

- 官方网站：<https://expo.dev/>
- 文档：<https://docs.expo.dev/>

## 在本仓库中的角色

本目录基于官方 **blank-typescript** 模板，扩展为 **计数 + 列表** 展台；与 **`Front-end/React-Native`**（偏 `react-native-web` + Vite）对照 **Expo 工具链差异**。

## 技术栈

| 层级 | 选型 |
|------|------|
| 框架 | React Native、Expo SDK |
| 语言 | TypeScript |

## 环境要求

- **Node.js** 建议 LTS；**仅在本目录** `npm install`。
- 真机调试：**Expo Go** 或本机 **Android Studio / Xcode**（`npm run android` / `npm run ios`）。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Expo'
npm install
npm run web
```

## 默认端口

- **`npm run web`** 默认 **5208**（见 `package.json`）。

## 与仓库内其它子项目对照

- **React-Native（Web 宿主）**：本目录偏 Expo 工作流；对照 `Front-end/React-Native`。
- **Ionic / Capacitor**：另一套跨端 Web 技术栈，可对比壳层与插件模型。

## 延伸阅读

- Expo Router：<https://docs.expo.dev/router/introduction/>
