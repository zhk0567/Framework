<script lang="ts">
  let ticks = $state(0);
  let running = $state(true);

  $effect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      ticks += 1;
    }, 1000);
    return () => window.clearInterval(id);
  });
</script>

<div class="panel">
  <h2>$effect 与清理</h2>
  <p class="lead muted">依赖 <code>running</code>；返回函数在依赖变化或卸载时执行，用于清理定时器。</p>
  <p style="margin: 0 0 10px; font-variant-numeric: tabular-nums">ticks: <strong>{ticks}</strong></p>
  <div class="row">
    <button type="button" class="secondary" onclick={() => (running = !running)}>
      {running ? '暂停' : '继续'}
    </button>
    <button type="button" class="secondary" onclick={() => (ticks = 0)}>归零</button>
  </div>
</div>
