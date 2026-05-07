<script setup lang="ts">
import { computed, ref } from 'vue'

const broken = ref(false)

const mustNotThrow = computed(() => {
  if (broken.value) {
    throw new Error('演示用渲染错误')
  }
  return '正常'
})
</script>

<template>
  <div>
    <p class="hint">点击后下一次渲染会在计算属性中求值抛错。</p>
    <button type="button" class="btn ghost" @click="broken = true">
      触发渲染错误
    </button>
    <p class="ok">{{ mustNotThrow }}</p>
  </div>
</template>

<style scoped>
.hint {
  margin: 0 0 10px;
  font-size: 14px;
  line-height: 1.45;
  color: var(--text);
}

.btn.ghost {
  font: 14px var(--sans);
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-h);
  cursor: pointer;
}

.ok {
  margin-top: 10px;
  font-size: 14px;
  color: var(--text-h);
}
</style>
