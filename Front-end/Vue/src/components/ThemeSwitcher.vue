<script setup lang="ts">
import type { ThemeMode } from '../composables/appTheme'
import { useAppTheme } from '../composables/appTheme'

const { mode, setMode } = useAppTheme()

const options: { value: ThemeMode; label: string }[] = [
  { value: 'system', label: '跟随系统' },
  { value: 'light', label: '浅色' },
  { value: 'dark', label: '深色' },
]
</script>

<template>
  <div class="theme-switch" role="group" aria-label="外观模式">
    <button
      v-for="opt in options"
      :key="opt.value"
      type="button"
      class="chip"
      :class="{ active: mode === opt.value }"
      @click="setMode(opt.value)"
    >
      {{ opt.label }}
    </button>
  </div>
</template>

<style scoped>
.theme-switch {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  font: 14px/1.2 var(--mono);
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: color-mix(in srgb, var(--code-bg) 80%, var(--bg));
  color: var(--text-h);
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}

.chip:hover {
  border-color: var(--accent-border);
}

.chip.active {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px var(--accent-bg);
}
</style>
