<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import PanelFrame from './PanelFrame.vue'

type Todo = { id: string; text: string; done: boolean }

const STORAGE = 'vue-demo-todos'

function load(): Todo[] {
  try {
    const raw = localStorage.getItem(STORAGE)
    if (!raw) return []
    const arr = JSON.parse(raw) as unknown
    if (!Array.isArray(arr)) return []
    return arr.filter(
      (x): x is Todo =>
        typeof x === 'object' &&
        x !== null &&
        'id' in x &&
        'text' in x &&
        'done' in x,
    )
  } catch {
    return []
  }
}

const todos = ref<Todo[]>(load())
const draft = ref('')

watch(
  todos,
  (v) => {
    localStorage.setItem(STORAGE, JSON.stringify(v))
  },
  { deep: true },
)

const stats = computed(() => {
  const total = todos.value.length
  const done = todos.value.filter((t) => t.done).length
  return { total, done, open: total - done }
})

function add() {
  const t = draft.value.trim()
  if (!t) return
  todos.value = [
    ...todos.value,
    { id: crypto.randomUUID(), text: t, done: false },
  ]
  draft.value = ''
}

function toggle(id: string) {
  todos.value = todos.value.map((x) =>
    x.id === id ? { ...x, done: !x.done } : x,
  )
}

function remove(id: string) {
  todos.value = todos.value.filter((x) => x.id !== id)
}

function clearDone() {
  todos.value = todos.value.filter((x) => !x.done)
}
</script>

<template>
  <PanelFrame panel-id="section-todo">
    <template #title>列表与 <code>watch</code> 持久化</template>
    <template #desc>
      使用 <code>v-for</code> 与 <code>:key</code>；<code>watch(..., { deep: true })</code> 同步
      <code>localStorage</code>（键名 <code>{{ STORAGE }}</code>）。
    </template>
    <form class="row" @submit.prevent="add">
      <input
        v-model="draft"
        class="input"
        type="text"
        placeholder="新待办，回车添加"
        aria-label="新待办"
      />
      <button type="submit" class="btn">添加</button>
    </form>
    <p class="meta" aria-live="polite">
      共 {{ stats.total }} 条 · 未完成 {{ stats.open }} · 已完成 {{ stats.done }}
    </p>
    <p v-if="todos.length === 0" class="empty">暂无待办（<code>v-if</code>）。</p>
    <ul v-else class="list">
      <li v-for="t in todos" :key="t.id" class="li">
        <label class="lab">
          <input type="checkbox" :checked="t.done" @change="toggle(t.id)" />
          <span :class="{ strike: t.done }">{{ t.text }}</span>
        </label>
        <button type="button" class="mini" @click="remove(t.id)">移除</button>
      </li>
    </ul>
    <button
      v-if="stats.done > 0"
      type="button"
      class="btn ghost"
      @click="clearDone"
    >
      清除已完成
    </button>
  </PanelFrame>
</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
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

.btn {
  font: 15px var(--sans);
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: var(--accent);
  color: #fff;
}

.btn.ghost {
  margin-top: 10px;
  background: transparent;
  color: var(--text-h);
  border: 1px solid var(--border);
}

.meta {
  margin: 12px 0 0;
  font-size: 14px;
}

.empty {
  margin-top: 10px;
  font-size: 14px;
}

.list {
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--bg);
}

.lab {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  cursor: pointer;
  font-size: 15px;
  color: var(--text-h);
}

.strike {
  text-decoration: line-through;
  color: var(--text);
}

.mini {
  flex-shrink: 0;
  font-size: 13px;
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--code-bg);
  cursor: pointer;
}
</style>
