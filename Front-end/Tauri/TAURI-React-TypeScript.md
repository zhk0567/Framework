# Tauri（Rust + React · Vite + TypeScript）

## 框架简介

**Tauri** 用 **Rust** 编写**轻量桌面壳**，在窗口中嵌入系统 **WebView**（Windows WebView2、macOS WKWebView、Linux WebKitGTK 等），前端仍使用 **HTML/CSS/JS** 技术栈。与 **Electron**（打包 Chromium）相比，Tauri 往往 **包体更小、内存占用更低**，但需处理各平台 WebView 差异与 **Rust 工具链**。

- 官方网站：<https://tauri.app/>
- 2.x 文档：<https://v2.tauri.app/>

## 在本仓库中的角色

**Tauri 2** + **Vite**（默认 **`http://localhost:1420`**）+ **React**。含示例 **`greet`**：前端 **`invoke`** 调用 Rust 侧 **`#[tauri::command]`**，演示 **IPC 与类型桥**。

## 技术栈

| 层级 | 选型 |
|------|------|
| 壳 | Rust、Tauri 2 |
| 渲染 | React + Vite 8 + TypeScript |

## 环境要求

- **Node.js**（`npm install`）。
- **Rust** 与各平台 [前置依赖](https://tauri.app/start/prerequisites/)。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Tauri'
npm install
npm run tauri dev
```

## 构建说明

- 可先 **`npm run build`**（仅 Vite）自检前端资源。
- **`npm run tauri build`** 依赖本机 Rust、链接器与图标等资源；失败时请根据终端日志与 [构建文档](https://tauri.app/develop/) 排查。

## 与仓库内其它子项目对照

- **Electron**：Chromium 壳，生态成熟、包体更大；见 `Front-end/Electron`。

## 延伸阅读

- 命令与权限：<https://v2.tauri.app/develop/calling-rust/>
