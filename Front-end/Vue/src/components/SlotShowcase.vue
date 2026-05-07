<script setup lang="ts">
import PanelFrame from './PanelFrame.vue'
</script>

<template>
  <PanelFrame panel-id="section-slots">
    <template #title>插槽：<code>slot</code> 与内容分发</template>
    <template #desc>
      <code>PanelFrame</code> 使用默认插槽放正文、<code>#title</code> / <code>#desc</code> 命名插槽放标题与说明（本页各卡片均复用该模式）。
    </template>
    <p class="body">
      外层组件定义结构，内层通过插槽注入可变内容，利于布局复用与「壳 + 内容」分离。
    </p>
  </PanelFrame>
</template>

<style scoped>
.body {
  font-size: 15px;
  line-height: 1.5;
  color: var(--text);
}
</style>
