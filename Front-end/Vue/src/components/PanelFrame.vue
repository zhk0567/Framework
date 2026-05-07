<script setup lang="ts">
defineProps<{
  /** 锚点 id，供页内导航 */
  panelId?: string
}>()
</script>

<template>
  <section
    class="demo-panel"
    :id="panelId"
    role="region"
  >
    <header class="demo-panel-head">
      <h2 class="demo-panel-title">
        <slot name="title">标题</slot>
      </h2>
      <p v-if="$slots.desc" class="demo-panel-desc">
        <slot name="desc" />
      </p>
    </header>
    <div class="demo-panel-body">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.demo-panel {
  padding: 18px 20px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: color-mix(in srgb, var(--code-bg) 50%, var(--bg));
  box-shadow: var(--shadow);
}

.demo-panel-head {
  margin-bottom: 14px;
}

.demo-panel-title {
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 600;
  color: var(--text-h);
}

.demo-panel-title :deep(code) {
  font-size: 14px;
}

.demo-panel-desc {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--text);
}

.demo-panel-desc :deep(code) {
  font-size: 13px;
}

.demo-panel-body {
  font-size: 15px;
  color: var(--text);
}
</style>
