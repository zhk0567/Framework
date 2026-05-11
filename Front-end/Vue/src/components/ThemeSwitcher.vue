<script setup lang="ts">
import { useAppTheme } from '../composables/appTheme';

const { theme, toggle } = useAppTheme();
</script>

<template>
  <div class="panel">
    <h2>主题（provide / inject）</h2>
    <p class="lead">切换后写入 <code>html[data-theme]</code> 与 <code>localStorage</code>。</p>
    <div class="row">
      <span class="muted">当前：{{ theme }}</span>
      <button type="button" class="secondary" @click="toggle">切换亮 / 暗</button>
    </div>
  </div>
</template>
