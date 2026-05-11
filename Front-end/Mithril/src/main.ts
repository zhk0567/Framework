import m from 'mithril'
import './style.css'

type Todo = { id: string; title: string }
let idSeq = 1

const state = {
  count: 0,
  items: [{ id: 'seed-1', title: '示例待办' }] as Todo[],
  draft: '',
  visible: true,
}

const Clock: m.Component = {
  oncreate(vnode) {
    const tick = () => {
      ;(vnode.state as { label: string }).label = new Date().toLocaleTimeString(
        'zh-CN',
        { hour12: false },
      )
      m.redraw()
    }
    tick()
    ;(vnode.state as { id: number }).id = window.setInterval(tick, 1000)
  },
  onremove(vnode) {
    const id = (vnode.state as { id?: number }).id
    if (id) window.clearInterval(id)
  },
  view(vnode) {
    return m(
      'p.mono',
      { style: { margin: 0 } },
      (vnode.state as { label?: string }).label ?? '',
    )
  },
}

const App: m.Component = {
  view: () =>
    m('div.shell', [
      m('header', [
        m('h1', 'Mithril.js 能力展台'),
        m(
          'p.muted',
          { style: { margin: '0 0 12px', 'max-width': '44rem' } },
          [
            '超小体积、',
            m('code', 'm()'),
            ' 虚拟 DOM；本页演示 redraw 与生命周期钩子。',
          ],
        ),
      ]),
      m(
        'section.panel',
        m('h2', '状态'),
        m('p.muted', '直接修改对象后调用 m.redraw()。'),
        m('div.row', [
          m(
            'button',
            {
              type: 'button',
              onclick: () => {
                state.count++
                m.redraw()
              },
            },
            '+1',
          ),
          m(
            'span.muted',
            `count = ${state.count}， doubled = ${state.count * 2}`,
          ),
        ]),
      ),
      m(
        'section.panel',
        m('h2', 'oncreate / onremove'),
        m('p.muted', '子组件内 setInterval。'),
        m(Clock),
      ),
      m(
        'section.panel',
        m('h2', '列表'),
        m('div.row', { style: { 'margin-bottom': '8px' } }, [
          m('input', {
            type: 'text',
            placeholder: '新待办',
            value: state.draft,
            oninput: (e: InputEvent) => {
              state.draft = (e.target as HTMLInputElement).value
            },
            onkeydown: (e: KeyboardEvent) => {
              if (e.key === 'Enter') addTodo()
            },
          }),
          m('button', { type: 'button', onclick: addTodo }, '添加'),
        ]),
        m(
          'ul',
          { style: { margin: 0, padding: '0 0 0 1.1rem' } },
          state.items.map((it) => m('li', { key: it.id }, it.title)),
        ),
      ),
      m(
        'section.panel',
        m('h2', '条件'),
        m('div.row', { style: { 'margin-bottom': '8px' } }, [
          m(
            'button.secondary',
            {
              type: 'button',
              onclick: () => {
                state.visible = !state.visible
                m.redraw()
              },
            },
            '切换',
          ),
        ]),
        state.visible
          ? m('p', { style: { margin: 0 } }, '主内容可见。')
          : m('p.muted', { style: { margin: 0 } }, '已隐藏。'),
      ),
      m(
        'footer.muted',
        { style: { 'margin-top': '22px', 'font-size': '0.875rem' } },
        '详见 MITHRIL-Vite-TypeScript.md',
      ),
    ]),
}

function addTodo() {
  const t = state.draft.trim()
  if (!t) return
  idSeq += 1
  state.items = [{ id: `t-${idSeq}`, title: t }, ...state.items]
  state.draft = ''
  m.redraw()
}

const root = document.getElementById('app')
if (root) m.mount(root, App)
