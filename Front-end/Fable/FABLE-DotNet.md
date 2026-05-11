# Fable（F# → JavaScript）

## 框架简介

**Fable** 是一个 **F# 到 JavaScript** 的编译器：让你在浏览器或 Node 侧复用 **F# 的类型推断、代数数据类型、模式匹配** 等语言特性，同时产出可读、可调试的 JS（或进一步交给打包工具）。常与 **Elmish**（MVU 模式）、**Feliz**（React 绑定）或 **Vite** 组合构建 SPA。

- 官方网站：<https://fable.io/>
- 文档：<https://docs.fable.io/>

## 在本仓库中的角色

本目录演示 **最小 DOM 示例**：`src/App.fs` 经 Fable 编译为 `dist/App.js`，由 `index.html` 引用；用于与 **TypeScript/React** 子目录对照「函数式语言在前端的落地形态」。

## 技术栈

| 层级 | 选型 |
|------|------|
| 语言 | F# |
| 编译 | `dotnet fable` |
| 本地预览 | Vite / npm 脚本（见 `package.json`） |
| 运行时依赖 | **.NET SDK**（建议 8+）用于 `dotnet tool restore` 与 Fable CLI |

## 环境要求

- 安装 [.NET SDK](https://dotnet.microsoft.com/download)。
- **Node.js**（用于 `npm install` 与 `npm run dev`）。

## 准备（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Fable'
dotnet tool restore
npm install
```

## 编译与预览

```powershell
dotnet fable . -o dist --noCache
npm run dev
```

`index.html` 引用 `./dist/App.js`（输出文件名与 Fable 模块名一致）。若需完整 SPA，可在此基础上接入 **Feliz**、**Elmish** 或 Vite 多入口。

## 与仓库内其它子项目对照

- **TypeScript**：Fable 产出 JS 后类型边界在 F# 侧；TS 子项目在 TS 侧。
- **Blazor**：同为 .NET 系，但 Blazor 走 **WASM 或 Server**，非 Fable 的 **F#→JS** 路径。

## 延伸阅读

- Fable 与 React：<https://fable.io/docs/your-fable-project/use-a-fable-library.html>
