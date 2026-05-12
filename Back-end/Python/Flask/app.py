"""Minimal Flask: GET /api/health, /api/info and index page."""
from pathlib import Path

from flask import Flask, jsonify, send_file

BASE = Path(__file__).resolve().parent
app = Flask(__name__)


@app.after_request
def add_cors(resp):
    resp.headers["Access-Control-Allow-Origin"] = "*"
    return resp


@app.get("/api/health")
def health():
    return jsonify(ok=True, service="framework-back-end-flask")


@app.get("/api/info")
def info():
    return jsonify(
        message="Flask：Python 微框架，WSGI、Jinja、扩展生态（Flask-SQLAlchemy 等）常见。",
        highlights=[
            {"title": "轻量", "detail": "单文件到分包结构皆可渐进。"},
            {"title": "与 Django 对照", "detail": "Flask 偏库组合；Django 偏内置电池。"},
        ],
    )


@app.get("/")
def index():
    return send_file(BASE / "public" / "index.html", mimetype="text/html; charset=utf-8")


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3084, debug=False)
