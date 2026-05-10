# Framework

多技术栈对照学习的**样板仓库**：每个子目录是**独立工程**（Node 系自带 `package.json`；Go 系自带 `go.mod`），依赖只装在该子目录内；**不要在仓库根目录执行 `npm install`**（根目录不设 Node 工程）。

**目录约定**

- **前端**：在 [`Front-end/`](Front-end) 下按框架分子目录（React / Vue / Svelte），每个子目录一个 Vite + TypeScript 工程。  
- **后端**：在 [`Back-end/`](Back-end) 下按语言再分子目录——[`Back-end/Node/`](Back-end/Node) 存放 **Fastify** 与 **NestJS**；[`Back-end/Go/`](Back-end/Go) 存放各 **Go** 框架示例。这样一眼能区分「npm 栈」与「Go 模块」。

---

## 本仓库适合做什么

| 用途 | 说明 |
|------|------|
| 前端对照 | 在同一类工具链（Vite + TypeScript）下对比 **React**、**Vue** 与 **Svelte** 的写法与能力差异。 |
| 后端对照 | **Node**（`Back-end/Node`）与 **Go**（`Back-end/Go`）多套实现路由形态对齐（`/api/*`），便于对照请求、响应头与 JSON。 |
| 复制起步 | 需要某一栈时，直接复制对应子目录作为最小可运行起点。 |

---

## 环境要求

- **Node.js**：建议当前 LTS（[`Front-end`](Front-end) 与 [`Back-end/Node`](Back-end/Node) 需要）。  
- **Go**：1.21+（[`Back-end/Go`](Back-end/Go) 下各子目录均自带 `go.mod`；安装后可用 `go version` 自检）。  
- **包管理**：前端与 Node 后端示例使用 **npm**；若用 pnpm / yarn，请在各子目录内自行替换。  
- **终端**：命令示例针对 **Windows PowerShell**；执行前请 `Set-Location` 到对应子目录。

---

## 子项目一览

### 前端（`Front-end/`）

| 子项目 | 技术栈 | 默认入口 | 说明文档 |
|--------|--------|----------|----------|
| [Front-end/React](Front-end/React) | React 19 · Vite · TypeScript | `npm run dev` 后见终端 URL | [REACT-Vite-TypeScript.md](Front-end/React/REACT-Vite-TypeScript.md) |
| [Front-end/Vue](Front-end/Vue) | Vue 3 · Vite · TypeScript | 同上 | [VUE-Vite-TypeScript.md](Front-end/Vue/VUE-Vite-TypeScript.md) |
| [Front-end/Svelte](Front-end/Svelte) | Svelte 5 · Vite · TypeScript | 同上 | [SVELTE-Vite-TypeScript.md](Front-end/Svelte/SVELTE-Vite-TypeScript.md) |

### 后端 · Node（`Back-end/Node/`）

| 子项目 | 技术栈 | 默认入口（本地） | 说明文档 |
|--------|--------|------------------|----------|
| [Back-end/Node/Fastify](Back-end/Node/Fastify) | Fastify 5 · TypeScript | 呈现页 `http://127.0.0.1:3000/` | [FASTIFY-Node-TypeScript.md](Back-end/Node/Fastify/FASTIFY-Node-TypeScript.md) |
| [Back-end/Node/NestJS](Back-end/Node/NestJS) | NestJS 11 · TypeScript | 呈现页 `http://127.0.0.1:3001/` · Swagger `http://127.0.0.1:3001/docs` | [NESTJS-Node-TypeScript.md](Back-end/Node/NestJS/NESTJS-Node-TypeScript.md) |

### 后端 · Go（`Back-end/Go/`）

