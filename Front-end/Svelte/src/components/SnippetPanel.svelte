<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    title,
    body,
  }: {
    title: Snippet;
    body: Snippet;
  } = $props();
</script>

<div class="panel">
  <h2>{@render title()}</h2>
  <div class="snippet-body">
    {@render body()}
  </div>
</div>

<style>
  .snippet-body {
    margin-top: 4px;
  }
</style>
