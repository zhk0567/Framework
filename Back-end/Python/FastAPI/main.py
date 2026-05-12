"""Minimal FastAPI: GET /api/health, /api/info and index page."""
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse

BASE = Path(__file__).resolve().parent
PUBLIC = BASE / "public"

app = FastAPI(title="framework-fastapi")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health():
    return {"ok": True, "service": "framework-back-end-fastapi"}


@app.get("/api/info")
def info():
    return {
        "message": "FastAPI：基于 Python 类型提示的 ASGI Web 框架，自动 OpenAPI 与 Pydantic 常见。",
        "highlights": [
            {"title": "异步", "detail": "def / async def 与 Starlette 能力组合。"},
            {"title": "与 Flask 对照", "detail": "FastAPI 默认 ASGI / OpenAPI；Flask 偏 WSGI 同步生态。"},
        ],
    }


@app.get("/")
async def index():
    return FileResponse(PUBLIC / "index.html", media_type="text/html; charset=utf-8")
