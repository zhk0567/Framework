import './app.css';

class ShowcaseApp extends HTMLElement {
  private count = 0;
  private draft = '';
  private items: string[] = ['示例项'];

  connectedCallback() {
    this.addEventListener('click', this);
    this.addEventListener('input', this);
    this.paint();
  }

  disconnectedCallback() {
    this.removeEventListener('click', this);
    this.removeEventListener('input', this);
  }

  private paint() {
    const itemsHtml = this.items
      .map((x) => `<li>${ShowcaseApp.escape(x)}</li>`)
      .join('');
    this.innerHTML = `
      <div class="shell">
        <h1>Web Components（原生）能力展台</h1>
        <p class="lead muted">
          仅用 <strong>Custom Elements</strong> 与 <strong>HTMLElement</strong>，无 Lit 等封装；状态保存在组件实例字段中。
        </p>
        <ul class="tag-list">
          <li>Custom Elements</li>
          <li>Vite 8</li>
          <li>TS</li>
        </ul>
        <section class="panel">
          <h2>状态</h2>
          <p class="lead">计数：<span data-ref="count">${this.count}</span></p>
          <div class="row">
            <button type="button" data-action="inc">+1</button>
          </div>
        </section>
        <section class="panel">
          <h2>列表</h2>
          <div class="row">
            <input type="text" data-ref="draft" placeholder="新条目" value="${ShowcaseApp.escape(this.draft)}" />
            <button type="button" class="secondary" data-action="add">添加</button>
          </div>
          <ul data-ref="list">${itemsHtml}</ul>
        </section>
      </div>
    `;
  }

  private static escape(s: string): string {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/"/g, '&quot;');
  }

  /** `EventListener`：委托处理点击与输入，避免在 `innerHTML` 上使用内联处理器。 */
  handleEvent(ev: Event) {
    if (ev.type === 'input' && ev.target instanceof HTMLInputElement) {
      if (ev.target.matches('[data-ref="draft"]')) {
        this.draft = ev.target.value;
      }
      return;
    }
    if (ev.type === 'click' && ev.target instanceof HTMLElement) {
      const action = ev.target.closest('[data-action]')?.getAttribute('data-action');
      if (action === 'inc') {
        this.count += 1;
        this.paint();
      }
      if (action === 'add') {
        const t = this.draft.trim();
        if (!t) return;
        this.items = [t, ...this.items];
        this.draft = '';
        this.paint();
      }
    }
  }
}

customElements.define('showcase-app', ShowcaseApp);
