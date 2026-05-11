<script setup lang="ts">
import { ref, watch } from 'vue';

type Todo = { id: string; title: string };

const STORAGE = 'vue-demo-todos';
let seq = 0;

function load(): Todo[] {
  try {
    const raw = localStorage.getItem(STORAGE);
    if (!raw) return [{ id: 'seed-1', title: '示例待办' }];
    const parsed = JSON.parse(raw) as Todo[];
    return Array.isArray(parsed) ? parsed : [{ id: 'seed-1', title: '示例待办' }];
  } catch {
    return [{ id: 'seed-1', title: '示例待办' }];
  }
}

const todos = ref<Todo[]>(typeof localStorage !== 'undefined' ? load() : [{ id: 'seed-1', title: '示例待办' }]);
const draft = ref('');

watch(
  todos,
  (v) => {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(v));
    } catch {
      /* ignore quota */
    }
  },
  { deep: true },
);

function add() {
  const t = draft.value.trim();
  if (!t) return;
  seq += 1;
  todos.value = [{ id: `t-${seq}`, title: t }, ...todos.value];
  draft.value = '';
}

function remove(id: string) {
  todos.value = todos.value.filter((x) => x.id !== id);
}
</script>

<template>
  <div class="panel">
    <h2>v-for、watch 深监听</h2>
    <p class="lead">列表写入 <code>localStorage</code>（<code>deep: true</code>）。</p>
    <div class="row">
      <input v-model="draft" type="text" placeholder="新待办" aria-label="新待办" @keyup.enter="add" />
      <button type="button" @click="add">添加</button>
    </div>
    <ul style="margin: 12px 0 0; padding-left: 1.1rem">
      <li v-for="item in todos" :key="item.id" style="margin-bottom: 6px">
        <span>{{ item.title }}</span>
        <button type="button" class="secondary" style="margin-left: 8px" @click="remove(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>
