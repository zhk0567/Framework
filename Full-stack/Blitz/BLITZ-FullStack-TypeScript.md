# Blitz 全栈占位示例

## 框架简介

**Blitz.js** 曾以「**全栈 React 零 API**」著称：通过 **RPC 与约定** 把服务端函数直接暴露给客户端，减少手写 REST。**Blitz 2** 起社区路线更常**建立在 Next.js 之上**（数据层、代码生成、工具链与 Vercel 部署模型对齐），与「纯 Next」边界需阅读官方当前说明。

- 官方网站：<https://blitzjs.com/>
- GitHub：<https://github.com/blitz-js/blitz>

## 在本仓库中的角色

**Blitz 2** 社区路线通常建立在 **Next.js** 之上（工具链、RPC、数据层等）。本目录**不重复实现**整套 Blitz 插件，而是采用与 `Full-stack/Nextjs` **相同的 Next App Router + Route Handler 最小形态**，端口改为 **3036**，便于在「全栈」一节对照。

若你需要完整 Blitz 数据层与生成器，请在空目录执行官方文档推荐流程，再与仓库其它子工程并列对照。

## 快速开始

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Full-stack\Blitz'
npm install
npm run dev
```

浏览器：**http://127.0.0.1:3036/**

## 与仓库总览的关系

根说明：[../../README.md](../../README.md)。纯 Next 示例：[../Nextjs/NEXTJS-FullStack-TypeScript.md](../Nextjs/NEXTJS-FullStack-TypeScript.md)。
