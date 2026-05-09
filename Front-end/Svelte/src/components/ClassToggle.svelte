<script lang="ts">
  const items = ['编译器', '细粒度', '模板'] as const;
  let active = $state<(typeof items)[number]>('编译器');
</script>

<div class="panel">
  <h2>class: 指令</h2>
  <p class="lead muted">根据状态切换类名，无需拼接字符串。</p>
  <div class="pills">
    {#each items as item (item)}
      <button
        type="button"
        class="pill"
        class:active={active === item}
        onclick={() => (active = item)}
      >
        {item}
      </button>
    {/each}
  </div>
  <p class="muted" style="margin: 12px 0 0">当前：<strong>{active}</strong></p>
</div>

<style>
  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .pill {
    background: transparent;
    color: var(--text);
    border-color: var(--border);
  }

  .pill.active {
    background: var(--accent);
    color: #fff;
    border-color: var(--accent);
  }
</style>
