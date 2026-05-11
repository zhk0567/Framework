# Electron（Vite + React + TypeScript）

## 框架简介

**Electron** 由 GitHub（现微软生态）推广，将 **Chromium** 与 **Node.js** 打包为**桌面应用**：渲染进程跑 Web 技术栈，主进程可访问系统 API 与文件系统。安全模型上需重视 **contextIsolation**、**preload**、**CSP** 与 **自动更新** 等议题。

- 官方网站：<https://www.electronjs.org/>
- 安全指南：<https://www.electronjs.org/docs/latest/tutorial/security>

## 在本仓库中的角色

**Chromium 壳 + Vite 渲染进程（React）**。入口 **`electron.cjs`**：开发态加载 **`http://127.0.0.1:5201`**；生产由 **`vite build`** 输出到 **`dist/`** 后以 `file://` 打开（本目录**未**内置 `electron-builder`，可按需接入打包与签名）。

## 技术栈

| 层级 | 选型 |
|------|------|
| 壳层 | Electron |
| 渲染 | React + Vite 8 |
| 语言 | TypeScript |

## 环境要求

- Node.js 建议 LTS；**仅在本目录** `npm install`。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Electron'
npm install
npm run dev
```

## 默认端口

- Vite 开发服务器 **5201**（见 `vite.config.ts`）。

## 与仓库内其它子项目对照

- **Tauri**：Rust + 系统 WebView，包体通常更小；见 `Front-end/Tauri`。

## 延伸阅读

- 进程模型：<https://www.electronjs.org/docs/latest/tutorial/process-model>
