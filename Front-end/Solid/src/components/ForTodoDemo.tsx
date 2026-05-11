import { For, createSignal } from 'solid-js';

type Todo = { id: string; title: string };

let idSeq = 1;

export default function ForTodoDemo() {
  const [items, setItems] = createSignal<Todo[]>([{ id: 'seed-1', title: '示例待办（For + key）' }]);
  const [draft, setDraft] = createSignal('');

  const add = () => {
    const t = draft().trim();
    if (!t) return;
    idSeq += 1;
    setItems((list) => [{ id: `t-${idSeq}`, title: t }, ...list]);
    setDraft('');
  };

  return (
    <section class="panel" id="for">
      <h2>&lt;For each&gt; 列表</h2>
      <p class="lead muted">
        与 React 的 <code>key</code> 类似：提供稳定 <code>id</code> 以便 Solid 做高效 diff。
      </p>
      <div class="row" style={{ 'margin-bottom': '10px' }}>
        <input
          type="text"
          placeholder="新待办标题"
          value={draft()}
          onInput={(e) => setDraft(e.currentTarget.value)}
          onKeyDown={(e) => e.key === 'Enter' && add()}
        />
        <button type="button" onClick={add}>
          添加
        </button>
      </div>
      <ul style={{ margin: 0, padding: '0 0 0 1.1rem' }}>
        <For each={items}>{(item) => <li style={{ 'margin-bottom': '4px' }}>{item.title}</li>}</For>
      </ul>
    </section>
  );
}
