# Turbo（Hotwire · Vite + TypeScript）

## 框架简介

**Turbo**（**Hotwire** 套件的一部分，来自 37signals / Basecamp）通过 **Drive、Frames、Streams** 等机制减少自定义 JavaScript：在多数场景下用**整页或局部 HTML 导航**替代手写 SPA 路由。与 **Rails 7+ 默认栈**深度整合，也可在其它后端前独立使用 **Turbo 前端包**。

- 官方文档：<https://turbo.hotwired.dev/>
- Hotwire 总览：<https://hotwired.dev/>

## 在本仓库中的角色

本目录在 **Vite** 中引入 **`@hotwired/turbo`**，并用开发中间件模拟 **HTML 片段/流** 响应，演示 **Turbo Frames / Turbo Streams** 思路，与 **Htmx、Unpoly** 对照「**HTML 优先**」的不同 API。

## 技术栈

| 层级 | 选型 |
|------|------|
| 导航与片段 | `@hotwired/turbo` 8.x |
| 构建 | Vite 8 + 开发中间件 |
| 语言 | TypeScript |

## 核心概念与特点

| 概念 | 说明 |
|------|------|
| Turbo Drive | 拦截链接与表单，局部替换 body，保留 head 与资源。 |
| Turbo Frames | 页面内独立导航区域，失败时可降级为整页。 |
| Turbo Streams | 服务端推送 `<turbo-stream>` 指令增删改 DOM。 |
| 与 SPA 对比 | 减少客户端路由状态机；复杂交互可能仍需 **Stimulus**（本仓库未单独建子项目）。 |

## 优缺点（学习向）

**优点**：与「服务端渲染 + 少量 JS」路线契合；Rails 团队默认选型之一。  
**缺点**：非 Rails 栈时示例与社区讨论相对少；重度交互需评估边界。

## 环境要求

- Node.js 建议 LTS；**仅在本目录** `npm install`。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Turbo'
npm install
npm run dev
```

## 默认开发与预览端口

- **5196**（`vite.config.ts` 固定）。

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器 |
| `npm run build` / `npm run preview` | 构建与预览 |

## 与仓库内其它子项目对照

- **Unpoly / htmx**：三种均为 HTML-over-the-wire 家族，建议同一需求各实现一遍。
- **Full-stack/Remix**：若需要更强数据嵌套与错误边界，可对比 Remix 的嵌套路由模型。

## 延伸阅读

- Turbo 手册：<https://turbo.hotwired.dev/handbook/introduction>
