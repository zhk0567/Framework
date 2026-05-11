import { Component, State, h } from '@stencil/core';

type Todo = { id: string; title: string };

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @State() count = 0;
  @State() items: Todo[] = [{ id: 'seed-1', title: '示例待办' }];
  @State() draft = '';
  @State() visible = true;
  @State() clock = MyComponent.now();

  private timer?: number;

  componentWillLoad() {
    this.timer = window.setInterval(() => {
      this.clock = MyComponent.now();
    }, 1000);
  }

  disconnectedCallback() {
    if (this.timer) window.clearInterval(this.timer);
  }

  private static now(): string {
    return new Date().toLocaleTimeString('zh-CN', { hour12: false });
  }

  private addTodo = () => {
    const t = this.draft.trim();
    if (!t) return;
    this.items = [{ id: `t-${Date.now()}`, title: t }, ...this.items];
    this.draft = '';
  };

  render() {
    return (
      <div class="shell">
        <header>
          <h1>Stencil 能力展台</h1>
          <p class="lead">
            <strong>Web 组件编译器</strong>；TSX + <code>@State</code>，产出标准 Custom Elements。
          </p>
        </header>
        <ul class="tags">
          <li>编译期</li>
          <li>Shadow DOM</li>
          <li>跨框架分发</li>
        </ul>
        <main class="grid">
          <section class="panel">
            <h2>@State</h2>
            <div class="row">
              <button type="button" onClick={() => this.count++}>
                +1
              </button>
              <span class="muted">
                count = {this.count}， doubled = {this.count * 2}
              </span>
            </div>
          </section>
          <section class="panel">
            <h2>时钟</h2>
            <p class="mono">{this.clock}</p>
          </section>
          <section class="panel">
            <h2>列表</h2>
            <div class="row">
              <input
                type="text"
                value={this.draft}
                onInput={(e) =>
                  (this.draft = (e.target as HTMLInputElement).value)
                }
                onKeyDown={(e) => e.key === 'Enter' && this.addTodo()}
                placeholder="新待办"
              />
              <button type="button" onClick={this.addTodo}>
                添加
              </button>
            </div>
            <ul>
              {this.items.map((it) => (
                <li key={it.id}>{it.title}</li>
              ))}
            </ul>
          </section>
          <section class="panel">
            <h2>条件</h2>
            <button
              type="button"
              class="secondary"
              onClick={() => (this.visible = !this.visible)}
            >
              切换
            </button>
            {this.visible ? <p>主内容可见。</p> : <p class="muted">已隐藏。</p>}
          </section>
        </main>
        <footer class="foot">详见 STENCIL-Compiler-TypeScript.md</footer>
      </div>
    );
  }
}
