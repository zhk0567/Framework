# Inferno（Vite + TypeScript）

## 框架简介

**Inferno** 是一个追求**极致运行时性能**的类 React 库，API 与 React 高度相似（组件、生命周期、`setState` 等），但内部实现针对**小体积与快速更新路径**做了大量优化，适合对帧率与包体敏感的场景（如部分游戏 HUD、数据密集型列表）。项目最初由 Dominic Gannaway 等人推动，社区规模小于 React，但思路对理解「虚拟 DOM 可以怎样做得更轻」很有参考价值。

- 官方网站与文档：<https://www.infernojs.org/>
- 源码与议题：<https://github.com/infernojs/inferno>

Inferno 使用与 React 类似的 **JSX**，但默认需要 **Babel** 将 JSX 编译为 `Inferno.createVNode` 调用；本仓库通过 **`vite-plugin-babel`** + **`babel-plugin-inferno`** 接入 Vite 开发体验。

## 在本仓库中的角色

本目录演示：**在 Vite 8 上跑 Inferno 9**，用 TypeScript 编写 `.tsx`，并与仓库内 **React / Preact** 等「JSX 系」对照，观察构建链（Babel 插件）与运行时差异。

## 技术栈

| 层级 | 选型 |
|------|------|
| 运行时 | Inferno 9.x |
| 构建 | Vite 8、`vite-plugin-babel` |
| 编译 | `@babel/core`、`babel-plugin-inferno`、`@babel/preset-typescript` |
| 语言 | TypeScript |

## 核心概念与特点

| 维度 | 说明 |
|------|------|
| 与 React 的关系 | API 刻意接近，便于迁移或对比；**不是** drop-in 替换，hooks 模型等与 React 18+ 并不一致。 |
| JSX 编译 | 必须使用 `babel-plugin-inferno`，否则 JSX 会按 React 语义生成错误调用。 |
| 性能取向 | 更新路径、对象分配等偏保守，换取更可控的渲染成本。 |
| 生态 | 路由、状态管理等周边少于 React，复杂应用常需自搭或选用小众库。 |

## 本目录在演示什么

- 通过 Vite 开发服务器热更新，编辑 `src` 下 Inferno 组件即可观察行为。
- 与 `Front-end/React`、`Front-end/Preact` 并排打开，可对比**同一类 UI 需求**下三种 JSX 运行时的写法与包体。

## 环境要求

- **Node.js**：建议当前 LTS（与其它 `Front-end/*` 一致）。
- **包管理**：本目录使用 **npm**；安装与脚本**仅在本目录**执行，勿在仓库根目录 `npm install`。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Inferno'
npm install
npm run dev
```

浏览器打开终端中打印的本地地址。

## 默认开发与预览端口

- **5190**（`vite.config.ts` 与 `package.json` 中脚本固定，与其它扩展前端错开）。

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器（Vite + Babel + Inferno） |
| `npm run build` | 生产构建 |
| `npm run preview` | 预览构建结果（端口同 5190） |

## 与仓库内其它子项目对照

- **React / Preact**：同为 JSX 组件模型；React 生态最大，Preact 强调小体积，Inferno 强调更新路径性能。
- **Solid**：非虚拟 DOM 细粒度响应式，与 Inferno 的优化思路不同，可对照阅读。

## 延伸阅读

- Inferno 官方文档：<https://www.infernojs.org/docs/guides/installation>
- Babel 与 Vite 配合：<https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react-babel>（思路类似，插件不同）
