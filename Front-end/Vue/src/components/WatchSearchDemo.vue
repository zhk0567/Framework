<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import PanelFrame from './PanelFrame.vue'

const TOTAL = 400
const items = Array.from({ length: TOTAL }, (_, i) => {
  const tags = ['组合式', '模板', '响应式', '编译器']
  return `条目 ${i + 1} · ${tags[i % tags.length]}`
})

const query = ref('')
const debounced = ref('')

watch(
  query,
  (q) => {
    const id = window.setTimeout(() => {
      debounced.value = q
    }, 220)
    return () => clearTimeout(id)
  },
  { flush: 'post' },
)

const filtered = computed(() => {
  const q = debounced.value.trim().toLowerCase()
  if (!q) return items
  return items.filter((line) => line.toLowerCase().includes(q))
})

const catching = computed(() => query.value !== debounced.value)
</script>

<template>
  <PanelFrame panel-id="section-watch">
    <template #title><code>watch</code> 防抖与 <code>computed</code></template>
    <template #desc>
      输入立即反映在 <code>query</code>；<code>watch</code> 返回清理函数清除旧定时器；列表按
      <code>debounced</code> 筛选，体现与 React <code>useDeferredValue</code> 相近的「追赶」体验。
    </template>
    <div class="row">
      <input
        v-model="query"
        class="input"
        type="search"
        placeholder="筛选…"
        aria-label="筛选"
      />
      <span class="badge" :class="{ on: catching }" aria-live="polite">
        {{ catching ? '列表追赶输入…' : '已同步' }}
      </span>
    </div>
    <p class="meta">共 {{ TOTAL }} 条 · 匹配 {{ filtered.length }} 条</p>
    <ul class="list">
      <li v-for="(line, i) in filtered.slice(0, 70)" :key="i + line.slice(0, 20)">
        {{ line }}
      </li>
    </ul>
    <p v-if="filtered.length > 70" class="hint">仅展示前 70 条。</p>
  </PanelFrame>
</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.input {
  flex: 1 1 200px;
  min-width: 0;
  padding: 10px 12px;
  font: 15px var(--sans);
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text-h);
}

.badge {
  font-size: 13px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  white-space: nowrap;
}

.badge.on {
  border-color: var(--accent-border);
  background: var(--accent-bg);
  color: var(--text-h);
}

.meta {
  margin: 10px 0 8px;
  font-size: 14px;
}

.list {
  margin: 0;
  padding: 0 6px 0 0;
  list-style: none;
  max-height: 200px;
  overflow: auto;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--bg);
}

.list li {
  padding: 6px 10px;
  font-size: 13px;
  line-height: 1.35;
  color: var(--text-h);
  border-bottom: 1px solid var(--border);
}

.list li:last-child {
  border-bottom: none;
}

.hint {
  margin: 8px 0 0;
  font-size: 13px;
  color: var(--text);
}
</style>
