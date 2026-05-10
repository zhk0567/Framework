# Framework

多技术栈对照学习的**样板仓库**：每个子目录是**独立工程**（Node 系自带 `package.json` 与脚本；Go 系自带 `go.mod`），依赖只装在该子目录内；**不要在仓库根目录执行 `npm install`**（根目录不设 Node 工程）。

---

## 本仓库适合做什么

| 用途 | 说明 |
|------|------|
| 前端对照 | 在同一类工具链（Vite + TypeScript）下对比 **React**、**Vue** 与 **Svelte** 的写法与能力差异。 |
| 后端对照 | 在 `Back-end` 下并列 **Fastify**、**NestJS** 与 **Gin（Go）**，路由形态对齐，便于对照请求与文档。 |
| 复制起步 | 需要某一栈时，直接复制对应子目录作为最小可运行起点。 |

---

## 环境要求

- **Node.js**：建议当前 LTS（前端与 Fastify / Nest 子项目需要）。  
- **Go**：1.21+（仅 [Back-end/Gin](Back-end/Gin)；与 `go.mod` 中版本一致；安装后可用 `go version` 自检）。  
- **包管理**：前端与 Node 后端示例使用 **npm**；若用 pnpm / yarn，请在各子目录内自行替换。  
- **终端**：命令示例针对 **Windows PowerShell**；执行前请 `Set-Location` 到对应子目录。

---

## 子项目一览

| 子项目 | 技术栈 | 默认入口（本地） | 说明文档 |
|--------|--------|------------------|----------|
| [Front-end/React](Front-end/React) | React 19 · Vite · TypeScript | `npm run dev` 后见终端 URL | [DOCS.md](Front-end/React/DOCS.md) |
| [Front-end/Vue](Front-end/Vue) | Vue 3 · Vite · TypeScript | 同上 | [DOCS.md](Front-end/Vue/DOCS.md) |
| [Front-end/Svelte](Front-end/Svelte) | Svelte 5 · Vite · TypeScript | 同上 | [DOCS.md](Front-end/Svelte/DOCS.md) |
| [Back-end/Fastify](Back-end/Fastify) | Fastify 5 · TypeScript | 呈现页 `http://127.0.0.1:3000/` | [DOCS.md](Back-end/Fastify/DOCS.md) |
| [Back-end/NestJS](Back-end/NestJS) | NestJS 11 · TypeScript | 呈现页 `http://127.0.0.1:3001/` · Swagger `http://127.0.0.1:3001/docs` | [DOCS.md](Back-end/NestJS/DOCS.md) |
| [Back-end/Gin](Back-end/Gin) | Go · Gin | 呈现页 `http://127.0.0.1:3002/`（`go:embed`） | [DOCS.md](Back-end/Gin/DOCS.md) |

顶层目录示意：

```text
Framework/
├── Front-end/
│   ├── React/
│   ├── Vue/
│   └── Svelte/
└── Back-end/
    ├── Fastify/
    ├── NestJS/
    └── Gin/
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

构建、预览与各子项目脚本见对应目录 `DOCS.md`。

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

**Gin（Go）**（默认端口 `3002`）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Gin'
go mod tidy
go run .
```

浏览器访问 `http://127.0.0.1:3002/`。详见 [Back-end/Gin/DOCS.md](Back-end/Gin/DOCS.md)。

---

## 约定与提示

- **产物位置**：`node_modules`、`dist` 等只出现在各前端 / Node 后端子目录内；Go 子目录会在首次 `go mod tidy` 后生成 `go.sum`，`go build` 可在本目录产出可执行文件，便于删除与横向对比。  
- **文档分层**：本文件只做**总览**；API、目录结构、设计取舍写在各子目录的 `DOCS.md`。  
- **跨栈对照（前端）**：React / Vue / Svelte 示例均为纯前端单页、无强制共用后端；对照时可关注状态与副作用、模板与内置能力（如 Portal / Teleport、Svelte transition 等）及各子项目 `DOCS.md` 中的章节。

---

## 后续可扩展（可选）

- 在各 `Front-end/*` 中用环境变量配置 Vite `dev` 代理，指向任一后端子项目。  
- 按子项目独立补充 ESLint / Prettier 或 CI。  
- 新增其他前端目录（如 Solid、Qwik）时，继续沿用「一目录一工程」模式即可。
