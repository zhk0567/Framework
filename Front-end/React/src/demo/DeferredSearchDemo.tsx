import { useDeferredValue, useMemo, useState } from 'react'

const TOTAL = 400

function buildItems(): string[] {
  const topics = ['Hooks', '并发', 'Context', 'Portal', 'SSR', 'Suspense', '调度']
  return Array.from({ length: TOTAL }, (_, i) => {
    const t = topics[i % topics.length]
    return `条目 ${i + 1} · ${t} 相关概念与实践要点`
  })
}

export function DeferredSearchDemo() {
  const items = useMemo(() => buildItems(), [])
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase()
    if (!q) return items
    return items.filter((line) => line.toLowerCase().includes(q))
  }, [items, deferredQuery])

  const isStale = query !== deferredQuery

  return (
    <section
      className="panel demo-deferred"
      id="section-deferred"
      aria-labelledby="deferred-heading"
    >
      <div className="panel-head">
        <h2 id="deferred-heading">延迟值与过渡</h2>
        <p className="panel-desc">
          受控输入立即更新；列表筛选使用 <code>useDeferredValue</code>，让重列表渲染
          可被打断，输入与重计算解耦（与下方「重标签」的{' '}
          <code>useTransition</code> 对照阅读）。
        </p>
      </div>
      <div className="demo-deferred-controls">
        <input
          className="todo-input demo-deferred-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="筛选条目（输入保持跟手）"
          aria-label="筛选关键词"
        />
        <span
          className={
            isStale ? 'demo-deferred-badge active' : 'demo-deferred-badge'
          }
          aria-live="polite"
        >
          {isStale ? '列表追赶输入…' : '列表已同步'}
        </span>
      </div>
      <p className="demo-deferred-meta">
        共 {TOTAL} 条 · 当前匹配 {filtered.length} 条
      </p>
      <ul className="demo-deferred-list" role="list">
        {filtered.slice(0, 80).map((line, idx) => (
          <li key={`${idx}-${line.slice(0, 24)}`}>{line}</li>
        ))}
      </ul>
      {filtered.length > 80 && (
        <p className="demo-deferred-trunc">仅展示前 80 条匹配结果。</p>
      )}
    </section>
  )
}
