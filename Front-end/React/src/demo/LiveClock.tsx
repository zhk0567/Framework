import { useEffect, useState } from 'react'

export function LiveClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const text = now.toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  return (
    <div className="clock" aria-live="polite">
      <span className="clock-label">实时时钟</span>
      <time dateTime={now.toISOString()} className="clock-time">
        {text}
      </time>
      <span className="clock-hint">
        由 <code>useEffect</code> 注册定时器并在卸载时清理。
      </span>
    </div>
  )
}
