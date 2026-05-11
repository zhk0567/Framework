# htmx（Vite + TypeScript）

## 框架简介

**htmx** 扩展 HTML 属性（`hx-get`、`hx-target`、`hx-swap` 等），让元素通过 **HTTP 请求获取 HTML 片段**并替换 DOM，从而用**声明式**方式完成传统 SPA 才做的局部刷新。作者 Carson Gross 强调「**超媒体作为应用状态**（HATEOAS）」：状态在服务端模板与链接中演化，客户端脚本保持极薄。

- 官方网站：<https://htmx.org/>
- 文档：<https://htmx.org/docs/>

## 在本仓库中的角色

本目录在 **Vite** 中引入 **`htmx.org`**，并通过开发中间件提供 **`/api/htmx/*`** 的 **HTML 片段**，模拟后端驱动 UI。与 **`Unpoly`**、**`Turbo`** 组成「**HTML-over-the-wire**」对照 trio。

## 技术栈

| 层级 | 选型 |
|------|------|
| 片段驱动 | htmx 2.x |
| 构建 | Vite 8 + 开发中间件 |
| 语言 | TypeScript |

## 核心概念与特点

| 概念 | 说明 |
|------|------|
| `hx-*` 属性 | 描述请求方法、URL、目标容器、交换策略、触发器。 |
| Out-of-band | `hx-swap-oob` 允许响应中携带多个片段更新不同区域。 |
| WebSocket / SSE | 扩展事件源与流式更新（以文档为准）。 |
| 与 Alpine | 常组合：htmx 管网络与片段，Alpine 管局部动画与微状态（本仓库分目录便于单独学习）。 |

## 优缺点（学习向）

**优点**：极薄客户端、与 REST/模板后端自然结合、学习曲线低。  
**缺点**：复杂客户端状态机需自律；类型体验依赖约定与部分辅助库。

## 环境要求

- Node.js 建议 LTS；**仅在本目录** `npm install`。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Htmx'
npm install
npm run dev
```

## 默认开发与预览端口

- **5194**（`vite.config.ts` 固定）。

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器（含片段 API） |
| `npm run build` / `npm run preview` | 构建与预览 |

## 与仓库内其它子项目对照

- **Unpoly、Turbo**：同一范式不同库；建议对照同一表单提交需求的写法。
- **React SPA**：评估何时「片段够用」、何时必须上组件框架。

## 延伸阅读

- htmx 与 Django / Rails 示例：<https://htmx.org/examples/>
