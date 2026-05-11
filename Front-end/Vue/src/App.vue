<script setup lang="ts">
import { provideAppTheme } from './composables/appTheme';
import BasicsDemo from './components/BasicsDemo.vue';
import ClockPanel from './components/ClockPanel.vue';
import ErrorCaptureDemo from './components/ErrorCaptureDemo.vue';
import HeavyTabsDemo from './components/HeavyTabsDemo.vue';
import ReactiveFormDemo from './components/ReactiveFormDemo.vue';
import SlotShowcase from './components/SlotShowcase.vue';
import TeleportToastDemo from './components/TeleportToastDemo.vue';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import TodoPanel from './components/TodoPanel.vue';
import WatchSearchDemo from './components/WatchSearchDemo.vue';
import vueLogo from './assets/vue.svg';

provideAppTheme();

const nav = [
  { href: '#theme', label: '主题' },
  { href: '#basics', label: 'ref / computed' },
  { href: '#clock', label: '生命周期' },
  { href: '#todo', label: 'v-for / watch' },
  { href: '#search', label: '防抖' },
  { href: '#tabs', label: 'Transition' },
  { href: '#toast', label: 'Teleport' },
  { href: '#form', label: 'reactive' },
  { href: '#slots', label: '插槽' },
  { href: '#error', label: '错误捕获' },
] as const;

const tags = [
  'Vue 3 · script setup',
  'provide / inject 主题',
  'ref / reactive / computed',
  'watch 深监听与防抖',
  'v-model、v-for、Teleport',
  'Transition mode="out-in"',
  'onErrorCaptured',
];
</script>

<template>
  <div class="shell">
    <header class="hero">
      <img :src="vueLogo" width="44" height="44" alt="Vue logo" />
      <div class="hero-text">
        <h1>Vue 3 能力展台</h1>
        <p class="lead muted">
          与仓库内 Svelte / Preact 等子项目一致：<strong>Vite + TypeScript</strong>、纯前端无后端。本页覆盖文档
          <code>VUE-Vite-TypeScript.md</code> 所列能力点。
        </p>
      </div>
    </header>

    <nav class="demo-nav" aria-label="章节">
      <ul>
        <li v-for="item in nav" :key="item.href">
          <a :href="item.href" class="nav-a">{{ item.label }}</a>
        </li>
      </ul>
    </nav>

    <section id="features" class="feature-block" aria-label="能力标签">
      <p class="muted" style="margin: 0 0 6px">下列标签对应本页各面板。</p>
      <ul class="tag-list">
        <li v-for="t in tags" :key="t">{{ t }}</li>
      </ul>
    </section>

    <main class="grid">
      <section id="theme"><ThemeSwitcher /></section>
      <section id="basics"><BasicsDemo /></section>
      <section id="clock"><ClockPanel /></section>
      <section id="todo"><TodoPanel /></section>
      <section id="search"><WatchSearchDemo /></section>
      <section id="tabs"><HeavyTabsDemo /></section>
      <section id="toast"><TeleportToastDemo /></section>
      <section id="form"><ReactiveFormDemo /></section>
      <section id="slots"><SlotShowcase /></section>
      <section id="error"><ErrorCaptureDemo /></section>
    </main>

    <footer class="foot muted">
      编辑 <code>src/App.vue</code> 与 <code>src/components/*</code> 体验 HMR；说明见
      <code>VUE-Vite-TypeScript.md</code>。
    </footer>
  </div>
</template>

<style scoped>
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
