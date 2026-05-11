import { render, Component } from 'inferno';
import './app.css';

type S = { count: number; draft: string; items: string[] };

class App extends Component<unknown, S> {
  public state: S = {
    count: 0,
    draft: '',
    items: ['示例项'],
  };

  private add = () => {
    const t = this.state.draft.trim();
    if (!t) return;
    this.setState({
      items: [t, ...this.state.items],
      draft: '',
    });
  };

  public render() {
    return (
      <div class="shell">
        <h1>Inferno 能力展台</h1>
        <p class="lead muted">
          类 React 的轻量运行时：<strong>class 组件</strong>、<code>setState</code> 与 JSX（经{' '}
          <code>babel-plugin-inferno</code> 编译）。
        </p>
        <ul class="tag-list">
          {['Inferno 9', 'babel-plugin-inferno', 'Vite 8', 'TS'].map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <section class="panel">
          <h2>状态</h2>
          <p class="lead">计数：{this.state.count}</p>
          <div class="row">
            <button
              type="button"
              onClick={() => this.setState({ count: this.state.count + 1 })}
            >
              +1
            </button>
          </div>
        </section>
        <section class="panel">
          <h2>列表</h2>
          <div class="row">
            <input
              type="text"
              value={this.state.draft}
              onInput={(e) =>
                this.setState({ draft: (e.target as HTMLInputElement).value })
              }
              placeholder="新条目"
            />
            <button type="button" class="secondary" onClick={this.add}>
              添加
            </button>
          </div>
          <ul>
            {this.state.items.map((x, i) => (
              <li key={`${i}-${x}`}>{x}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

render(<App />, document.getElementById('app')!);
