# Back-end / Node / Restify

## 框架简介

**Restify** 专注于构建 **严格的 REST API 服务**：内置 DTrace/审计、版本化路由、内容协商与规范化错误体等能力，在 **Node.js 微服务** 与 **API 网关** 场景曾有广泛使用。API 风格偏「显式 HTTP 语义」，与「全功能 MVC」框架取舍不同。

- 项目文档与发布说明：以 npm 包内 `README` 及 <https://github.com/restify/node-restify> 为准
- 源码：<https://github.com/restify/node-restify>

## 在本仓库中的角色

本目录为**独立 Node 工程**：依赖与锁文件仅存在于 `Back-end/Node/Restify`，请勿在仓库根目录执行 `npm install`。

## 这个子项目想说明什么（Restify 特点）

| 能力 | 在本示例中的位置 |
|------|------------------|
| **REST 风格路由** | `server.get('/api/health', …)` |
| **JSON 响应** | `res.json` |
| **呈现页** | 对 `/` 与 `/index.html` 读取 `public/index.html`（避免各版本静态插件差异） |

## 环境要求

- Node.js **20+**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Restify'
npm install
npm run dev
```

呈现页：**http://127.0.0.1:3014/**

端口冲突时：

```powershell
$env:PORT = '3024'
npm run dev
```

## 与仓库内其它后端对照

与 Fastify、Express 等一致提供 **`GET /api/health`**；默认端口 **3014**（见根目录 [README.md](../../../README.md)）。
