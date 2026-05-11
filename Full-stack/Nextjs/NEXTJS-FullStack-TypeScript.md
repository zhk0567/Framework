# Next.js 全栈示例

## 框架简介

**Next.js** 由 Vercel 主导开发，是基于 **React** 的 **全栈与元框架**：提供**文件系统路由**、**服务端组件（RSC）**、**Route Handlers**、**中间件**、**图片与字体优化**、**增量静态再生成（ISR）** 等能力，覆盖从静态站点到动态 SSR/Edge 的多种部署形态。当前主线为 **App Router**（`app/` 目录），与旧 **Pages Router** 并存但官方推荐新项目以 App Router 为主。

- 官方文档：<https://nextjs.org/docs>
- 学习路线：<https://nextjs.org/learn>

## 在本仓库中的角色

本目录为 **Next.js 15 · App Router · React 19 · TypeScript** 应用，位于 **`Full-stack/`**（与 `Front-end/` 下纯 Vite SPA 分开存放）。用于对照：同一子工程内既有 **页面** 也有 **HTTP API**（Route Handler）。

## 技术栈

- **框架**：Next.js 15.x（`app/` 目录约定；具体版本以 `package-lock.json` 为准）
- **UI**：React 19
- **语言**：TypeScript
- **本示例未使用**：Tailwind、ORM、数据库（保持与其它前端子项目一致的「无后端依赖」边界；API 为内存 JSON）
- **遥测**：Next 构建时可能提示匿名遥测；若需关闭可在命令前设置环境变量 `NEXT_TELEMETRY_DISABLED=1`（见 [Next.js 文档](https://nextjs.org/telemetry)）。

## 与其它子项目的关系

- **端口**：开发/生产启动脚本使用 **`-p 3030`**，避免与 `Back-end/Node/Fastify`（`3000`）、`NestJS`（`3001`）、`Back-end/Go/*`（`3002`–`3010`）、其它 `Back-end/Node/*`（`3011`–`3019`）冲突。
- **未收录的全栈/后端名字**：见仓库根目录 [FRAMEWORK-GAP-LIST.md](../../FRAMEWORK-GAP-LIST.md)。

## 快速开始（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Full-stack\Nextjs'
npm install
npm run dev
```

浏览器打开：**http://127.0.0.1:3030/**  
首页会请求同源的 **GET /api/demo**，返回 JSON（全栈最小闭环）。

生产构建与启动：

```powershell
npm run build
npm run start
```

## 目录结构（主要）

```text
Full-stack/Nextjs/
├── app/
│   ├── layout.tsx          # 根布局与 metadata
│   ├── page.tsx            # 首页（本示例为 Client Component，演示 fetch API）
│   ├── globals.css
│   └── api/demo/route.ts   # Route Handler：GET JSON
├── next.config.ts
├── package.json
└── NEXTJS-FullStack-TypeScript.md
```

## 本页在演示什么

- **App Router**：`app/page.tsx` 作为路由 `/` 的 UI 入口。
- **Route Handler**：`app/api/demo/route.ts` 导出 `GET`，与页面同部署、同进程。
- **客户端数据获取**：首页使用 `'use client'` + `useEffect` 调用 `/api/demo`（不依赖写死绝对 URL，换端口仍可用）。

## 与仓库总览的关系

仓库根说明见：[../../README.md](../../README.md)。纯 React + Vite 对照见：[../Front-end/React/REACT-Vite-TypeScript.md](../Front-end/React/REACT-Vite-TypeScript.md)。
