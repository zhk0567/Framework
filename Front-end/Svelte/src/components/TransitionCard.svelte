<script lang="ts">
  import { fade, fly } from 'svelte/transition';

  let visible = $state(true);
</script>

<div class="panel">
  <h2>svelte/transition</h2>
  <p class="lead muted">内置过渡与 <code>in:</code> / <code>out:</code> 指令，无需手写动画状态机。</p>
  <div class="row" style="margin-bottom: 12px">
    <button type="button" class="secondary" onclick={() => (visible = !visible)}>
      {visible ? '隐藏' : '显示'}
    </button>
  </div>
  {#if visible}
    <div class="card" in:fly={{ y: 10, duration: 220 }} out:fade={{ duration: 180 }}>
      这段内容使用 <code>fly</code> 进入、<code>fade</code> 离开。
    </div>
  {/if}
</div>

<style>
  .card {
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px dashed var(--accent);
    background: var(--accent-soft);
    color: var(--text);
  }
</style>
