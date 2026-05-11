import { createSignal, onCleanup } from 'solid-js';

function formatNow() {
  return new Date().toLocaleTimeString('zh-CN', { hour12: false });
}

export default function EffectClock() {
  const [label, setLabel] = createSignal(formatNow());

  const id = window.setInterval(() => setLabel(formatNow()), 1000);
  onCleanup(() => window.clearInterval(id));

  return (
    <section class="panel" id="effect">
      <h2>副作用与 onCleanup</h2>
      <p class="lead muted">
        在组件函数体内注册定时器；<code>onCleanup</code> 在卸载或热更新时清理，避免泄漏。
      </p>
      <p style={{ margin: 0, 'font-variant-numeric': 'tabular-nums' }}>{label()}</p>
    </section>
  );
}
