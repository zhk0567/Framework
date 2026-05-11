# Preact（Vite + TypeScript）

## 框架简介

**Preact** 是 Jason Miller 创建的 **轻量、与 React API 高度兼容** 的 UI 库，体积通常在数 KB 量级，适合嵌入页、营销站或对包体极度敏感的产品。通过 **`preact/compat`** 可在多数场景下作为 React 的 **drop-in 缩小替换**（仍需验证具体依赖兼容性）。

- 官方网站：<https://preactjs.com/>
- 源码：<https://github.com/preactjs/preact>

## 在本仓库中的角色

本目录基于 **Vite 官方 `preact-ts` 模板**，扩展为与其它前端一致的**能力展台**单页：在相同需求下对比 **Preact 与 React** 的写法、依赖体积与开发体验。

## 技术栈

| 层级 | 选型 |
|------|------|
| 运行时 | Preact 10.x |
| 构建 | Vite 8、`@preact/preset-vite` |
| 语言 | TypeScript |

## 核心概念与特点

| 维度 | 说明 |
|------|------|
| API 兼容 | `h`、组件、`hooks` 等与 React 接近，迁移成本相对低。 |
| 体积 | 核心远小于 React DOM + Scheduler 组合。 |
| 差异点 | 事件合成、某些边缘生命周期与 React 并非 100% 一致；复杂库需查兼容表。 |
| compat 层 | 需要运行依赖 React 内部 API 的库时，常用 `preact/compat` 桥接。 |

## 优缺点（学习向）

**优点**：小、快、与 React 技能复用度高。  
**缺点**：生态默认仍以 React 为主；大型应用需评估第三方库兼容。

## 环境要求

- Node.js 建议 LTS；**仅在本目录** `npm install`。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Preact'
npm install
npm run dev
```

终端会打印本地 URL（默认多为 **5173**）。

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器 |
| `npm run build` / `npm run preview` | 构建与预览 |

## 与仓库内其它子项目对照

- **React**：同构 JSX 心智；对照 `Front-end/React` 目录。
- **Inferno**：同为「小而快」，但 API 对齐 React 的程度与构建链不同。

## 延伸阅读

- Preact 与 React 差异：<https://preactjs.com/guide/v10/differences-to-react>
