<?php

declare(strict_types=1);

/**
 * PHP 内置服务器入口：在项目根目录执行
 * php -S 127.0.0.1:3082 router.php
 */
$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';

if ($path === '/api/health') {
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    echo json_encode(
        [
            'ok' => true,
            'service' => 'framework-back-end-symfony-guide',
            'note' => 'PHP 内置路由对齐 HTTP；完整 Symfony 请用 symfony new / composer create-project（见 SYMFONY-PHP.md）。',
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
            'message' => 'Symfony：PHP 组件化企业栈，HttpKernel、Routing、DependencyInjection 与 Flex 配方常见。',
            'highlights' => [
                ['title' => '组件', 'detail' => '可独立替换 HTTP、事件、序列化等层。'],
                ['title' => '与 Laravel 对照', 'detail' => 'Symfony 偏显式配置与可组合包；Laravel 偏一体化体验。'],
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
