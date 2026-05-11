import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [draft, setDraft] = useState("");
  const [items, setItems] = useState<string[]>(["示例项"]);
  const [rustMsg, setRustMsg] = useState("");

  const add = () => {
    const t = draft.trim();
    if (!t) return;
    setItems((prev) => [t, ...prev]);
    setDraft("");
  };

  return (
    <div className="shell">
      <h1>Tauri 能力展台</h1>
      <p className="lead muted">
        <strong>Rust</strong> 二进制 + 系统 <strong>WebView</strong>；前端为 Vite + React（开发端口默认{" "}
        <code>1420</code>）。下方可额外演示一次 <strong>Tauri command</strong>。
      </p>
      <ul className="tag-list">
        <li>Tauri 2</li>
        <li>Rust</li>
        <li>React 19</li>
      </ul>
      <section className="panel">
        <h2>状态</h2>
        <p className="lead">计数：{count}</p>
        <div className="row">
          <button type="button" onClick={() => setCount((c) => c + 1)}>
            +1
          </button>
        </div>
      </section>
      <section className="panel">
        <h2>列表</h2>
        <div className="row">
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="新条目"
          />
          <button type="button" className="secondary" onClick={add}>
            添加
          </button>
        </div>
        <ul>
          {items.map((x, i) => (
            <li key={`${i}-${x}`}>{x}</li>
          ))}
        </ul>
      </section>
      <section className="panel">
        <h2>Rust 命令</h2>
        <div className="row">
          <button
            type="button"
            className="secondary"
            onClick={async () => {
              setRustMsg(await invoke("greet", { name: "Framework" }));
            }}
          >
            调用 greet
          </button>
        </div>
        {rustMsg ? <p className="lead">{rustMsg}</p> : null}
      </section>
    </div>
  );
}
