# React Native（react-native-web · Vite + TypeScript）

## 框架简介

**React Native** 由 Meta 维护，用 **React 组件模型** 构建 **iOS / Android** 原生视图树。**react-native-web** 则在浏览器中提供 **`View` / `Text` / `Pressable` / `FlatList`** 等兼容实现，使大量 RN 代码可复用到 Web（布局与样式仍受 CSS 与浏览器差异约束）。

- React Native：<https://reactnative.dev/>
- react-native-web：<https://necolas.github.io/react-native-web/>

## 在本仓库中的角色

本目录在 **浏览器** 中用 **Vite + react-native-web** 跑展台，便于**无 Android / iOS SDK** 时对照布局与交互；**真机、OTA、原生预构建**请优先对照 **`Front-end/Expo`** 或官方 CLI 生成的带 `android/`、`ios/` 的工程。

## 技术栈

| 层级 | 选型 |
|------|------|
| UI | `react-native-web` |
| 构建 | Vite 8 |
| 语言 | TypeScript |

## 环境要求

- Node.js 建议 LTS；**仅在本目录** `npm install`。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\React-Native'
npm install
npm run dev
```

## 默认开发与预览端口

- **5204**（见 `vite.config.ts`）。

## 与仓库内其它子项目对照

- **Expo**：完整 RN 工具链与设备调试路径。
- **Flutter**：非 JS 技术栈跨端，对照 Widget 模型。

## 延伸阅读

- RN 样式与布局：<https://reactnative.dev/docs/style>
