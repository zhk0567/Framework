<script setup lang="ts">
import { onUnmounted, ref } from 'vue';

const visible = ref(false);
const message = ref('这是一条 Teleport 到 body 的提示');

let hideTimer: ReturnType<typeof setTimeout> | undefined;

function show() {
  if (hideTimer !== undefined) window.clearTimeout(hideTimer);
  visible.value = true;
  hideTimer = window.setTimeout(() => {
    visible.value = false;
  }, 2200);
}

onUnmounted(() => {
  if (hideTimer !== undefined) window.clearTimeout(hideTimer);
});
</script>

<template>
  <div class="panel">
    <h2>Teleport</h2>
    <p class="lead">提示层挂到 <code>document.body</code>，避免被父级裁剪。</p>
    <button type="button" @click="show">显示 2 秒后关闭</button>
    <Teleport to="body">
      <div v-if="visible" class="toast" role="status">{{ message }}</div>
    </Teleport>
  </div>
</template>

<style scoped>
.toast {
  position: fixed;
  right: 20px;
  bottom: 24px;
  padding: 12px 16px;
  border-radius: 10px;
  background: var(--card);
  border: 1px solid var(--border);
  color: var(--text);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
  z-index: 9999;
  max-width: min(90vw, 320px);
}
</style>
