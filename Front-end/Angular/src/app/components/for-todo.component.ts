import { Component, signal } from '@angular/core';

type Todo = { id: string; title: string };

let idSeq = 1;

@Component({
  selector: 'app-for-todo',
  standalone: true,
  template: `
    <section class="panel" id="for">
      <h2>&#64;for 列表</h2>
      <p class="lead muted">内置控制流 <code>&#64;for (item of items(); track item.id)</code>，与 track 搭配利于 diff。</p>
      <div class="row" style="margin-bottom: 10px">
        <input
          type="text"
          placeholder="新待办标题"
          [value]="draft()"
          (input)="onDraftInput($event)"
          (keydown.enter)="add()"
        />
        <button type="button" (click)="add()">添加</button>
      </div>
      <ul style="margin: 0; padding: 0 0 0 1.1rem">
        @for (item of items(); track item.id) {
          <li style="margin-bottom: 4px">{{ item.title }}</li>
        }
      </ul>
    </section>
  `,
})
export class ForTodoComponent {
  readonly items = signal<Todo[]>([{ id: 'seed-1', title: '示例待办（@for + track）' }]);
  readonly draft = signal('');

  onDraftInput(ev: Event): void {
    const el = ev.target as HTMLInputElement;
    this.draft.set(el.value);
  }

  add(): void {
    const t = this.draft().trim();
    if (!t) return;
    idSeq += 1;
    this.items.update((list) => [{ id: `t-${idSeq}`, title: t }, ...list]);
    this.draft.set('');
  }
}
