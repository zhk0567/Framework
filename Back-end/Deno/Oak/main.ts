/**
 * Oak：Deno 常见 HTTP 中间件栈（与 Node 侧 Hono 子工程对照运行时差异）。
 * 默认 http://127.0.0.1:3102/
 */
import { Application, Router } from "oak";

const indexHtml = await Deno.readTextFile(
  new URL("./public/index.html", import.meta.url),
);

const router = new Router();
router.get("/api/health", (ctx) => {
  ctx.response.type = "json";
  ctx.response.body = {
    ok: true,
    service: "framework-back-end-oak-guide",
    note: "Deno + Oak；说明见 OAK-Deno-TypeScript.md",
  };
});
router.get("/api/info", (ctx) => {
  ctx.response.type = "json";
  ctx.response.body = {
    message: "Oak：Deno 上的中间件风格路由",
    doc: "https://deno.land/x/oak",
    highlights: [
      {
        title: "运行",
        detail: "deno task dev（需本机安装 Deno）。",
      },
    ],
  };
});
router.get("/", (ctx) => {
  ctx.response.type = "html";
  ctx.response.body = indexHtml;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

const port = Number(Deno.env.get("PORT") ?? "3102");
const hostname = "127.0.0.1";
console.log(`Oak（Deno）http://${hostname}:${port}/`);
await app.listen({ port, hostname });
