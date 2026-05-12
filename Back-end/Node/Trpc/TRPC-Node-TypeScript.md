# Back-end / Node / tRPC

## 框架简介

**tRPC** 在 **TypeScript** 中定义 **procedure**（`query` / `mutation` / `subscription`），通过 **HTTP 适配器** 暴露给客户端，常与 **Zod**、**TanStack Query** 组合。

- 官方文档：<https://trpc.io/docs>

## 在本仓库中的角色

**Express + @trpc/server**：**`GET /api/health`**、**`GET /api/info`**（REST）；**`/api/trpc`**（tRPC HTTP）；示例 procedure **`echo`**（带 Zod 输入）。**`public/index.html`** 为呈现页。默认 **http://127.0.0.1:3089/**

## 环境要求

- **Node.js 20+**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\Trpc'
npm install
npm run start
```

## 与仓库内其它后端对照

- **GraphQL**：对照 **SDL + 多语言客户端** 与 **TS 端到端类型**。  
- **NestJS**：对照 **装饰器 Controller** 与 **router 对象 API**。
