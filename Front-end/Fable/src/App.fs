module App

open Browser.Dom

let start () =
    match document.getElementById "fable-root" with
    | null -> ()
    | root ->
        root.innerHTML <-
            """<div style="font-family:system-ui;padding:2rem;max-width:40rem">
  <h1 style="margin-top:0">F# / Fable</h1>
  <p>本目录为 <strong>Fable</strong> 将 F# 编译为 JavaScript 的最小示例（需安装 .NET SDK 与 Fable 工具链）。</p>
  <p>完整 SPA 可在此基础上接入 <code>Feliz</code>、<code>Elmish</code> 或 Vite。</p>
</div>"""

        let btn = document.createElement ("button")
        btn.textContent <- "来自 F# 的点击"
        btn.setAttribute ("style", "margin-top:1rem;padding:0.5rem 1rem;cursor:pointer")

        btn.onclick <-
            fun _ ->
                btn.textContent <-
                    sprintf "已点击：%s" (System.DateTime.Now.ToString("T"))

        root.appendChild (btn) |> ignore

start ()
