# SQLAlchemy 2 + FastAPI（独立 API）

本目录演示 **SQLAlchemy 2.x ORM** 与 **FastAPI**：`GET /api/health`、`GET /api/info`、`GET /api/demo/items`，SQLite 文件 **`dev.db`**（已 `.gitignore`）。

## 命令

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Python\SqlAlchemy'
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --host 127.0.0.1 --port 3109
```

浏览器 **`http://127.0.0.1:3109/`**。

## 与 Django / Eloquent 的关系

- **Django**：同仓库 [`../Django`](../Django) 为「全栈框架 + ORM + Admin」叙事；本目录为「**薄 API + Session 注入**」最小对照。  
- **PHP Eloquent**：[`../../PHP/Laravel`](../../PHP/Laravel) 已覆盖典型 Eloquent 路径；若只要 ORM + 路由，可在空目录 `composer create-project laravel/laravel` 后删减，再与本目录 **`/api/*` JSON** 对照。

## 官方文档

<https://docs.sqlalchemy.org/en/20/>
