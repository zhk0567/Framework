<script setup lang="ts">
import { ref, watch } from 'vue'
import PanelFrame from './PanelFrame.vue'

const open = ref(false)
const TOAST_MS = 3200

watch(
  open,
  (v) => {
    if (!v) return
    const id = window.setTimeout(() => {
      open.value = false
    }, TOAST_MS)
    return () => clearTimeout(id)
  },
  { flush: 'post' },
)
</script>

<template>
  <PanelFrame panel-id="section-teleport">
    <template #title><code>&lt;Teleport&gt;</code> 挂到 body</template>
    <template #desc>
      提示层渲染在 <code>body</code> 下，脱离父级 overflow；关闭时 <code>watch</code> 清理定时器。
    </template>
    <button type="button" class="btn" @click="open = true">显示 Teleport 提示</button>

    <Teleport to="body">
      <div
        v-if="open"
        class="toast-root"
        role="status"
        aria-live="polite"
      >
        <div class="toast-card">
          <strong>来自 Teleport</strong>
          <span>约 {{ Math.round(TOAST_MS / 1000) }} 秒后自动关闭。</span>
        </div>
      </div>
    </Teleport>
  </PanelFrame>
</template>

<style scoped>
.btn {
  font: 15px var(--sans);
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: var(--accent);
  color: #fff;
}

.toast-root {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 9999;
  max-width: min(360px, calc(100vw - 32px));
  animation: toastIn 0.26s ease-out;
}

@keyframes toastIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.toast-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--bg);
  box-shadow: var(--shadow);
  color: var(--text-h);
  font-size: 14px;
}

.toast-card span {
  color: var(--text);
  font-size: 13px;
}

@media (prefers-reduced-motion: reduce) {
  .toast-root {
    animation: none;
  }
}
</style>
