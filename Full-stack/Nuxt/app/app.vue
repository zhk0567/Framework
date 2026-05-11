<template>
  <div class="shell">
    <h1>Nuxt 全栈展台</h1>
    <p class="muted">
      与 <code>Full-stack/Nextjs</code> 类似：页面 + 同进程 <code>GET /api/demo</code>（Nitro）。开发端口 <strong>3031</strong>。
    </p>
    <pre class="json">{{ text }}</pre>
  </div>
</template>

<script setup lang="ts">
const { data, pending, error } = await useFetch('/api/demo');

const text = computed(() => {
  if (pending.value) return '加载中…';
  if (error.value) return String(error.value);
  return JSON.stringify(data.value, null, 2);
});
</script>

<style scoped>
.shell {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1.25rem;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
.muted {
  color: #64748b;
}
.json {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: #0f172a;
  color: #e2e8f0;
  overflow: auto;
  font-size: 0.85rem;
}
</style>
