# Back-end / Node / Hapi

## 框架简介

**Hapi**（`@hapi/hapi`）是面向**可配置与插件化**的 Node.js 框架：路由、认证、缓存、日志等能力以 **`server.register`** 插件形式组合，强调**显式配置**与**输入校验**（`joi` 历史生态）。适合需要严格约定与审计轨迹的企业 API。

- 官方网站：<https://hapi.dev/>
- 教程：<https://hapi.dev/tutorials/>

## 在本仓库中的角色

本目录为**独立 Node 工程**：依赖与锁文件仅存在于 `Back-end/Node/Hapi`，请勿在仓库根目录执行 `npm install`。

## 这个子项目想说明什么（Hapi 特点）

| 能力 | 在本示例中的位置 |
|------|------------------|
| **路由表** | `src/server.ts`：`server.route([...])` |
| **静态文件（Inert）** | `@hapi/inert` + `routes.files.relativeTo` + `h.file('index.html')` |
| **JSON 响应** | `GET /api/health`、`GET /api/info` |

## 环境要求

- Node.js **20+**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Hapi'
npm install
npm run dev
```

呈现页：**http://127.0.0.1:3013/**

端口冲突时：

```powershell
$env:PORT = '3023'
npm run dev
```

## 与仓库内其它后端对照

与 Fastify、Express 等一致提供 **`GET /api/health`**；默认端口 **3013**（见根目录 [README.md](../../../README.md)）。
