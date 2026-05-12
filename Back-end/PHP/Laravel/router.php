<?php

declare(strict_types=1);

/**
 * PHP 内置服务器入口：在项目根目录执行
 * php -S 127.0.0.1:3081 router.php
 */
$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';

if ($path === '/api/health') {
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    echo json_encode(
        [
            'ok' => true,
            'service' => 'framework-back-end-laravel-guide',
            'note' => 'PHP 内置路由对齐 HTTP；完整 Laravel 请用 composer create-project（见 LARAVEL-PHP.md）。',
        ],
        JSON_UNESCAPED_UNICODE
    );
    return true;
}

if ($path === '/api/info') {
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    echo json_encode(
        [
            'message' => 'Laravel：PHP 全栈框架，路由、Eloquent、队列、Artisan 与 Blade / Inertia 等生态常见。',
            'highlights' => [
                ['title' => '约定', 'detail' => 'MVC + 服务容器 + 配置与迁移管线。'],
                ['title' => '与 Symfony 对照', 'detail' => 'Laravel 偏「电池自带」；Symfony 偏组件化与企业解耦。'],
            ],
        ],
        JSON_UNESCAPED_UNICODE
    );
    return true;
}

if ($path === '/' || $path === '/index.html') {
    header('Content-Type: text/html; charset=utf-8');
    readfile(__DIR__ . '/public/index.html');
    return true;
}

return false;
