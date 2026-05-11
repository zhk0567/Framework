# Remix / React Router 全栈示例

本目录由 **`create-react-router`** 默认模板生成，对应 **Remix v2 官方演进方向：React Router 7**（同一团队）。路由在 `app/routes.ts` 注册；**`app/routes/api.demo.ts`** 导出 `loader` 返回 JSON，等价于经典 Remix resource route。

## 快速开始

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Full-stack\Remix'
npm install
npm run dev
```

默认 **http://127.0.0.1:3033/**。首页 `loader` 内二次 `fetch` 同源 `/api/demo` 以演示全栈闭环。

## 与仓库总览的关系

根说明：[../../README.md](../../README.md)。纯 React + Vite：[../Front-end/React/REACT-Vite-TypeScript.md](../Front-end/React/REACT-Vite-TypeScript.md)。
