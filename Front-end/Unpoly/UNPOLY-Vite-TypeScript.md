# Unpoly（Vite + TypeScript）

## 框架简介

**Unpoly** 是一个 **HTML-over-the-wire / 渐进增强** 库：通过 `up-follow`、`up-target`、`up-href` 等属性，让链接与表单在**不整页刷新**的情况下替换页面中的局部片段。哲学是「**服务器返回 HTML 片段**」，浏览器只负责拼接与历史栈管理，适合 **Rails、Django、Laravel** 等模板后端同构演进。

- 官方网站：<https://unpoly.com/>
- 源码：<https://github.com/unpoly/unpoly>

## 在本仓库中的角色

入口引入 **`unpoly`**；Vite **开发/预览中间件**提供 **`/api/unpoly/*`** 的 **HTML 片段**，模拟后端片段响应。与 **`Front-end/Htmx`**、**`Turbo`** 同属「**少写 SPA、多靠片段**」对照组。

## 技术栈

| 层级 | 选型 |
|------|------|
| 片段驱动 | `unpoly` 3.x |
| 构建 | Vite 8 + 自定义中间件（仅开发态） |
| 语言 | TypeScript |

## 核心概念与特点

| 概念 | 说明 |
|------|------|
| 层叠更新 | `up-target` 指定被替换的 CSS 选择器区域。 |
| 历史与缓存 | 内置对浏览器历史、缓存与失败回退的处理（以文档为准）。 |
| 与 htmx 对比 | 二者均为 HTML 优先；API 形状与默认行为不同，可并排试写同一需求。 |
| 生产注意 | 本仓库中间件仅方便本地学习；上线需接入真实模板路由与鉴权。 |

## 优缺点（学习向）

**优点**：对服务端模板友好、学习曲线低于完整 SPA 框架。  
**缺点**：复杂客户端状态机仍需纪律；类型化不如 TSX 中心方案直观。

## 环境要求

- Node.js 建议 LTS；**仅在本目录** `npm install`。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Unpoly'
npm install
npm run dev
```

## 默认开发与预览端口

- **5195**（`vite.config.ts` 固定）。

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器（含片段 API 中间件） |
| `npm run build` / `npm run preview` | 构建与预览 |

## 与仓库内其它子项目对照

- **Htmx**、**Turbo**：同一技术族；对照属性命名与缓存策略。
- **React SPA**：若交互极度复杂，可评估是否迁移到组件 SPA。

## 延伸阅读

- Unpoly 与表单：<https://unpoly.com/up.form>
