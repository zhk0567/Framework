<script lang="ts">
  import ClassToggle from './components/ClassToggle.svelte';
  import EachTodo from './components/EachTodo.svelte';
  import EffectClock from './components/EffectClock.svelte';
  import RunesBasics from './components/RunesBasics.svelte';
  import SnippetPanel from './components/SnippetPanel.svelte';
  import TransitionCard from './components/TransitionCard.svelte';
  import svelteLogo from './assets/svelte.svg';

  const nav = [
    { href: '#runes', label: 'Runes' },
    { href: '#effect', label: '$effect' },
    { href: '#each', label: '{#each}' },
    { href: '#snippet', label: 'Snippet' },
    { href: '#transition', label: 'transition' },
    { href: '#class', label: 'class:' },
  ] as const;

  const tags = [
    'Svelte 5 runes',
    '$state / $derived / $effect',
    '{#each ... (key)}',
    '{#snippet} / {@render}',
    'svelte/transition',
    'class: 指令',
    'mount() 入口',
  ];
</script>

<div class="shell">
  <header class="hero">
    <img src={svelteLogo} width="44" height="44" alt="Svelte logo" />
    <div class="hero-text">
      <h1>Svelte 5 能力展台</h1>
      <p class="lead muted">
        与 React / Vue 子项目相同：<strong>Vite + TypeScript</strong>、纯前端无后端。本页突出 Svelte 的<strong>编译期响应式</strong>与模板语法（runes、snippet、过渡等）。
      </p>
    </div>
  </header>

  <nav class="demo-nav" aria-label="章节">
    <ul>
      {#each nav as item (item.href)}
        <li><a href={item.href} class="nav-a">{item.label}</a></li>
      {/each}
    </ul>
  </nav>

  <section id="features" class="feature-block" aria-label="能力标签">
    <p class="muted" style="margin: 0 0 6px">
      下列标签对应本页组件；对照 Vue 的 Composition API 或 React 的 Hooks 阅读差异。
    </p>
    <ul class="tag-list">
      {#each tags as t (t)}
        <li>{t}</li>
      {/each}
    </ul>
  </section>

  <main class="grid">
    <section id="runes"><RunesBasics /></section>
    <section id="effect"><EffectClock /></section>
    <section id="each"><EachTodo /></section>
    <section id="snippet">
      <SnippetPanel>
        {#snippet title()}
          Snippet 与 render
        {/snippet}
        {#snippet body()}
          <p class="muted" style="margin: 0">
            父组件用 <code>{'{#snippet}'}</code> 传入片段；子组件用 <code>$props()</code> 接收
            <code>Snippet</code> 类型并输出 <code>{'{@render}'}</code> 调用结果。
          </p>
        {/snippet}
      </SnippetPanel>
    </section>
    <section id="transition"><TransitionCard /></section>
    <section id="class"><ClassToggle /></section>
  </main>

  <footer class="foot muted">
    编辑 <code>src/App.svelte</code> 与 <code>src/components/*</code> 体验 HMR；说明见
    <code>SVELTE-Vite-TypeScript.md</code>。
  </footer>
</div>

<style>
  .shell {
    padding: 24px 20px 40px;
    max-width: 960px;
    margin: 0 auto;
  }

  .hero {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: flex-start;
    margin-bottom: 16px;
  }

  .hero-text h1 {
    margin: 0;
    font-size: 1.65rem;
    letter-spacing: -0.02em;
  }

  .lead {
    margin: 8px 0 0;
    max-width: 44rem;
  }

  .demo-nav {
    margin: 0 0 18px;
  }

  .demo-nav ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 12px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav-a {
    color: var(--accent);
    text-decoration: none;
    font-size: 0.9rem;
  }

  .nav-a:hover {
    text-decoration: underline;
  }

  .feature-block {
    margin-bottom: 18px;
  }

  .grid {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .foot {
    margin-top: 22px;
    font-size: 0.875rem;
  }
</style>
