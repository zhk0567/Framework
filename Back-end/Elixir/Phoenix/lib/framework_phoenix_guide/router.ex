defmodule FrameworkPhoenixGuide.Router do
  @moduledoc false
  use Plug.Router

  plug Plug.Logger
  plug :match
  plug :dispatch

  get "/api/health" do
    body =
      Jason.encode!(%{
        ok: true,
        service: "framework-back-end-phoenix-guide",
        note: "Plug + Bandit 占位；完整 Phoenix 见 PHOENIX-Elixir.md"
      })

    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, body)
  end

  get "/api/info" do
    body =
      Jason.encode!(%{
        message: "Phoenix：Elixir 全栈框架（本目录为 Plug 层形态对齐）",
        doc: "https://hexdocs.pm/phoenix/overview.html",
        highlights: [
          %{
            title: "官方入门",
            detail: "mix phx.new my_app（需 Erlang/OTP + Hex）。"
          }
        ]
      })

    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, body)
  end

  get "/" do
    path = Application.app_dir(:framework_phoenix_guide, "priv/index.html")
    html = File.read!(path)

    conn
    |> put_resp_content_type("text/html; charset=utf-8")
    |> send_resp(200, html)
  end

  match _ do
    send_resp(conn, 404, "Not Found")
  end
end
