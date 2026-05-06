import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'

const TOAST_MS = 3200

export function PortalToastDemo() {
  const [open, setOpen] = useState(false)
  const toastId = useId()

  useEffect(() => {
    if (!open) return
    const t = window.setTimeout(() => setOpen(false), TOAST_MS)
    return () => window.clearTimeout(t)
  }, [open])

  return (
    <section
      className="panel demo-portal"
      id="section-portal"
      aria-labelledby="portal-heading"
    >
      <div className="panel-head">
        <h2 id="portal-heading">Portal 轻提示</h2>
        <p className="panel-desc">
          使用 <code>createPortal</code> 将提示挂到 <code>document.body</code>，
          不受父级 <code>overflow</code> 裁剪，仍参与同一套 React 状态与卸载清理。
        </p>
      </div>
      <button
        type="button"
        className="btn primary"
        onClick={() => setOpen(true)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={`${toastId}-toast`}
      >
        显示 Portal 提示
      </button>
      {open &&
        createPortal(
          <div
            id={`${toastId}-toast`}
            className="demo-toast-root"
            role="status"
            aria-live="polite"
          >
            <div className="demo-toast-card">
              <strong>来自 Portal</strong>
              <span>约 {Math.round(TOAST_MS / 1000)} 秒后自动关闭；卸载时清理定时器。</span>
            </div>
          </div>,
          document.body,
        )}
    </section>
  )
}
