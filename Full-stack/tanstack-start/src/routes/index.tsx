import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const [text, setText] = useState('加载中…')

  useEffect(() => {
    fetch('/api/demo')
      .then((r) => r.json())
      .then((j) => setText(JSON.stringify(j, null, 2)))
      .catch(() => setText('请求失败'))
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">TanStack Router 展台</h1>
      <p className="mt-3 text-gray-600">
        本目录由官方脚手架生成（Router 为主）。<code>GET /api/demo</code> 在{' '}
        <code>vite dev</code> 下由 Vite 插件注入；与其它全栈示例对齐端口{' '}
        <strong>3038</strong>。
      </p>
      <pre className="mt-4 overflow-auto rounded-lg bg-gray-900 p-4 text-left text-sm text-gray-100">
        {text}
      </pre>
    </div>
  )
}
