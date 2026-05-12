# frozen_string_literal: true

require "json"

class RailsGuideApp
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
        service: "framework-back-end-rails-guide",
        note: "Rack 对齐 HTTP；完整 Rails 请 rails new（见 RAILS-Ruby.md）。",
      }.to_json
      [200, json_hdr, [body]]
    when "/api/info"
      body = {
        message: "Ruby on Rails：约定优于配置、ActiveRecord、ActionPack、Asset Pipeline 与 Hotwire 等。",
        highlights: [
          { title: "脚手架", detail: "rails new 生成 MVC 与迁移。" },
          { title: "与 Django 对照", detail: "均为全栈默认集成；语言与部署链不同。" },
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
