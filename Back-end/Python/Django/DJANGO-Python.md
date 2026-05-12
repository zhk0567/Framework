# Back-end / Python / Django

## 框架简介

**Django** 是 Python **全栈**框架：**ORM、Admin、迁移、模板、表单、中间件** 与 **Django REST framework** 等生态常见。

- 官方文档：<https://docs.djangoproject.com/>

## 在本仓库中的角色

**最小单项目**：**`demo/settings.py`** + **`demo/urls.py`** 内联视图，无独立 `INSTALLED_APPS` 业务应用；**`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页**（`public/index.html`）。默认 **http://127.0.0.1:3085/**。本地 SQLite 文件 **`db.sqlite3`**（已 `.gitignore`）。

## 环境要求

- **Python 3.11+**（建议）

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Python\Django'
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 127.0.0.1:3085
```

浏览器打开 **http://127.0.0.1:3085/**

## 与仓库内其它后端对照

- **Flask**：对照 **项目结构约定** 与 **渐进式组合**。  
- **Rails**：对照 **MVC + ActiveRecord** 与 **Django ORM + Admin** 叙事。
