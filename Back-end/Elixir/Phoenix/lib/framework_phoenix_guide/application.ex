defmodule FrameworkPhoenixGuide.Application do
  @moduledoc false
  use Application

  @impl true
  def start(_type, _args) do
    port = System.get_env("PORT", "3101") |> String.to_integer()

    children = [
      {Bandit, plug: FrameworkPhoenixGuide.Router, scheme: :http, port: port}
    ]

    opts = [strategy: :one_for_one, name: FrameworkPhoenixGuide.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
