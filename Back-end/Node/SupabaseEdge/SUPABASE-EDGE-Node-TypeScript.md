# Supabase Edge Functions（对照用）

本目录用 **Node + `http` + `tsx`** 提供 **`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页**，与同仓库其它 Node 后端在路由形态上对齐。

**真实的 Supabase Edge Functions** 运行在 **Deno** 上，由 [Supabase CLI](https://supabase.com/docs/guides/cli) 创建与部署，与「自建 Node 长连服务」模型不同：函数为无状态、冷启动、按请求计费或配额。

## 官方文档

- [Edge Functions 指南](https://supabase.com/docs/guides/functions)
- [本地开发 `supabase functions serve`](https://supabase.com/docs/guides/functions/local-development)

## 典型 CLI 流程（在空目录执行）

```powershell
# 需已安装 Supabase CLI；在项目根初始化后：
supabase init
supabase functions new hello
# 本地调试见官方文档；部署到关联项目见 `supabase functions deploy`
```

与本仓库 **Directus / Strapi** 等「BaaS 形态」子目录一样：此处不提交完整 Supabase 项目树，只保留 HTTP 占位与文档链。
