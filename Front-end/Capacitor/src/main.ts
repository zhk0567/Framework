import { Capacitor } from '@capacitor/core';
import './style.css';

let count = 0;
const items: string[] = ['示例项'];
let draft = '';

function platformLine(): string {
  const p = Capacitor.getPlatform();
  return `Capacitor 平台标识：<code>${p}</code>（浏览器内多为 <code>web</code>）`;
}

function render() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = `
    <div class="shell">
      <h1>Capacitor 能力展台</h1>
      <p class="lead muted">${platformLine()}</p>
      <p class="lead muted">Web 资源由 Vite 构建到 <code>dist/</code>，再执行 <code>npx cap sync</code> 同步到原生工程（需先 <code>npx cap add android</code> 等）。<strong>Apache Cordova</strong> 为同类更早方案（<code>config.xml</code> + <code>www</code>），可与 Capacitor 官方迁移文档对照。</p>
      <ul class="tag-list">
        <li>Capacitor 8</li>
        <li>Vite 8</li>
        <li>TS</li>
      </ul>
      <section class="panel">
        <h2>状态</h2>
        <p class="lead">计数：<span id="cval">${count}</span></p>
        <div class="row">
          <button type="button" id="inc">+1</button>
        </div>
      </section>
      <section class="panel">
        <h2>列表</h2>
        <div class="row">
          <input type="text" id="draft" placeholder="新条目" value="${escapeHtml(draft)}" />
          <button type="button" class="secondary" id="add">添加</button>
        </div>
        <ul id="list">${items.map((x) => `<li>${escapeHtml(x)}</li>`).join('')}</ul>
      </section>
    </div>
  `;
  document.getElementById('inc')!.onclick = () => {
    count += 1;
    render();
  };
  const inp = document.querySelector<HTMLInputElement>('#draft')!;
  inp.addEventListener('input', () => {
    draft = inp.value;
  });
  document.getElementById('add')!.onclick = () => {
    const t = draft.trim();
    if (!t) return;
    items.unshift(t);
    draft = '';
    render();
  };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');
}

render();
