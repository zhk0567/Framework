<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const time = ref('');

function tick() {
  time.value = new Date().toLocaleTimeString('zh-CN', { hour12: false });
}

let id: ReturnType<typeof setInterval> | undefined;

onMounted(() => {
  tick();
  id = window.setInterval(tick, 1000);
});

onUnmounted(() => {
  if (id !== undefined) window.clearInterval(id);
});
</script>

<template>
  <div class="panel">
    <h2>生命周期与定时器</h2>
    <p class="lead"><code>onMounted</code> 注册、<code>onUnmounted</code> 清理。</p>
    <p style="margin: 0; font-variant-numeric: tabular-nums">{{ time }}</p>
  </div>
</template>
