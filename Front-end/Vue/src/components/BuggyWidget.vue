<script setup lang="ts">
import BuggyInner from './BuggyInner.vue';

defineProps<{
  trigger: boolean;
}>();
</script>

<template>
  <BuggyInner v-if="trigger" />
  <p v-else class="muted" style="margin: 0">点击下方按钮触发子组件挂载期错误。</p>
</template>
