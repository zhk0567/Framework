"""URL routes: /api/health, /api/info, /."""
from pathlib import Path

from django.http import HttpResponse, JsonResponse
from django.urls import path

BASE_DIR = Path(__file__).resolve().parent.parent


def health(_request):
    return JsonResponse(
        {"ok": True, "service": "framework-back-end-django"},
        json_dumps_params={"ensure_ascii": False},
    )


def info(_request):
    return JsonResponse(
        {
            "message": "Django：Python 全栈框架，ORM、Admin、迁移、模板与中间件管线常见。",
            "highlights": [
                {"title": "电池自带", "detail": "AUTH、SESSION、静态文件等默认集成。"},
                {"title": "与 Flask 对照", "detail": "Django 偏约定与大型应用结构；Flask 偏自由组合。"},
            ],
        },
        json_dumps_params={"ensure_ascii": False},
    )


def index(_request):
    html = (BASE_DIR / "public" / "index.html").read_text(encoding="utf-8")
    return HttpResponse(html, content_type="text/html; charset=utf-8")


urlpatterns = [
    path("api/health", health),
    path("api/info", info),
    path("", index),
]
