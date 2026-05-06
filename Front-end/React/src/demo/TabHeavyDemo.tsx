import { useState, useTransition } from 'react'

const TABS = [
  { id: 'a', label: '面板 A' },
  { id: 'b', label: '面板 B' },
  { id: 'c', label: '面板 C' },
] as const

function HeavyPane({
  label,
  variant,
}: {
  label: string
  variant: (typeof TABS)[number]['id']
}) {
  return (
    <div className={`demo-tab-pane demo-tab-pane--${variant}`}>
      <p className="demo-tab-pane-title">{label}</p>
      <div className="demo-tab-grid" aria-hidden="true">
        {Array.from({ length: 320 }, (_, i) => (
          <span key={i} className="demo-tab-cell" />
        ))}
      </div>
    </div>
  )
}

export function TabHeavyDemo() {
  const [tab, setTab] = useState<(typeof TABS)[number]['id']>('a')
  const [isPending, startTransition] = useTransition()

  return (
    <section
      className="panel demo-tabs"
      id="section-tabs"
      aria-labelledby="tabs-heading"
    >
      <div className="panel-head">
        <h2 id="tabs-heading">重内容标签切换</h2>
        <p className="panel-desc">
          使用 <code>startTransition</code> 更新当前标签，切换大量 DOM 时 UI 可标记{' '}
          <code>isPending</code>，避免阻塞紧急更新。
        </p>
      </div>
      <div className="demo-tab-bar" role="tablist" aria-label="演示标签">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className={tab === t.id ? 'demo-tab-btn active' : 'demo-tab-btn'}
            onClick={() =>
              startTransition(() => {
                setTab(t.id)
              })
            }
          >
            {t.label}
          </button>
        ))}
      </div>
      <p className={isPending ? 'demo-tab-pending' : 'demo-tab-ready'}>
        {isPending ? '正在切换标签…' : '就绪'}
      </p>
      <div
        className={isPending ? 'demo-tab-content pending' : 'demo-tab-content'}
        role="tabpanel"
      >
        {tab === 'a' && (
          <HeavyPane label="面板 A · 大量节点" variant="a" />
        )}
        {tab === 'b' && (
          <HeavyPane label="面板 B · 大量节点" variant="b" />
        )}
        {tab === 'c' && (
          <HeavyPane label="面板 C · 大量节点" variant="c" />
        )}
      </div>
    </section>
  )
}
