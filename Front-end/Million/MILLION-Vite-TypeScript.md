# Million（Vite + TypeScript · React 编译优化）

## 框架简介

**Million.js** 提供 **`compiler` + 优化运行时**，在保持 **React 兼容 API** 的前提下，尝试将部分 UI 树编译为**更接近细粒度响应式**的更新路径，从而减少不必要的 **Virtual DOM diff** 开销。适合已有 React 技术栈、希望在**热点路径**上实验编译期优化的团队。

- 官方网站：<https://million.dev/>
- 源码：<https://github.com/aidenybai/million>

## 在本仓库中的角色

本目录为 **React 19 + Vite + Million 3** 的展台：演示在 **`vite.config.ts`** 中接入 Million 编译插件后的开发体验，并与 **`Front-end/React`**（无 Million）对照构建配置与运行时差异。

## 技术栈

| 层级 | 选型 |
|------|------|
| UI | React 19 |
| 优化 | `million/compiler`、Million 相关 Babel/Vite 集成（以 `package.json` 为准） |
| 构建 | Vite 8 |
| 语言 | TypeScript |

## 核心概念与特点

| 概念 | 说明 |
|------|------|
| 编译期标记 | 对指定组件或区域启用 Million 的优化路径。 |
| 与 React 关系 | **非**完全替换 React；需按文档包裹或配置 `block` 等 API。 |
| 风险 | 优化边界与第三方库兼容性需实测；升级 React 主版本时需关注 Million 发布说明。 |

## 优缺点（学习向）

**优点**：为 React 项目提供额外性能杠杆；学习资源集中在官方站点。  
**缺点**：相对小众；团队需保留「出问题可回退到纯 React」的策略。

## 环境要求

- Node.js 建议 LTS；**仅在本目录** `npm install`。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Million'
npm install
npm run dev
```

## 默认开发与预览端口

- **5193**（`vite.config.ts` 固定）。

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器 |
| `npm run build` / `npm run preview` | 构建与预览 |

## 与仓库内其它子项目对照

- **React**：同一仓库内先看纯 React 示例，再打开本目录对比配置差异。
- **Preact**：均为「小体积/性能」取向，但技术路径不同。

## 延伸阅读

- Million 与 React 集成：<https://million.dev/docs/install>
