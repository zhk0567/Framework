import Backbone from 'backbone'
import $ from 'jquery'
import './style.css'

Backbone.$ = $

let idSeq = 1

const TodoModel = Backbone.Model.extend({})

const TodoCollection = Backbone.Collection.extend({
  model: TodoModel,
})

type V = Backbone.View & {
  counter: Backbone.Model
  todos: Backbone.Collection
  visible: boolean
  clockTimer: number
  syncCount: () => void
  syncClock: () => void
  syncList: () => void
  syncCond: () => void
  onInc: () => void
  onAdd: () => void
  onDraftKey: (e: JQuery.TriggeredEvent) => void
  onToggle: () => void
}

const AppView = Backbone.View.extend({
  el: '#app',

  events: {
    'click .js-inc': 'onInc',
    'click .js-add': 'onAdd',
    'keydown .js-draft': 'onDraftKey',
    'click .js-toggle': 'onToggle',
  },

  initialize(this: V) {
    this.counter = new Backbone.Model({ count: 0 })
    this.listenTo(this.counter, 'change', () => this.syncCount())
    this.todos = new TodoCollection([{ id: 'seed-1', title: '示例待办' }])
    this.listenTo(this.todos, 'update reset add', () => this.syncList())
    this.visible = true
    this.clockTimer = window.setInterval(() => this.syncClock(), 1000)
    this.render()
    this.syncClock()
  },

  render(this: V) {
    this.$el.html(`
      <div class="shell">
        <header>
          <h1>Backbone.js 能力展台</h1>
          <p class="muted" style="margin:0 0 12px;max-width:44rem">
            经典 <strong>MVC + Events</strong>；<code>Model</code> / <code>Collection</code> / <code>View</code>，DOM 经 jQuery。
          </p>
        </header>
        <section class="panel">
          <h2>Model + events</h2>
          <div class="row">
            <button type="button" class="js-inc">+1</button>
            <span class="muted js-count"></span>
          </div>
        </section>
        <section class="panel">
          <h2>定时器</h2>
          <p class="mono js-clock" style="margin:0"></p>
        </section>
        <section class="panel">
          <h2>Collection</h2>
          <div class="row" style="margin-bottom:8px">
            <input type="text" class="js-draft" placeholder="新待办" />
            <button type="button" class="js-add">添加</button>
          </div>
          <ul class="js-list" style="margin:0;padding-left:1.1rem"></ul>
        </section>
        <section class="panel">
          <h2>布尔状态</h2>
          <button type="button" class="secondary js-toggle">切换</button>
          <p class="js-cond" style="margin-top:8px"></p>
        </section>
        <footer class="muted" style="margin-top:22px;font-size:0.875rem">详见 BACKBONE-Vite-TypeScript.md</footer>
      </div>
    `)
    this.delegateEvents()
    this.syncCount()
    this.syncList()
    this.syncCond()
    return this
  },

  syncCount(this: V) {
    const c = this.counter.get('count') as number
    this.$('.js-count').text(`count = ${c}， doubled = ${c * 2}`)
  },

  syncClock(this: V) {
    this.$('.js-clock').text(
      new Date().toLocaleTimeString('zh-CN', { hour12: false }),
    )
  },

  syncList(this: V) {
    const $ul = this.$('.js-list').empty()
    this.todos.each((m) => {
      $ul.append($('<li></li>').text(m.get('title') as string))
    })
  },

  syncCond(this: V) {
    this.$('.js-cond').text(this.visible ? '主内容可见。' : '已隐藏。')
    this.$('.js-cond').toggleClass('muted', !this.visible)
  },

  onInc(this: V) {
    this.counter.set('count', (this.counter.get('count') as number) + 1)
  },

  onAdd(this: V) {
    const t = (this.$('.js-draft').val() as string).trim()
    if (!t) return
    idSeq += 1
    this.todos.add({ id: `t-${idSeq}`, title: t }, { at: 0 })
    this.$('.js-draft').val('')
  },

  onDraftKey(this: V, e: JQuery.TriggeredEvent) {
    if (e.key === 'Enter') this.onAdd()
  },

  onToggle(this: V) {
    this.visible = !this.visible
    this.syncCond()
  },

  remove(this: V) {
    window.clearInterval(this.clockTimer)
    return Backbone.View.prototype.remove.call(this)
  },
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
void new (AppView as any)()
