import { useMemo, useState, useEffect } from 'preact/hooks'
import './app.css'

type Todo = { id: string; title: string }
let idSeq = 1

export function App() {
  const [count, setCount] = useState(0)
  const doubled = useMemo(() => count * 2, [count])
  const [items, setItems] = useState<Todo[]>([
    { id: 'seed-1', title: '示例待办' },
  ])
  const [draft, setDraft] = useState('')
  const [visible, setVisible] = useState(true)
  const [clock, setClock] = useState(() =>
    new Date().toLocaleTimeString('zh-CN', { hour12: false }),
  )

  useEffect(() => {
    const id = window.setInterval(
      () =>
        setClock(new Date().toLocaleTimeString('zh-CN', { hour12: false })),
      1000,
    )
    return () => window.clearInterval(id)
  }, [])

  const addTodo = () => {
    const t = draft.trim()
    if (!t) return
    idSeq += 1
    setItems((list) => [{ id: `t-${idSeq}`, title: t }, ...list])
    setDraft('')
  }

  return (
    <div class="shell">
      <header>
        <h1 style={{ margin: '0 0 8px', 'font-size': '1.65rem' }}>
          Preact 能力展台
        </h1>
        <p class="lead" style={{ margin: 0, 'max-width': '44rem' }}>
          <strong>React API 兼容</strong>、体积极小；本页与仓库其它子项目一样突出状态、列表与副作用。
        </p>
      </header>
      <p class="muted" style={{ margin: '14px 0 8px' }}>能力标签</p>
      <ul class="tag-list">
        {[
          'hooks：useState / useMemo / useEffect',
          '与 React 生态部分兼容',
          'Vite 即时 HMR',
        ].map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <main class="grid" style={{ marginTop: '18px' }}>
        <section class="panel">
          <h2>状态 + 派生</h2>
          <p class="lead">useMemo 模拟 computed。</p>
          <div class="row">
            <button type="button" onClick={() => setCount((c) => c + 1)}>
              +1
            </button>
            <span class="muted">
              count = {count}， doubled = {doubled}
            </span>
          </div>
        </section>
        <section class="panel">
          <h2>副作用</h2>
          <p class="lead">useEffect 驱动时钟。</p>
          <p style={{ margin: 0, 'font-variant-numeric': 'tabular-nums' }}>
            {clock}
          </p>
        </section>
        <section class="panel">
          <h2>列表</h2>
          <p class="lead">受控 input + 数组状态。</p>
          <div class="row" style={{ 'margin-bottom': '8px' }}>
            <input
              type="text"
              placeholder="新待办"
              value={draft}
              onInput={(e) => setDraft((e.target as HTMLInputElement).value)}
              onKeyDown={(e) => e.key === 'Enter' && addTodo()}
            />
            <button type="button" onClick={addTodo}>
              添加
            </button>
          </div>
          <ul style={{ margin: 0, padding: '0 0 0 1.1rem' }}>
            {items.map((it) => (
              <li key={it.id}>{it.title}</li>
            ))}
          </ul>
        </section>
        <section class="panel">
          <h2>条件渲染</h2>
          <p class="lead">布尔状态切换分支。</p>
          <div class="row" style={{ 'margin-bottom': '8px' }}>
            <button
              type="button"
              class="secondary"
              onClick={() => setVisible((v) => !v)}
            >
              切换
            </button>
          </div>
          {visible ? (
            <p style={{ margin: 0 }}>主内容可见。</p>
          ) : (
            <p class="muted">已隐藏。</p>
          )}
        </section>
      </main>
      <footer class="muted" style={{ marginTop: '22px', 'font-size': '0.875rem' }}>
        详见 <code>PREACT-Vite-TypeScript.md</code>
      </footer>
    </div>
  )
}
