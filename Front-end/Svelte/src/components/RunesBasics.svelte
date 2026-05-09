<script lang="ts">
  let count = $state(0);
  const doubled = $derived(count * 2);
  let name = $state('Svelte');
</script>

<div class="panel">
  <h2>$state 与 $derived</h2>
  <p class="lead muted">编译期响应式：无虚拟 DOM diff 列表，细粒度更新由编译器生成。</p>
  <div class="row" style="margin-bottom: 10px">
    <button type="button" onclick={() => count++}>count: {count}</button>
    <span class="muted">doubled = {doubled}</span>
  </div>
  <label class="muted" for="nm">双向绑定（bind:value）</label>
  <input id="nm" type="text" bind:value={name} maxlength="32" />
  <p class="muted" style="margin: 10px 0 0">你好，{name}。</p>
</div>
