import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Theme = 'system' | 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  resolved: 'light' | 'dark'
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system')
  const [system, setSystem] = useState<'light' | 'dark'>(getSystemTheme)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => setSystem(getSystemTheme())
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const resolved: 'light' | 'dark' =
    theme === 'system' ? system : theme === 'dark' ? 'dark' : 'light'

  useEffect(() => {
    document.documentElement.dataset.theme = resolved
  }, [resolved])

  const setThemeStable = useCallback((t: Theme) => {
    setTheme(t)
  }, [])

  const value = useMemo(
    () => ({ theme, resolved, setTheme: setThemeStable }),
    [theme, resolved, setThemeStable],
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

/** Hook 与 Provider 同域；供 Fast Refresh 忽略非组件导出告警 */
// eslint-disable-next-line react-refresh/only-export-components -- useTheme 与 ThemeProvider 配对使用
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
