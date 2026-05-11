<script setup lang="ts">
import { ref } from 'vue';

const tabs = [
  { id: 'a', title: '面板 A', body: '较重 DOM 块 A：列表占位。' },
  { id: 'b', title: '面板 B', body: '较重 DOM 块 B：列表占位。' },
  { id: 'c', title: '面板 C', body: '较重 DOM 块 C：列表占位。' },
] as const;

const active = ref<(typeof tabs)[number]['id']>('a');
</script>

<template>
  <div class="panel">
    <h2>Transition <code>mode="out-in"</code></h2>
    <p class="lead">标签切换时使用淡出再淡入（尊重系统减少动效）。</p>
    <div class="row" style="margin-bottom: 10px">
      <button
        v-for="t in tabs"
        :key="t.id"
        type="button"
        :class="{ secondary: active !== t.id }"
        @click="active = t.id"
      >
        {{ t.title }}
      </button>
    </div>
    <Transition name="fade" mode="out-in">
      <div :key="active" class="heavy-block">
        <template v-for="t in tabs" :key="t.id">
          <div v-if="active === t.id">
            <p style="margin: 0 0 8px">{{ t.body }}</p>
            <ul class="fake-list">
              <li v-for="n in 28" :key="`${t.id}-${n}`">行 {{ n }}</li>
            </ul>
          </div>
        </template>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.heavy-block {
  min-height: 12rem;
  border: 1px dashed var(--border);
  border-radius: 10px;
  padding: 10px 12px;
  overflow: auto;
  max-height: 220px;
}

.fake-list {
  margin: 0;
  padding-left: 1.2rem;
  font-size: 0.8rem;
  color: var(--muted);
}
</style>
