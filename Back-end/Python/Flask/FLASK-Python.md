# Back-end / Python / Flask

## 框架简介

**Flask** 是 Python **WSGI** 微框架：**路由、Jinja、Blueprint、扩展**（Flask-SQLAlchemy 等）组合成中大型应用。

- 官方文档：<https://flask.palletsprojects.com/>

## 在本仓库中的角色

**`requirements.txt` + `app.py`**：**`GET /api/health`**、**`GET /api/info`**；**`public/index.html`** 为呈现页。默认 **http://127.0.0.1:3084/**

## 环境要求

- **Python 3.11+**（建议）

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Python\Flask'
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
```

浏览器打开 **http://127.0.0.1:3084/**

## 与仓库内其它后端对照

- **Django**：对照 **「自带电池」** 与 **「库组合」**。  
- **Express**：对照 **Node 中间件链** 与 **Python WSGI 扩展**。
