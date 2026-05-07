<script setup lang="ts">
import { provideAppTheme } from './composables/appTheme'
import BasicsDemo from './components/BasicsDemo.vue'
import ClockPanel from './components/ClockPanel.vue'
import ErrorCaptureDemo from './components/ErrorCaptureDemo.vue'
import HeavyTabsDemo from './components/HeavyTabsDemo.vue'
import ReactiveFormDemo from './components/ReactiveFormDemo.vue'
import SlotShowcase from './components/SlotShowcase.vue'
import TeleportToastDemo from './components/TeleportToastDemo.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import TodoPanel from './components/TodoPanel.vue'
import WatchSearchDemo from './components/WatchSearchDemo.vue'
import vueLogo from './assets/vue.svg'

provideAppTheme()

const nav = [
  { href: '#section-features', label: '能力总览' },
  { href: '#section-basics', label: 'ref / computed' },
  { href: '#section-clock', label: '生命周期' },
  { href: '#section-todo', label: '列表与 watch' },
  { href: '#section-watch', label: '防抖搜索' },
  { href: '#section-transition', label: 'Transition' },
  { href: '#section-teleport', label: 'Teleport' },
  { href: '#section-reactive', label: 'reactive' },
  { href: '#section-slots', label: '插槽' },
  { href: '#section-error', label: '错误捕获' },
] as const

const tags = [
  'SFC & script setup',
  'provide / inject',
  'ref / reactive / computed',
  'watch 与清理',
  'v-model / v-if / v-for',
  'Transition / Teleport',
  '插槽',
  'onErrorCaptured',
  'onMounted / onUnmounted',
]
</script>

<template>
  <div class="app-shell">
    <header class="hero">
      <img :src="vueLogo" width="44" height="44" alt="Vue logo" />
      <div class="hero-text">
        <h1>Vue 3 能力展台</h1>
        <p class="lead">
          纯前端单页：组合式 API、模板指令与内置组件协同工作；与 React 示例对照阅读更有收获。
        </p>
      </div>
      <ThemeSwitcher />
    </header>

    <nav class="demo-nav" aria-label="本页章节">
      <ul>
        <li v-for="item in nav" :key="item.href">
          <a :href="item.href" class="nav-a">{{ item.label }}</a>
        </li>
      </ul>
    </nav>

    <section id="section-features" class="feature-block" aria-label="能力标签">
      <p class="feature-lead">
        下列模块突出 Vue 与 React 不同的表达方式（如 <code>watch</code> 清理、<code>Teleport</code>、模板过渡等）。
      </p>
      <ul class="feature-tags">
        <li v-for="t in tags" :key="t">{{ t }}</li>
      </ul>
    </section>

    <main class="demo-grid">
      <BasicsDemo />
      <ClockPanel />
      <TodoPanel />
      <WatchSearchDemo />
      <HeavyTabsDemo />
      <TeleportToastDemo />
      <ReactiveFormDemo />
      <SlotShowcase />
      <ErrorCaptureDemo />
    </main>

    <footer class="foot">
      编辑 <code>src/App.vue</code> 与 <code>src/components/*</code> 体验 Vite HMR；无后端。
    </footer>
  </div>
</template>

<style scoped>
.app-shell {
  padding: 24px 20px 40px;
  box-sizing: border-box;
}

.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px 20px;
  justify-content: space-between;
  margin-bottom: 16px;
}

.hero-text {
  flex: 1 1 200px;
  min-width: 0;
}

.lead {
  margin: 8px 0 0;
  font-size: 15px;
  line-height: 1.5;
  color: var(--text);
  max-width: 40rem;
}

.demo-nav {
  margin: 0 0 18px;
  padding: 10px 0;
  border-block: 1px solid var(--border);
}

.demo-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
}

.nav-a {
  font-size: 14px;
  color: var(--accent);
  text-decoration: none;
}

.nav-a:hover {
  text-decoration: underline;
}

.nav-a:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.feature-block {
  margin-bottom: 20px;
}

.feature-lead {
  margin: 0 0 10px;
  font-size: 15px;
  line-height: 1.45;
  color: var(--text);
}

.feature-tags {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.feature-tags li {
  font-size: 13px;
  padding: 6px 10px;
  border-radius: 6px;
  background: var(--code-bg);
  color: var(--text-h);
  border: 1px solid var(--border);
}

.demo-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(100%, 300px), 1fr)
  );
}

.foot {
  margin-top: 28px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  font-size: 14px;
  color: var(--text);
}
</style>
