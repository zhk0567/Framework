<script setup lang="ts">
import { computed, ref } from 'vue';

const count = ref(0);
const doubled = computed(() => count.value * 2);
const label = ref('双向绑定');
</script>

<template>
  <div class="panel">
    <h2>ref、computed、v-model</h2>
    <p class="lead">计数与派生值；文本框演示 <code>v-model</code>。</p>
    <div class="row">
      <button type="button" @click="count++">+1</button>
      <span class="muted">count = {{ count }}，doubled = {{ doubled }}</span>
    </div>
    <div class="row" style="margin-top: 10px">
      <input v-model="label" type="text" aria-label="演示输入" />
      <span class="muted">{{ label }}</span>
    </div>
  </div>
</template>
