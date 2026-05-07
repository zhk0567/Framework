import {
  computed,
  inject,
  onMounted,
  onUnmounted,
  provide,
  ref,
  watch,
  type ComputedRef,
  type InjectionKey,
  type Ref,
} from 'vue'

export type ThemeMode = 'system' | 'light' | 'dark'

export type AppTheme = {
  mode: Ref<ThemeMode>
  resolved: ComputedRef<'light' | 'dark'>
  setMode: (m: ThemeMode) => void
}

export const appThemeKey: InjectionKey<AppTheme> = Symbol('app-theme')

function getSystem(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

/** 在根组件 setup 中调用一次：订阅系统主题、同步 html[data-theme]、provide 上下文 */
export function provideAppTheme(): AppTheme {
  const mode = ref<ThemeMode>('system')
  const system = ref<'light' | 'dark'>(getSystem())

  const resolved = computed<'light' | 'dark'>(() =>
    mode.value === 'system'
      ? system.value
      : mode.value === 'dark'
        ? 'dark'
        : 'light',
  )

  onMounted(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      system.value = getSystem()
    }
    mq.addEventListener('change', onChange)
    onUnmounted(() => mq.removeEventListener('change', onChange))
  })

  watch(
    resolved,
    (r) => {
      document.documentElement.dataset.theme = r
    },
    { immediate: true },
  )

  const setMode = (m: ThemeMode) => {
    mode.value = m
  }

  const ctx: AppTheme = { mode, resolved, setMode }
  provide(appThemeKey, ctx)
  return ctx
}

export function useAppTheme(): AppTheme {
  const ctx = inject(appThemeKey)
  if (!ctx) {
    throw new Error('useAppTheme() 必须在 provideAppTheme() 的子树内调用')
  }
  return ctx
}
