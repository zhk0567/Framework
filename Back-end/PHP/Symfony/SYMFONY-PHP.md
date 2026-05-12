# Back-end / PHP / Symfony（形态对齐）

## 框架简介

**Symfony** 是 PHP 的 **组件化企业栈**：**HttpKernel、Routing、DependencyInjection、EventDispatcher** 等可独立使用，**Symfony Flex** 管理配方与自动配置。

- 官方文档：<https://symfony.com/doc/current/index.html>

## 在本仓库中的角色

本目录**不提交** `symfony new` / `composer create-project symfony/skeleton` 的完整生成树；用 **PHP 内置服务器 + `router.php`** 对齐 **`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页**，默认 **http://127.0.0.1:3082/**。

## 环境要求

- **PHP 8.2+**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\PHP\Symfony'
php -S 127.0.0.1:3082 router.php
```

浏览器打开 **http://127.0.0.1:3082/**

## 生成完整 Symfony 应用（官方）

在**空目录**中执行（需已安装 [Symfony CLI](https://symfony.com/download) 或仅用 Composer；版本以官方为准）：

```powershell
symfony new my-app --webapp
# 或
composer create-project symfony/skeleton my-app
```

## 与仓库内其它后端对照

- **Laravel**：对照 **约定式全栈** 与 **显式组件边界**。  
- **Spring Boot**：均为 **DI 容器** 叙事较强的后端栈。
