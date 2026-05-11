# Blitz 全栈占位示例

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
