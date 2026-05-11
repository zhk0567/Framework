import { ref, watch, provide, inject, type InjectionKey } from 'vue';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'vue-demo-theme';

function readInitial(): ThemeMode {
  if (typeof localStorage === 'undefined') return 'light';
  const s = localStorage.getItem(STORAGE_KEY);
  if (s === 'dark' || s === 'light') return s;
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
    return 'dark';
  return 'light';
}

export type AppTheme = {
  theme: ReturnType<typeof ref<ThemeMode>>;
  toggle: () => void;
};

const key: InjectionKey<AppTheme> = Symbol('appTheme');

export function provideAppTheme() {
  const theme = ref<ThemeMode>(readInitial());

  const apply = (m: ThemeMode) => {
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.theme = m;
      localStorage.setItem(STORAGE_KEY, m);
    }
  };

  apply(theme.value);

  watch(theme, (m) => apply(m), { flush: 'post' });

  const toggle = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };

  const api: AppTheme = { theme, toggle };
  provide(key, api);
  return api;
}

export function useAppTheme(): AppTheme {
  const v = inject(key);
  if (!v) throw new Error('useAppTheme() used outside provideAppTheme()');
  return v;
}
