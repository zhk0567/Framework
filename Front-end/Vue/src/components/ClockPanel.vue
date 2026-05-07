<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import PanelFrame from './PanelFrame.vue'

const now = ref(new Date())
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    now.value = new Date()
  }, 1000)
})

onUnmounted(() => {
  if (timer !== undefined) clearInterval(timer)
})

const text = () =>
  now.value.toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
</script>

<template>
  <PanelFrame panel-id="section-clock">
    <template #title>生命周期：<code>onMounted</code> / <code>onUnmounted</code></template>
    <template #desc>
      在挂载时注册定时器，卸载时清理，避免内存泄漏。
    </template>
    <p class="clock-label">实时时钟</p>
    <p class="clock-time" aria-live="polite">{{ text() }}</p>
  </PanelFrame>
</template>

<style scoped>
.clock-label {
  margin: 0 0 4px;
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text);
}

.clock-time {
  margin: 0;
  font: 600 36px/1.1 var(--mono);
  color: var(--text-h);
  letter-spacing: 0.04em;
}
</style>
