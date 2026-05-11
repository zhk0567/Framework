# Qwik（Qwik City + Vite + TypeScript）

## 框架简介

**Qwik** 由 Builder.io 推动，核心叙事是 **可恢复性（Resumability）**：在服务端完成序列化后，客户端**不必整页 hydration** 即可从断点「恢复」交互，从而改善首屏与 TTI。配套元框架 **Qwik City** 提供基于文件系统的路由、布局与端点，开发体验接近 **Next/Nuxt**，但底层执行模型不同（强调懒执行与细粒度代码分割）。

- 官方网站：<https://qwik.dev/>
- 源码：<https://github.com/QwikDev/qwik>

## 在本仓库中的角色

本目录为 **Qwik City 空白起步模板 + 能力展台页**：入口在 `src/routes/index.tsx`（或同构路由树中对应 index），演示 **loader、action、useSignal** 等与 React 不同的写法，便于与 `Front-end/React` 对照「同样做列表与请求，代码如何拆分」。

## 技术栈

| 层级 | 选型 |
|------|------|
| 框架 | `@builder.io/qwik`、`@builder.io/qwik-city` |
| 构建 | Vite（`qwikVite`、`qwikCity` 插件） |
| 语言 | TypeScript |

## 核心概念与特点

| 概念 | 说明 |
|------|------|
| Resumability | 减少客户端启动时必须下载与执行的 JS 体积。 |
| `$` 懒边界 | 将事件处理器与 UI 片段拆分为可延迟加载的 chunk（以文档与版本为准）。 |
| Qwik City | 文件路由、`layout.tsx`、服务端 `routeLoader$` 等。 |
| 与 React SSR 对比 | React 18+ 有 Selective Hydration；Qwik 从设计目标上更强调**序列化与恢复**路径。 |

## 优缺点（学习向）

**优点**：首包与交互就绪路径有独特优化空间；与 Vite 工具链集成。  
**缺点**：心智模型与生态成熟度仍在追赶 React；团队需阅读官方最佳实践避免误用。

## 环境要求

- **Node.js**：`package.json` 的 `engines` 要求较新（含 **Node 20+** 等），安装前请阅读该文件。
- 依赖**仅在本目录**安装。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Qwik'
npm install
npm start
```

`npm start` 等价于以 **SSR 模式**启动 Vite（见 `package.json`）。浏览器地址以终端输出为准（常见 **5173**）。

## 构建与预览

```powershell
npm run build
npm run preview
```

## 与仓库内其它子项目对照

- **Next.js / Nuxt**（见 `Full-stack/`）：同为文件路由 + SSR 取向，可对比数据获取与部署模型。
- **React**：组件写法部分相似，但状态与事件序列化语义不同，勿混用假设。

## 延伸阅读

- Qwik 概念总览：<https://qwik.dev/docs/concepts/resumable/>
- Qwik City 路由：<https://qwik.dev/docs/qwikcity/overview/>