| 子项目 | 框架 | 默认 URL | 说明文档 |
|--------|------|-----------|----------|
| [Back-end/Go/Gin](Back-end/Go/Gin) | Gin | `http://127.0.0.1:3002/` | [GIN-Go.md](Back-end/Go/Gin/GIN-Go.md) |
| [Back-end/Go/Fiber](Back-end/Go/Fiber) | Fiber | `http://127.0.0.1:3003/` | [FIBER-Go.md](Back-end/Go/Fiber/FIBER-Go.md) |
| [Back-end/Go/Echo](Back-end/Go/Echo) | Echo | `http://127.0.0.1:3004/` | [ECHO-Go.md](Back-end/Go/Echo/ECHO-Go.md) |
| [Back-end/Go/Chi](Back-end/Go/Chi) | chi | `http://127.0.0.1:3005/` | [CHI-Go.md](Back-end/Go/Chi/CHI-Go.md) |
| [Back-end/Go/Beego](Back-end/Go/Beego) | Beego v2 | `http://127.0.0.1:3006/` | [BEEGO-Go.md](Back-end/Go/Beego/BEEGO-Go.md) |
| [Back-end/Go/Iris](Back-end/Go/Iris) | Iris | `http://127.0.0.1:3007/` | [IRIS-Go.md](Back-end/Go/Iris/IRIS-Go.md) |
| [Back-end/Go/Go-zero](Back-end/Go/Go-zero) | go-zero | `http://127.0.0.1:3008/` | [GOZERO-Go.md](Back-end/Go/Go-zero/GOZERO-Go.md) |
| [Back-end/Go/Kratos](Back-end/Go/Kratos) | Kratos | `http://127.0.0.1:3009/` | [KRATOS-Go.md](Back-end/Go/Kratos/KRATOS-Go.md) |
| [Back-end/Go/Go-kit](Back-end/Go/Go-kit) | go-kit | `http://127.0.0.1:3010/` | [GOKIT-Go.md](Back-end/Go/Go-kit/GOKIT-Go.md) |

---

## 顶层目录示意

```text
Framework/
├── Front-end/
│   ├── React/
│   ├── Vue/
│   └── Svelte/
└── Back-end/
    ├── Node/
    │   ├── Fastify/
    │   └── NestJS/
    └── Go/
        ├── Gin/
        ├── Fiber/
        ├── Echo/
        ├── Chi/
        ├── Beego/
        ├── Iris/
        ├── Go-zero/
        ├── Kratos/
        └── Go-kit/
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

构建、预览与各子项目脚本见对应目录下的说明文档（如 `REACT-Vite-TypeScript.md`、`FASTIFY-Node-TypeScript.md` 等）。

### 后端 · Node

**Fastify**（默认端口 `3000`）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Fastify'
npm install
npm run dev
```

**NestJS**（默认端口 `3001`）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\NestJS'
npm install
npm run start:dev
```

### 后端 · Go

在 **`Back-end/Go/<框架名>`** 下执行（示例为 Gin，默认端口 `3002`）：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Go\Gin'
go mod tidy
go run .
```

浏览器访问 `http://127.0.0.1:3002/`。其它框架为同级目录（Fiber、Echo、Chi、Beego、Iris、Go-zero、Kratos、go-kit），同样执行 `go mod tidy` 与 `go run .`；**默认端口 3003–3010** 见上表或各目录内的 `*-Go.md`。

---

## 约定与提示

- **产物位置**：`node_modules`、`dist` 等只出现在各前端与 `Back-end/Node` 子目录内；`Back-end/Go` 下各模块在首次 `go mod tidy` 后生成 `go.sum`，`go build` 可在该子目录产出可执行文件。  
- **文档分层**：本文件只做**总览**；API、目录结构、设计取舍写在各子目录的**按栈命名说明**（如 `VUE-Vite-TypeScript.md`、`NESTJS-Node-TypeScript.md`、`GIN-Go.md`），便于在全局搜索中一眼识别。  
- **跨栈对照（前端）**：React / Vue / Svelte 示例均为纯前端单页、无强制共用后端；对照时可关注状态与副作用、模板与内置能力（如 Portal / Teleport、Svelte transition 等）及各子项目说明文档中的章节。

---

## 后续可扩展（可选）

- 在各 `Front-end/*` 中用环境变量配置 Vite `dev` 代理，指向任一后端子项目。  
- 按子项目独立补充 ESLint / Prettier 或 CI。  
- 新增其它前端或后端目录时，继续沿用「**语言层目录** + **具体框架子目录**」模式即可。
