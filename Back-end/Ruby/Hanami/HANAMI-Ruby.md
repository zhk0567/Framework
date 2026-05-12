# Back-end / Ruby / Hanami（形态对齐）

## 框架简介

**Hanami**（原 Lotus）是 Ruby **模块化 Web** 框架：**slice、actions、ROM、dry-rb** 与显式依赖边界常见。

- 官方文档：<https://guides.hanamirb.org/>

## 在本仓库中的角色

本目录**不提交** `hanami new` 的完整生成树；用 **Rack + WEBrick**（`bundle exec rackup`）对齐 **`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页**，默认 **http://127.0.0.1:3087/**。

## 环境要求

- **Ruby 3.2+** 与 **Bundler**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Ruby\Hanami'
bundle install
bundle exec rackup -o 127.0.0.1 -p 3087
```

浏览器打开 **http://127.0.0.1:3087/**

## 生成完整 Hanami 应用（官方）

```powershell
gem install hanami-cli
hanami new my_app
cd my_app
hanami server
```

## 与仓库内其它后端对照

- **Rails**：对照 **slice / ROM** 与 **ActiveRecord 一体化**。  
- **Micronaut**：均有 **显式架构边界** 的选型讨论语境。
