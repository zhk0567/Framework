<script setup lang="ts">
import { computed, ref } from 'vue'
import PanelFrame from './PanelFrame.vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)
const note = ref('')
const trimmedLen = computed(() => note.value.trim().length)
</script>

<template>
  <PanelFrame panel-id="section-basics">
    <template #title>响应式：<code>ref</code> 与 <code>computed</code></template>
    <template #desc>
      模板中 ref 自动解包；脚本内用 <code>.value</code>。<code>computed</code> 缓存派生值。
    </template>
    <p class="stat">
      计数 <strong>{{ count }}</strong> · 双倍 <strong>{{ doubled }}</strong>
    </p>
    <button type="button" class="btn" @click="count++">+1</button>
    <button type="button" class="btn ghost" @click="count = 0">归零</button>
    <h3 class="sub">双向绑定：<code>v-model</code></h3>
    <input
      v-model="note"
      class="input"
      type="text"
      placeholder="写一句备注"
      aria-label="备注"
    />
    <p class="stat">去首尾空格后长度：<strong>{{ trimmedLen }}</strong></p>
  </PanelFrame>
</template>

<style scoped>
.sub {
  margin: 18px 0 8px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-h);
}

.stat {
  margin: 10px 0;
  font-size: 15px;
}

.stat strong {
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}

.btn {
  font: 15px var(--sans);
  padding: 10px 18px;
  margin: 4px 8px 0 0;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: var(--accent);
  color: #fff;
}

.btn:hover {
  filter: brightness(1.06);
}

.btn.ghost {
  background: transparent;
  color: var(--text-h);
  border: 1px solid var(--border);
}

.input {
  width: 100%;
  max-width: 28rem;
  box-sizing: border-box;
  margin-top: 8px;
  padding: 10px 12px;
  font: 15px var(--sans);
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text-h);
}

.input:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 1px;
}
</style>
