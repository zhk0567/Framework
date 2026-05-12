# Back-end / Ruby / Rails（形态对齐）

## 框架简介

**Ruby on Rails** 是 **约定优于配置** 的全栈框架：**ActiveRecord、ActionPack、ActionView、ActiveJob、Hotwire** 等。

- 官方文档：<https://guides.rubyonrails.org/>

## 在本仓库中的角色

本目录**不提交** `rails new` 的完整生成树；用 **Rack + WEBrick**（`bundle exec rackup`）对齐 **`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页**，默认 **http://127.0.0.1:3086/**。

## 环境要求

- **Ruby 3.2+** 与 **Bundler**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Ruby\Rails'
bundle install
bundle exec rackup -o 127.0.0.1 -p 3086
```

浏览器打开 **http://127.0.0.1:3086/**

## 生成完整 Rails 应用（官方）

```powershell
gem install rails
rails new my_app
cd my_app
bin/rails server
```

## 与仓库内其它后端对照

- **Django**：均为 **全栈默认集成** 取向。  
- **Hanami**：对照 **显式分层 / slice** 与 **Rails 一体化约定**。
