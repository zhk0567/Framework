# frozen_string_literal: true

require "json"

class HanamiGuideApp
  def self.call(env)
    req = Rack::Request.new(env)
    json_hdr = {
      "Content-Type" => "application/json; charset=utf-8",
      "Access-Control-Allow-Origin" => "*",
    }
    case req.path_info
    when "/api/health"
      body = {
        ok: true,
        service: "framework-back-end-hanami-guide",
        note: "Rack 对齐 HTTP；完整 Hanami 请 hanami new（见 HANAMI-Ruby.md）。",
      }.to_json
      [200, json_hdr, [body]]
    when "/api/info"
      body = {
        message: "Hanami：Ruby 模块化 Web 框架，slice、ROM、dry-rb 生态与显式依赖常见。",
        highlights: [
          { title: "架构", detail: "应用切片与边界清晰的分层。" },
          { title: "与 Rails 对照", detail: "Hanami 偏显式与函数式习惯；Rails 偏约定与一体化。" },
        ],
      }.to_json
      [200, json_hdr, [body]]
    when "/", "/index.html"
      html = File.read(File.join(__dir__, "public", "index.html"), encoding: "UTF-8")
      [200, { "Content-Type" => "text/html; charset=utf-8" }, [html]]
    else
      [404, { "Content-Type" => "text/plain; charset=utf-8" }, ["Not Found"]]
    end
  end
end
