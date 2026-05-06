import { useEffect, useMemo, useReducer, useState, memo } from 'react'

type Todo = { id: string; text: string; done: boolean }

type Action =
  | { type: 'add'; text: string }
  | { type: 'toggle'; id: string }
  | { type: 'remove'; id: string }
  | { type: 'clearCompleted' }

const STORAGE_KEY = 'react-demo-todos'

function loadTodos(): Todo[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (x): x is Todo =>
        typeof x === 'object' &&
        x !== null &&
        'id' in x &&
        'text' in x &&
        'done' in x,
    )
  } catch {
    return []
  }
}

function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case 'add': {
      const t = action.text.trim()
      if (!t) return state
      return [...state, { id: crypto.randomUUID(), text: t, done: false }]
    }
    case 'toggle':
      return state.map((x) =>
        x.id === action.id ? { ...x, done: !x.done } : x,
      )
    case 'remove':
      return state.filter((x) => x.id !== action.id)
    case 'clearCompleted':
      return state.filter((x) => !x.done)
    default:
      return state
  }
}

const TodoRow = memo(function TodoRow({
  todo,
  onToggle,
  onRemove,
}: {
  todo: Todo
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}) {
  return (
    <li className="todo-row">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.done ? 'todo-text done' : 'todo-text'}>
          {todo.text}
        </span>
      </label>
      <button
        type="button"
        className="todo-remove"
        onClick={() => onRemove(todo.id)}
        aria-label={`删除「${todo.text}」`}
      >
        移除
      </button>
    </li>
  )
})

export function TodoPanel() {
  const [todos, dispatch] = useReducer(todoReducer, [], loadTodos)
  const [draft, setDraft] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const stats = useMemo(() => {
    const total = todos.length
    const done = todos.filter((t) => t.done).length
    return { total, done, open: total - done }
  }, [todos])

  return (
    <section
      className="panel todo-panel"
      id="section-todo"
      aria-labelledby="todo-heading"
    >
      <div className="panel-head">
        <h2 id="todo-heading">待办列表示例</h2>
        <p className="panel-desc">
          <code>useReducer</code> 描述状态迁移、<code>useEffect</code>{' '}
          同步本地存储、<code>useMemo</code> 派生统计、子项用{' '}
          <code>React.memo</code> 与稳定 <code>key</code> 减少重渲染。
        </p>
      </div>
      <form
        className="todo-form"
        onSubmit={(e) => {
          e.preventDefault()
          dispatch({ type: 'add', text: draft })
          setDraft('')
        }}
      >
        <input
          className="todo-input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="输入待办，回车添加（受控组件）"
          aria-label="新待办内容"
        />
        <button type="submit" className="btn primary">
          添加
        </button>
      </form>
      <p className="todo-stats" aria-live="polite">
        共 {stats.total} 条 · 未完成 {stats.open} · 已完成 {stats.done}
      </p>
      {todos.length === 0 ? (
        <p className="todo-empty">暂无待办，体现条件渲染。</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoRow
              key={todo.id}
              todo={todo}
              onToggle={(id) => dispatch({ type: 'toggle', id })}
              onRemove={(id) => dispatch({ type: 'remove', id })}
            />
          ))}
        </ul>
      )}
      {stats.done > 0 && (
        <button
          type="button"
          className="btn ghost todo-clear"
          onClick={() => dispatch({ type: 'clearCompleted' })}
        >
          清除已完成
        </button>
      )}
    </section>
  )
}
