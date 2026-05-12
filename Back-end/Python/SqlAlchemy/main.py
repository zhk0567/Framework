"""FastAPI 入口：/api/health、/api/info、/api/demo/items。"""

import uuid
from pathlib import Path

from fastapi import Depends, FastAPI
from fastapi.responses import HTMLResponse
from sqlalchemy import select
from sqlalchemy.orm import Session

from database import Item, get_db, init_db

app = FastAPI(title="framework-sqlalchemy-guide", version="0.1.0")


@app.on_event("startup")
def on_startup() -> None:
    init_db()


@app.get("/api/health")
def api_health() -> dict[str, object]:
    return {"ok": True, "service": "framework-back-end-sqlalchemy"}


@app.get("/api/info")
def api_info() -> dict[str, object]:
    return {
        "message": "SQLAlchemy 2.x：Core + ORM，可与 FastAPI Depends 组合",
        "doc": "https://docs.sqlalchemy.org/en/20/",
        "highlights": [
            {
                "title": "Django",
                "detail": "本仓库 Django 子工程已含 ORM 叙事；此处为「薄 API + 显式 Session」对照。",
            },
            {
                "title": "PHP Eloquent",
                "detail": "Laravel 子工程覆盖 Eloquent；独立 API 可在空目录 composer 自建。",
            },
        ],
    }


@app.get("/api/demo/items")
def api_demo_items(db: Session = Depends(get_db)) -> dict[str, object]:
    rows = list(db.scalars(select(Item).order_by(Item.created_at.desc()).limit(50)))
    if not rows:
        row = Item(id=str(uuid.uuid4()), title="示例条目（SQLAlchemy session.add）")
        db.add(row)
        db.commit()
        db.refresh(row)
        rows = [row]
    items = [{"id": r.id, "title": r.title, "createdAt": r.created_at.isoformat()} for r in rows]
    return {"items": items}


@app.get("/", response_class=HTMLResponse)
def root() -> str:
    html_path = Path(__file__).resolve().parent / "public" / "index.html"
    return html_path.read_text(encoding="utf-8")
