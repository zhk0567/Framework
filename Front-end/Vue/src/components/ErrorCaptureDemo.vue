<script setup lang="ts">
import { onErrorCaptured, ref } from 'vue'
import BuggyWidget from './BuggyWidget.vue'
import PanelFrame from './PanelFrame.vue'

const errMsg = ref<string | null>(null)
const recoverKey = ref(0)

onErrorCaptured((err) => {
  errMsg.value = err instanceof Error ? err.message : String(err)
  return false
})

function retry() {
  errMsg.value = null
  recoverKey.value += 1
}
</script>

<template>
  <PanelFrame panel-id="section-error">
    <template #title><code>onErrorCaptured</code> 错误捕获</template>
    <template #desc>
      Vue 无类组件式 Error Boundary；组合式 API 可在祖先用 <code>onErrorCaptured</code> 拦截子组件树错误并降级展示。
    </template>
    <div v-if="errMsg" class="fallback" role="alert">
      <p>已捕获：<strong>{{ errMsg }}</strong></p>
      <button type="button" class="btn" @click="retry">重试并重挂载子树</button>
    </div>
    <BuggyWidget v-else :key="recoverKey" />
  </PanelFrame>
</template>

<style scoped>
.fallback {
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid var(--accent-border);
  background: var(--accent-bg);
}

.fallback p {
  margin: 0 0 10px;
  font-size: 14px;
  color: var(--text-h);
}

.btn {
  font: 14px var(--sans);
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: var(--accent);
  color: #fff;
}
</style>
