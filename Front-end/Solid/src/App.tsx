import { For, type Component } from 'solid-js';
import solidLogo from './assets/solid.svg';
import EffectClock from './components/EffectClock';
import ForTodoDemo from './components/ForTodoDemo';
import ShowDemo from './components/ShowDemo';
import SignalsDemo from './components/SignalsDemo';

const nav = [
  { href: '#signals', label: 'Signals' },
  { href: '#effect', label: 'onCleanup' },
  { href: '#for', label: 'For' },
  { href: '#show', label: 'Show' },
] as const;

const tags = [
  'Solid 细粒度响应式',
  'createSignal / createMemo',
  '<For each> 键控列表',
  '<Show when / fallback>',
  'JSX + 编译器优化',
  'render() 入口',
];

const App: Component = () => {
  return (
    <div class="shell">
      <header class="hero">
        <img src={solidLogo} width="44" height="44" alt="Solid logo" />
        <div class="hero-text">
          <h1>Solid 能力展台</h1>
          <p class="lead muted">
            与 React / Vue / Svelte 子项目相同：<strong>Vite + TypeScript</strong>、纯前端无后端。本页突出 Solid 的
            <strong>信号驱动 JSX</strong>（无虚拟 DOM  diff、按依赖更新 DOM）。
          </p>
        </div>
      </header>

      <nav class="demo-nav" aria-label="章节">
        <ul>
          <For each={Array.from(nav)}>
            {(item) => (
              <li>
                <a href={item.href} class="nav-a">
                  {item.label}
                </a>
              </li>
            )}
          </For>
        </ul>
      </nav>

      <section id="features" class="feature-block" aria-label="能力标签">
        <p class="muted" style={{ margin: '0 0 6px' }}>
          下列标签对应本页组件；可对照 React Hooks、Vue <code>ref</code> / <code>computed</code>、Svelte runes 阅读差异。
        </p>
        <ul class="tag-list">
          <For each={tags}>{(t) => <li>{t}</li>}</For>
        </ul>
      </section>

      <main class="grid">
        <SignalsDemo />
        <EffectClock />
        <ForTodoDemo />
        <ShowDemo />
      </main>

      <footer class="foot muted">
        编辑 <code>src/App.tsx</code> 与 <code>src/components/*</code> 体验 HMR；说明见
        <code>SOLID-Vite-TypeScript.md</code>。
      </footer>
    </div>
  );
};

export default App;
