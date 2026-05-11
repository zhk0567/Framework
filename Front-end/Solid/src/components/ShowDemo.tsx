import { Show, createSignal } from 'solid-js';

export default function ShowDemo() {
  const [visible, setVisible] = createSignal(true);

  return (
    <section class="panel" id="show">
      <h2>Show</h2>
      <p class="lead muted">
        条件渲染 + <code>fallback</code>，类型在分支间收窄。
      </p>
      <div class="row" style={{ 'margin-bottom': '8px' }}>
        <button type="button" class="secondary" onClick={() => setVisible((v) => !v)}>
          切换显示
        </button>
      </div>
      <Show when={visible()} fallback={<p class="muted">当前为隐藏态（fallback）</p>}>
        <p style={{ margin: 0 }}>主内容可见。</p>
      </Show>
    </section>
  );
}
