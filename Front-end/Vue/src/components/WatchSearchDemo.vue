<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const corpus = ['苹果', '香蕉', '葡萄', '西瓜', '草莓', '芒果', '菠萝'];
const query = ref('');
const debounced = ref('');

let timer: ReturnType<typeof setTimeout> | undefined;

watch(query, (q) => {
  if (timer !== undefined) window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    debounced.value = q;
  }, 280);
});

const filtered = computed(() => {
  const q = debounced.value.trim();
  if (!q) return corpus;
  return corpus.filter((x) => x.includes(q));
});
</script>

<template>
  <div class="panel">
    <h2>watch 与防抖</h2>
    <p class="lead">输入后延迟过滤列表；每次变更会清理上一次 <code>setTimeout</code>。</p>
    <input v-model="query" type="text" placeholder="过滤水果…" aria-label="搜索" />
    <p class="muted" style="margin: 8px 0 0">匹配：{{ filtered.join('、') || '（无）' }}</p>
  </div>
</template>
