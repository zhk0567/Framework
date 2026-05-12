# Back-end / PHP / Laravel（形态对齐）

## 框架简介

**Laravel** 是 PHP 的 **全栈约定式框架**：**路由、Eloquent ORM、队列、Artisan、Blade / Inertia、Vite 前端脚手架** 与庞大生态（Cashier、Horizon、Sanctum 等）。

- 官方文档：<https://laravel.com/docs>

## 在本仓库中的角色

本目录**不提交** `composer create-project laravel/laravel` 的完整生成树；用 **PHP 内置服务器 + `router.php`** 对齐 **`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页**，默认 **http://127.0.0.1:3081/**。

## 环境要求

- **PHP 8.2+**

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\PHP\Laravel'
php -S 127.0.0.1:3081 router.php
```

浏览器打开 **http://127.0.0.1:3081/**

## 生成完整 Laravel 应用（官方）

在**空目录**中执行（需已安装 **Composer**；版本以官方为准）：

```powershell
composer create-project laravel/laravel my-app
cd my-app
php artisan serve
```

## 与仓库内其它后端对照

- **Symfony**：对照 **「电池自带」体验** 与 **Flex 组件配方**。  
- **Django**：均为 **ORM + 迁移 + 后台** 叙事较强的全栈选项（PHP vs Python）。
