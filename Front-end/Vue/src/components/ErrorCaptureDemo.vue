<script setup lang="ts">
import { onErrorCaptured, ref } from 'vue';
import BuggyWidget from './BuggyWidget.vue';

const trigger = ref(false);
const captured = ref<string | null>(null);

onErrorCaptured((err) => {
  captured.value = err instanceof Error ? err.message : String(err);
  trigger.value = false;
  return false;
});

function boom() {
  captured.value = null;
  trigger.value = true;
}
</script>

<template>
  <div class="panel">
    <h2>onErrorCaptured</h2>
    <p class="lead">捕获子组件错误并降级展示（思路接近 React Error Boundary）。</p>
    <BuggyWidget :trigger="trigger" />
    <div class="row" style="margin-top: 10px">
      <button type="button" @click="boom">触发错误</button>
    </div>
    <p v-if="captured" class="muted" style="margin: 10px 0 0">已捕获：{{ captured }}</p>
  </div>
</template>
