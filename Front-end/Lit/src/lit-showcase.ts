import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

type Todo = { id: string; title: string }

let idSeq = 1

@customElement('lit-showcase')
export class LitShowcase extends LitElement {
  @state() private count = 0
  @state() private items: Todo[] = [{ id: 'seed-1', title: '示例待办（@state）' }]
  @state() private draft = ''
  @state() private visible = true
  @state() private clock = LitShowcase.formatTime()

  private timer?: ReturnType<typeof setInterval>

  connectedCallback(): void {
    super.connectedCallback()
    this.timer = setInterval(() => {
      this.clock = LitShowcase.formatTime()
    }, 1000)
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    if (this.timer) clearInterval(this.timer)
  }

  private static formatTime(): string {
    return new Date().toLocaleTimeString('zh-CN', { hour12: false })
  }

  render() {
    const doubled = this.count * 2
    return html`
      <div class="shell">
        <header>
          <h1>Lit 能力展台</h1>
          <p class="lead">
            <strong>Web Components</strong> + <code>@state</code> 细粒度更新；模板使用
            <code>html</code> 标签函数。
          </p>
        </header>
        <ul class="tags">
          ${['LitElement / customElement', 'css 模板局部样式', '标准 Web 组件'].map(
            (t) => html`<li>${t}</li>`,
          )}
        </ul>
        <main class="grid">
          <section class="panel">
            <h2>@state</h2>
            <p class="lead">派生 doubled 在 render 内计算。</p>
            <div class="row">
              <button type="button" @click=${() => this.count++}>+1</button>
              <span class="muted">count = ${this.count}， doubled = ${doubled}</span>
            </div>
          </section>
          <section class="panel">
            <h2>时钟</h2>
            <p class="lead">connectedCallback 内 setInterval。</p>
            <p class="mono">${this.clock}</p>
          </section>
          <section class="panel">
            <h2>列表</h2>
            <p class="lead">immutable 更新数组。</p>
            <div class="row">
              <input
                type="text"
                .value=${this.draft}
                @input=${(e: InputEvent) => {
                  this.draft = (e.target as HTMLInputElement).value
                }}
                @keydown=${(e: KeyboardEvent) => e.key === 'Enter' && this.addTodo()}
                placeholder="新待办"
              />
              <button type="button" @click=${this.addTodo}>添加</button>
            </div>
            <ul>
              ${this.items.map((it) => html`<li>${it.title}</li>`)}
            </ul>
          </section>
          <section class="panel">
            <h2>条件</h2>
            <p class="lead">三元或 if 模板。</p>
            <button type="button" class="secondary" @click=${() => (this.visible = !this.visible)}>
              切换
            </button>
            ${this.visible
              ? html`<p>主内容可见。</p>`
              : html`<p class="muted">已隐藏。</p>`}
          </section>
        </main>
        <footer class="foot"><span class="muted">详见 LIT-Vite-TypeScript.md</span></footer>
      </div>
    `
  }

  private addTodo = (): void => {
    const t = this.draft.trim()
    if (!t) return
    idSeq += 1
    this.items = [{ id: `t-${idSeq}`, title: t }, ...this.items]
    this.draft = ''
  }

  static styles = css`
    :host {
      display: block;
      --accent: #325cff;
      --muted: #8b9cb3;
      --border: #2d3a4d;
      --card: #1a2332;
      --text: #e6edf3;
    }
    @media (prefers-color-scheme: light) {
      :host {
        --muted: #64748b;
        --border: #e2e8f0;
        --card: #fff;
        --text: #0f172a;
      }
    }
    h1 {
      margin: 0 0 8px;
      font-size: 1.65rem;
      color: var(--text);
    }
    h2 {
      margin: 0 0 8px;
      font-size: 1rem;
      color: var(--accent);
    }
    .shell {
      padding: 24px 20px 40px;
      max-width: 960px;
      margin: 0 auto;
    }
    .lead {
      margin: 0 0 10px;
      font-size: 0.9rem;
      color: var(--muted);
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      list-style: none;
      padding: 0;
      margin: 12px 0 0;
    }
    .tags li {
      font-size: 0.75rem;
      padding: 2px 8px;
      border-radius: 999px;
      border: 1px solid var(--border);
      color: var(--muted);
    }
    .grid {
      display: grid;
      gap: 14px;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      margin-top: 18px;
    }
    .panel {
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 14px 16px;
      background: var(--card);
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
      margin-bottom: 8px;
    }
    button {
      cursor: pointer;
      border-radius: 8px;
      border: 1px solid var(--border);
      background: var(--accent);
      color: #fff;
      padding: 6px 12px;
      font-size: 0.875rem;
    }
    button.secondary {
      background: transparent;
      color: var(--text);
    }
    input {
      max-width: 20rem;
      padding: 6px 10px;
      border-radius: 8px;
      border: 1px solid var(--border);
      background: transparent;
      color: inherit;
    }
    .muted {
      color: var(--muted);
      font-size: 0.875rem;
    }
    .mono {
      margin: 0;
      font-variant-numeric: tabular-nums;
    }
    ul {
      margin: 0;
      padding-left: 1.1rem;
    }
    .foot {
      margin-top: 22px;
      font-size: 0.875rem;
    }
    code {
      font-size: 0.9em;
      padding: 0.1em 0.35em;
      border-radius: 6px;
      background: rgba(50, 92, 255, 0.12);
      color: var(--accent);
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-showcase': LitShowcase
  }
}
