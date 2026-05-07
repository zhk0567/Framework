<script setup lang="ts">
import { ref } from 'vue'
import PanelFrame from './PanelFrame.vue'

type Tab = 'a' | 'b' | 'c'

const tab = ref<Tab>('a')

const tabs: { id: Tab; label: string }[] = [
  { id: 'a', label: '面板 A' },
  { id: 'b', label: '面板 B' },
  { id: 'c', label: '面板 C' },
]
</script>

<template>
  <PanelFrame panel-id="section-transition">
    <template #title><code>&lt;Transition&gt;</code> 与重内容切换</template>
    <template #desc>
      <code>mode="out-in"</code> 先出后进；内部用 <code>:key</code> 区分面板以便过渡与重渲染。
    </template>
    <div class="bar" role="tablist" aria-label="演示标签">
      <button
        v-for="t in tabs"
        :key="t.id"
        type="button"
        class="tab"
        :class="{ active: tab === t.id }"
        role="tab"
        :aria-selected="tab === t.id"
        @click="tab = t.id"
      >
        {{ t.label }}
      </button>
    </div>
    <Transition name="fade" mode="out-in">
      <div :key="tab" class="pane" role="tabpanel">
        <p class="pane-title">大量节点 · {{ tab.toUpperCase() }}</p>
        <div class="grid" aria-hidden="true">
          <span v-for="n in 280" :key="n" class="cell" />
        </div>
      </div>
    </Transition>
  </PanelFrame>
</template>

<style scoped>
.bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.tab {
  font: 14px var(--sans);
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text-h);
  cursor: pointer;
}

.tab.active {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px var(--accent-bg);
}

.pane-title {
  margin: 0 0 8px;
  font-size: 14px;
  color: var(--text-h);
}

.grid {
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  gap: 3px;
}

.cell {
  aspect-ratio: 1;
  border-radius: 2px;
  background: color-mix(in srgb, var(--accent) 38%, var(--border));
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }
}
</style>
