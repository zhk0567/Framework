import reactLogo from './assets/react.svg'
import { DeferredSearchDemo } from './demo/DeferredSearchDemo'
import { ErrorBoundaryDemo } from './demo/ErrorBoundaryDemo'
import { FormAccessDemo } from './demo/FormAccessDemo'
import { LiveClock } from './demo/LiveClock'
import { PortalToastDemo } from './demo/PortalToastDemo'
import { TabHeavyDemo } from './demo/TabHeavyDemo'
import { TodoPanel } from './demo/TodoPanel'
import { ThemeProvider, useTheme } from './theme/ThemeContext'
import './App.css'

const NAV_LINKS = [
  { href: '#section-features', label: '能力总览' },
  { href: '#section-clock', label: '时钟' },
  { href: '#section-todo', label: '待办' },
  { href: '#section-deferred', label: '延迟值' },
  { href: '#section-tabs', label: '过渡' },
  { href: '#section-portal', label: 'Portal' },
  { href: '#section-form', label: '表单' },
  { href: '#section-error', label: '错误边界' },
] as const

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="theme-switch" role="group" aria-label="外观模式">
      {(['system', 'light', 'dark'] as const).map((t) => (
        <button
          key={t}
          type="button"
          className={theme === t ? 'chip active' : 'chip'}
          onClick={() => setTheme(t)}
        >
          {t === 'system' ? '跟随系统' : t === 'light' ? '浅色' : '深色'}
        </button>
      ))}
    </div>
  )
}

function DemoNav() {
  return (
    <nav className="demo-nav" aria-label="本页章节">
      <ul className="demo-nav-list">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="demo-nav-link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function AppShell() {
  const { resolved } = useTheme()

  return (
    <div className={`app-shell theme-${resolved}`}>
      <header className="hero-bar" id="top">
        <div className="hero-brand">
          <img src={reactLogo} width={40} height={40} alt="" />
          <div>
            <h1>React 特性一览</h1>
            <p className="hero-sub">
              纯前端单页：组件树、声明式 UI、状态与副作用分层，无需后端。
            </p>
          </div>
        </div>
        <ThemeSwitcher />
      </header>

      <DemoNav />

      <section
        className="feature-strip"
        id="section-features"
        aria-label="本页用到的 React 能力"
      >
        <p className="feature-lead">
          下列模块各自对应一类常见能力；点击上方锚点可快速跳转。
        </p>
        <ul className="feature-tags">
          <li>组件组合</li>
          <li>JSX 声明式视图</li>
          <li>Context 跨层传参</li>
          <li>useState / useReducer</li>
          <li>useEffect 副作用与清理</li>
          <li>useMemo 派生数据</li>
          <li>useDeferredValue / useTransition</li>
          <li>createPortal</li>
          <li>useId / useRef</li>
          <li>ErrorBoundary</li>
          <li>memo 与列表 key</li>
          <li>StrictMode（入口已开启）</li>
        </ul>
      </section>

      <main className="demo-main">
        <div className="demo-grid">
          <section
            className="panel clock-panel"
            id="section-clock"
            aria-labelledby="clock-heading"
          >
            <div className="panel-head">
              <h2 id="clock-heading">副作用与清理</h2>
              <p className="panel-desc">
                时钟每秒更新；主题可覆盖系统偏好，展示 Context 与受控 UI。
              </p>
            </div>
            <LiveClock />
          </section>
          <TodoPanel />
          <DeferredSearchDemo />
          <TabHeavyDemo />
          <PortalToastDemo />
          <FormAccessDemo />
          <ErrorBoundaryDemo />
        </div>
      </main>

      <footer className="page-foot">
        <span>
          编辑 <code>src/App.tsx</code> 与 <code>src/demo/*</code> 即可体验 Vite HMR。
        </span>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  )
}
