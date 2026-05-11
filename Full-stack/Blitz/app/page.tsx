'use client';

import { useEffect, useState } from 'react';

type DemoPayload = {
  ok: boolean;
  stack: string;
  time: string;
  hint?: string;
};

export default function Home() {
  const [data, setData] = useState<DemoPayload | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/demo')
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json() as Promise<DemoPayload>;
      })
      .then(setData)
      .catch(() => setError('无法读取 /api/demo'));
  }, []);

  return (
    <main className="shell">
      <h1 style={{ margin: '0 0 0.35rem', fontSize: '1.65rem', letterSpacing: '-0.02em' }}>
        Blitz / Next 全栈展台
      </h1>
      <p className="muted" style={{ margin: 0, maxWidth: '40rem' }}>
        Blitz 2 官方路线常与 <strong>Next.js</strong> 同栈；本目录以 <strong>App Router + Route Handler</strong> 作可运行最小全栈占位（端口
        <code>3036</code>）。详见 <code>BLITZ-FullStack-TypeScript.md</code>。
      </p>

      <ul className="tag-list" aria-label="能力标签" style={{ marginTop: '1rem' }}>
        {[
          'React 19',
          '服务端/客户端组件边界',
          'Route Handler（GET）',
          '同域 API 调用',
        ].map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <section className="panel" aria-live="polite">
        <h2 style={{ margin: '0 0 0.5rem', fontSize: '1rem' }}>GET /api/demo</h2>
        <p className="muted" style={{ margin: 0 }}>
          下方 JSON 由浏览器请求本应用 API 得到（全栈最小闭环）。
        </p>
        {error ? (
          <p style={{ color: '#f87171', marginTop: '0.75rem' }}>{error}</p>
        ) : data ? (
          <pre className="json">{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p className="muted" style={{ marginTop: '0.75rem' }}>
            加载中…
          </p>
        )}
      </section>

      <p className="muted" style={{ marginTop: '1.5rem', fontSize: '0.85rem' }}>
        说明见 <code>BLITZ-FullStack-TypeScript.md</code>；未收录栈见仓库根目录{' '}
        <code>FRAMEWORK-GAP-LIST.md</code>。
      </p>
    </main>
  );
}
