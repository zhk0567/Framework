# Ember.js（Ember CLI + TypeScript）

## 框架简介

**Ember.js** 是典型的 **「约定优于配置」** 全栈式前端框架：路由、数据层、模板、构建管线由 **Ember CLI** 统一生成与约束，适合长期维护的企业应用与大型团队。模板层使用 **Handlebars**；组件模型历经 **Ember Object → Glimmer 组件** 演进，强调显式数据流与可预测升级路径。

- 官方网站：<https://emberjs.com/>
- 指南：<https://guides.emberjs.com/>

## 在本仓库中的角色

本目录由 **Ember CLI** 生成（包名 `ember-demo`），构建管线为 **Broccoli**（非 Vite），用于与仓库内 **Vite 系 SPA** 对照「CLI 一体式工程」的目录与命令习惯。

## 技术栈

| 层级 | 选型 |
|------|------|
| 框架 | Ember.js 5.x（以 `package.json` 为准） |
| CLI | `ember-cli` |
| 模板 | Handlebars（`*.hbs`） |
| 语言 | TypeScript（按项目配置启用） |

## 核心概念与特点

| 概念 | 说明 |
|------|------|
| Router | `router.js` 映射 URL 到 route + template。 |
| Route / Model | 数据进入模板前的钩子与 `model()`。 |
| Service | 跨路由长生命周期依赖注入。 |
| Component | Glimmer 组件 + 参数与动作（`{{on}}` 等）。 |
| 与 React 对比 | Ember 强约定、弱「随意组合」；学习曲线前置，长期扩展路径清晰。 |

## 优缺点（学习向）

**优点**：团队规范统一、升级与 codemod 文化成熟。  
**缺点**：国内岗位与社区热度低于 React/Vue；新成员上手 CLI 心智需要时间。

## 环境要求

- Node.js 建议 LTS；**仅在本目录** `npm install`。

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Ember'
npm install
npm start
```

默认开发地址：**http://127.0.0.1:4200/**（Ember CLI 惯例端口）。

## 静态与扩展说明

- 全局壳模板：`app/templates/application.hbs`。
- 扩展交互：新增路由、Glimmer 组件与 service，遵循 CLI 生成结构。

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm start` | `ember serve`：开发服务器 |
| `npm run build` | 生产构建 |

## 与仓库内其它子项目对照

- **Angular**：同为强结构框架，可对比「模块边界与依赖注入」叙事。
- **Backbone**：Ember 早期受 Backbone 影响，可对照 MVC 历史演进。

## 延伸阅读

- Ember 教程：<https://guides.emberjs.com/release/tutorial/>
