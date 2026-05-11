import { createMemo, createSignal } from 'solid-js';

export default function SignalsDemo() {
  const [count, setCount] = createSignal(0);
  const doubled = createMemo(() => count() * 2);

  return (
    <section class="panel" id="signals">
      <h2>createSignal / createMemo</h2>
      <p class="lead muted">
        细粒度更新：只有读取 <code>count()</code> / <code>doubled()</code> 的 JSX 会在变更时重算。
      </p>
      <div class="row">
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          +1
        </button>
        <span class="muted">
          count = {count()}， doubled = {doubled()}
        </span>
      </div>
    </section>
  );
}
