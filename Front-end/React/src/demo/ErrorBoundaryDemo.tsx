import {
  Component,
  useState,
  type ErrorInfo,
  type ReactNode,
} from 'react'

type BoundaryProps = { children: ReactNode }

type BoundaryState = { hasError: boolean; recoverKey: number }

export class ErrorBoundary extends Component<BoundaryProps, BoundaryState> {
  state: BoundaryState = { hasError: false, recoverKey: 0 }

  static getDerivedStateFromError(): Partial<BoundaryState> {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  private retry = () => {
    this.setState((s) => ({
      hasError: false,
      recoverKey: s.recoverKey + 1,
    }))
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="demo-error-fallback" role="alert">
          <p>子树渲染出错，已被错误边界拦截。</p>
          <button type="button" className="btn primary" onClick={this.retry}>
            重试并重置子树
          </button>
        </div>
      )
    }
    return (
      <div key={this.state.recoverKey}>{this.props.children}</div>
    )
  }
}

function BuggyWidget() {
  const [shouldCrash, setShouldCrash] = useState(false)
  if (shouldCrash) {
    throw new Error('演示用渲染错误')
  }
  return (
    <div className="demo-error-widget">
      <p>点击后会在下一次渲染抛错（仅在事件里触发，避免构建期失败）。</p>
      <button
        type="button"
        className="btn ghost"
        onClick={() => setShouldCrash(true)}
      >
        触发渲染错误
      </button>
    </div>
  )
}

export function ErrorBoundaryDemo() {
  return (
    <section
      className="panel demo-error"
      id="section-error"
      aria-labelledby="error-heading"
    >
      <div className="panel-head">
        <h2 id="error-heading">错误边界</h2>
        <p className="panel-desc">
          类组件实现的 <code>ErrorBoundary</code> 捕获子树错误，展示降级 UI；
          重试时递增 <code>key</code> 以重新挂载子组件。
        </p>
      </div>
      <ErrorBoundary>
        <BuggyWidget />
      </ErrorBoundary>
    </section>
  )
}
