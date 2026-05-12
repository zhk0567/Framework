# Back-end / Python / FastAPI

## 框架简介

**FastAPI** 是基于 **Python 类型提示** 的 **ASGI** Web 框架，常与 **Pydantic**、**Starlette**、**Uvicorn** 搭配；自动生成 **OpenAPI** 文档。

- 官方文档：<https://fastapi.tiangolo.com/>

## 在本仓库中的角色

**`requirements.txt` + `main.py`**：**`GET /api/health`**、**`GET /api/info`**；**`public/index.html`** 为呈现页。默认 **http://127.0.0.1:3083/**

## 环境要求

- **Python 3.11+**（建议）

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Back-end\Python\FastAPI'
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --host 127.0.0.1 --port 3083
```

浏览器打开 **http://127.0.0.1:3083/**

## 与仓库内其它后端对照

- **Flask**：对照 **WSGI / 同步默认** 与 **ASGI / 异步**。  
- **NestJS**：对照 **装饰器路由** 与 **依赖注入** 叙事差异。
