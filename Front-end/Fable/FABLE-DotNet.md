# Fable（F# → JavaScript）

将 **F#** 编译为可在浏览器运行的 JS；**需本机安装 [.NET SDK](https://dotnet.microsoft.com/download)**（建议 8+）。

## 准备

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Fable'
dotnet tool restore
npm install
```

## 编译与预览

```powershell
dotnet fable . -o dist --noCache
npm run dev
```

`src/App.fs` 为最小 DOM 示例；`index.html` 引用 `./dist/App.js`（Fable 输出文件名与模块名一致）。若需 SPA，可在此基础上接入 **Feliz**、**Elmish** 或 **Vite** 多入口。
