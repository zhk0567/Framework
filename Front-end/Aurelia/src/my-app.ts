import { customElement } from '@aurelia/runtime-html';
import template from './my-app.html';
import './my-app.css';

type Todo = { id: string; title: string };

let idSeq = 1;

@customElement({
  name: 'my-app',
  template,
})
export class MyApp {
  count = 0;
  draft = '';
  visible = true;
  items: Todo[] = [{ id: 'seed-1', title: '示例待办' }];

  get doubled(): number {
    return this.count * 2;
  }

  inc(): void {
    this.count++;
  }

  addTodo(): void {
    const t = this.draft.trim();
    if (!t) return;
    idSeq += 1;
    this.items = [{ id: `t-${idSeq}`, title: t }, ...this.items];
    this.draft = '';
  }

  onKey(e: Event): void {
    if ((e as KeyboardEvent).key === 'Enter') this.addTodo();
  }

  toggle(): void {
    this.visible = !this.visible;
  }
}
