import Alpine from 'alpinejs'
import './showcase.css'

type Todo = { id: string; title: string }

type Showcase = {
  count: number
  items: Todo[]
  draft: string
  visible: boolean
  clock: string
  init: (this: Showcase) => void
  inc: (this: Showcase) => void
  addTodo: (this: Showcase) => void
  toggle: (this: Showcase) => void
}

Alpine.data('showcase', function (): Showcase {
  const self: Showcase = {
    count: 0,
    items: [{ id: 'seed-1', title: '示例待办（x-for）' }],
    draft: '',
    visible: true,
    clock: formatTime(),
    init() {
      window.setInterval(() => {
        this.clock = formatTime()
      }, 1000)
    },
    inc() {
      this.count++
    },
    addTodo() {
      const t = this.draft.trim()
      if (!t) return
      this.items = [{ id: `t-${Date.now()}`, title: t }, ...this.items]
      this.draft = ''
    },
    toggle() {
      this.visible = !this.visible
    },
  }
  return self
})

function formatTime(): string {
  return new Date().toLocaleTimeString('zh-CN', { hour12: false })
}

Alpine.start()
