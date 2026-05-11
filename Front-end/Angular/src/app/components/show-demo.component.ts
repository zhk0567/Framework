import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-show-demo',
  standalone: true,
  template: `
    <section class="panel" id="show">
      <h2>&#64;if / &#64;else</h2>
      <p class="lead muted">内置控制流替代旧版 <code>*ngIf</code>，分支类型更直观。</p>
      <div class="row" style="margin-bottom: 8px">
        <button type="button" class="secondary" (click)="visible.set(!visible())">切换显示</button>
      </div>
      @if (visible()) {
        <p style="margin: 0">主内容可见。</p>
      } @else {
        <p class="muted">当前为隐藏态（&#64;else）</p>
      }
    </section>
  `,
})
export class ShowDemoComponent {
  readonly visible = signal(true);
}
