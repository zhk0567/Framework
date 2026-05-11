<script setup lang="ts">
import PanelFrame from './PanelFrame.vue';
</script>

<template>
  <PanelFrame>
    <template #title>插槽示例</template>
    <template #desc> PanelFrame 使用 <code>#title</code>、<code>#desc</code> 与默认插槽。 </template>
    <p class="muted" style="margin: 0">此处为默认插槽正文。</p>
  </PanelFrame>
</template>
