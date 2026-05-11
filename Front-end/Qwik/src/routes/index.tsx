import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

type Todo = { id: string; title: string };

export default component$(() => {
  const count = useSignal(0);
  const items = useSignal<Todo[]>([{ id: "seed-1", title: "示例待办" }]);
  const draft = useSignal("");
  const visible = useSignal(true);
  const clock = useSignal(
    new Date().toLocaleTimeString("zh-CN", { hour12: false }),
  );

  useVisibleTask$(() => {
    const id = window.setInterval(() => {
      clock.value = new Date().toLocaleTimeString("zh-CN", {
        hour12: false,
      });
    }, 1000);
    return () => window.clearInterval(id);
  });

  return (
    <div class="qw-shell">
      <header>
        <h1>Qwik 能力展台</h1>
        <p class="qw-lead">
          <strong>可恢复</strong>、推迟下载与执行；<code>useSignal</code> 与
          <code>useVisibleTask$</code> 处理仅浏览器端逻辑。
        </p>
      </header>
      <ul class="qw-tags">
        <li>resumability</li>
        <li>useSignal</li>
        <li>Qwik City</li>
      </ul>
      <main class="qw-grid">
        <section class="qw-panel">
          <h2>计数</h2>
          <div class="qw-row">
            <button type="button" onClick$={() => count.value++}>
              +1
            </button>
            <span class="qw-muted">
              count = {count.value}， doubled = {count.value * 2}
            </span>
          </div>
        </section>
        <section class="qw-panel">
          <h2>时钟</h2>
          <p class="qw-mono">{clock.value}</p>
        </section>
        <section class="qw-panel">
          <h2>列表</h2>
          <div class="qw-row">
            <input
              type="text"
              placeholder="新待办"
              value={draft.value}
              onInput$={(e) =>
                (draft.value = (e.target as HTMLInputElement).value)
              }
              onKeyDown$={(e) => {
                if (e.key !== "Enter") return;
                const t = draft.value.trim();
                if (!t) return;
                items.value = [
                  { id: `t-${Date.now()}`, title: t },
                  ...items.value,
                ];
                draft.value = "";
              }}
            />
            <button
              type="button"
              onClick$={() => {
                const t = draft.value.trim();
                if (!t) return;
                items.value = [
                  { id: `t-${Date.now()}`, title: t },
                  ...items.value,
                ];
                draft.value = "";
              }}
            >
              添加
            </button>
          </div>
          <ul>
            {items.value.map((it) => (
              <li key={it.id}>{it.title}</li>
            ))}
          </ul>
        </section>
        <section class="qw-panel">
          <h2>显示</h2>
          <button
            type="button"
            class="qw-secondary"
            onClick$={() => (visible.value = !visible.value)}
          >
            切换
          </button>
          {visible.value ? (
            <p>主内容可见。</p>
          ) : (
            <p class="qw-muted">已隐藏。</p>
          )}
        </section>
      </main>
      <footer class="qw-foot">详见 QWIK-Vite-TypeScript.md</footer>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik 能力展台",
  meta: [
    { name: "description", content: "Framework 仓库内 Qwik 对照示例" },
  ],
};
