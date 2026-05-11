import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  template: `
    <section class="panel" id="signals">
      <h2>signal / computed</h2>
      <p class="lead muted">
        Angular 内置 <code>signal</code> 与 <code>computed</code>，模板中通过 <code>()</code> 读取，变更时局部更新。
      </p>
      <div class="row">
        <button type="button" (click)="inc()">+1</button>
        <span class="muted">count = {{ count() }}， doubled = {{ doubled() }}</span>
      </div>
    </section>
  `,
})
export class SignalsDemoComponent {
  readonly count = signal(0);
  readonly doubled = computed(() => this.count() * 2);

  inc(): void {
    this.count.update((c) => c + 1);
  }
}
