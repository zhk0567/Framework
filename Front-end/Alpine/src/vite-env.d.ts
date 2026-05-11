/// <reference types="vite/client" />

declare module 'alpinejs' {
  const Alpine: {
    data: (name: string, fn: () => Record<string, unknown>) => void
    start: () => void
  }
  export default Alpine
}
