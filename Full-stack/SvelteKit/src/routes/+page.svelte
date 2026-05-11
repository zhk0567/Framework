<script lang="ts">
  import { onMount } from 'svelte';

  let text = $state('加载中…');

  onMount(async () => {
    try {
      const r = await fetch('/api/demo');
      text = JSON.stringify(await r.json(), null, 2);
    } catch {
      text = '请求失败';
    }
  });
</script>

<div class="shell">
  <h1>SvelteKit 全栈展台</h1>
  <p class="muted">
    与仓库其它全栈子目录一致：<strong>GET /api/demo</strong>（<code>+server.ts</code>）。开发端口
    <strong>3032</strong>。
  </p>
  <pre class="json">{text}</pre>
</div>

<style>
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
    white-space: pre-wrap;
  }
</style>
