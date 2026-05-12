# Back-end / Node / ConnectRpcMulti（Buf · 双 Unary 服务）

## 与 `ConnectRpc` 的差异

| 项目 | [`ConnectRpc`](../ConnectRpc) | **ConnectRpcMulti（本目录）** |
|------|-------------------------------|--------------------------------|
| `proto` | 仅 `framework.greet.v1` | 增加 `framework.echo.v1.EchoService` |
| 进程内服务数 | 1 | **GreetService + EchoService** |
| 默认端口 | **3108** | **3125** |

生成代码位于 **`gen/`**（与单服务目录相同插件版本），修改任意 **`proto/**/*.proto`** 后在本目录执行 **`npm run generate`**（依赖 **Buf**，见 `package.json` 中 `@bufbuild/buf`）。

## 环境要求

- Node.js **20+**  
- 首次生成需能执行 **`npx buf generate`**（随 `npm install` 安装 CLI）

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\ConnectRpcMulti'
npm install
npm run generate
npm run dev
```

呈现页：**http://127.0.0.1:3125/**

## Unary 路径（Connect JSON）

- `POST /framework.greet.v1.GreetService/SayHello`，body 如：`{"name":"Web"}`  
- `POST /framework.echo.v1.EchoService/Ping`，body 如：`{"token":"abc"}`  

## `buf breaking` 与 CI 建议

在 **proto 变更** 合并前，对 **主分支** 做兼容性检测（示例，需在 git 仓库内且 `main` 存在）：

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Node\ConnectRpcMulti'
npx buf breaking --against '.git#branch=main'
```

**GitHub Actions** 思路：在含 `buf` 的 job 中 checkout 后，对 `Back-end/Node/ConnectRpcMulti` 设 `working-directory`，执行 `buf lint`（可选）与 **`buf breaking --against "${{ github.event.pull_request.base.sha }}"`** 或 **`'.git#branch=main'`**；与单服务 [`ConnectRpc`](../ConnectRpc)  pipeline 可共用同一 `buf` Action，仅工作目录不同。

## 端口

默认 **3125**；汇总见根目录 [README.md](../../../README.md)。
