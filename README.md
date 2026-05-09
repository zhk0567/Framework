# Framework

多技术栈对照学习的**样板仓库**：每个子目录是**独立工程**（自带 `package.json` 与脚本），依赖只装在子项目里；**不要在仓库根目录执行 `npm install`**（根目录不设 Node 工程）。

---

## 本仓库适合做什么

| 用途 | 说明 |
|------|------|
| 前端对照 | 在同一类工具链（Vite + TypeScript）下对比 **React**、**Vue** 与 **Svelte** 的写法与能力差异。 |
| 后端对照 | 在 `Back-end` 下并列 **Fastify** 与 **NestJS**，路由形态对齐，便于对照请求与文档。 |
| 复制起步 | 需要某一栈时，直接复制对应子目录作为最小可运行起点。 |

---

## 环境要求

- **Node.js**：建议当前 LTS（与 Vite 7+ / 8 及示例子项目兼容）。  
- **包管理**：下文命令使用 **npm**；若用 pnpm / yarn，请在各子目录内自行替换。  
- **终端**：命令示例针对 **Windows PowerShell**；执行前请 `Set-Location` 到对应子目录。

---

## 子项目一览

| 子项目 | 技术栈 | 默认入口（本地） | 详细文档 |
|--------|--------|------------------|----------|
| [Front-end/React](Front-end/React) | React 19 · Vite · TypeScript | `npm run dev` 后见终端 URL | [README](Front-end/React/README.md) |
| [Front-end/Vue](Front-end/Vue) | Vue 3 · Vite · TypeScript | 同上 | [README](Front-end/Vue/README.md) |
| [Front-end/Svelte](Front-end/Svelte) | Svelte 5 · Vite · TypeScript | 同上 | [README](Front-end/Svelte/README.md) |
| [Back-end/Fastify](Back-end/Fastify) | Fastify 5 · TypeScript | 呈现页 `http://127.0.0.1:3000/` | [README](Back-end/Fastify/README.md) |
| [Back-end/NestJS](Back-end/NestJS) | NestJS 11 · TypeScript | 呈现页 `http://127.0.0.1:3001/` · Swagger `http://127.0.0.1:3001/docs` | [README](Back-end/NestJS/README.md) |

顶层目录示意：

```text
Framework/
├── Front-end/
│   ├── React/
│   ├── Vue/
│   └── Svelte/
└── Back-end/
    ├── Fastify/
    └── NestJS/
```

---

## 快速开始

将下面路径中的盘符与目录换成你本机克隆后的**仓库根路径**（示例为 `f:\Study\Framework`）。

### 前端

**React**

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\React'
npm install
npm run dev
```

**Vue**

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Vue'
npm install
npm run dev
```

**Svelte**

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Svelte'
npm install
npm run dev
```

构建、预览与各子项目脚本见对应目录 `README.md`。

### 后端

**Fastify**（默认端口 `3000`）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Fastify'
npm install
npm run dev
```

**NestJS**（默认端口 `3001`，与 Fastify 错开）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\NestJS'
npm install
npm run start:dev
```

---

## 约定与提示

- **产物位置**：`node_modules`、`dist` 等只出现在各子项目目录内，便于删除与横向对比。  
- **文档分层**：本文件只做**总览**；API、目录结构、设计取舍写在各子目录的 `README.md`。  
- **跨栈对照（前端）**：React / Vue / Svelte 示例均为纯前端单页、无强制共用后端；对照时可关注状态与副作用、模板与内置能力（如 Portal / Teleport、Svelte transition 等）及各子项目 README 中的章节。

---

## 后续可扩展（可选）

- 在各 `Front-end/*` 中用环境变量配置 Vite `dev` 代理，指向任一后端子项目。  
- 按子项目独立补充 ESLint / Prettier 或 CI。  
- 新增其他前端目录（如 Solid、Qwik）时，继续沿用「一目录一工程」模式即可。
