import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './app.css';

function App() {
  const [count, setCount] = useState(0);
  const [draft, setDraft] = useState('');
  const [items, setItems] = useState<string[]>(['示例项']);

  const add = () => {
    const t = draft.trim();
    if (!t) return;
    setItems((prev) => [t, ...prev]);
    setDraft('');
  };

  return (
    <div className="shell">
      <h1>Million + React 能力展台</h1>
      <p className="lead muted">
        在常规 <strong>React 19</strong> 写法之上，由{' '}
        <code>million/compiler</code> 的 <strong>Vite 插件</strong>做自动优化（本页为最小对照示例）。
      </p>
      <ul className="tag-list">
        {['Million 3', 'React 19', 'Vite 8', 'TS'].map((t) => (
          <li key={t}>{t}</li>
        ))}
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
    </div>
  );
}

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
