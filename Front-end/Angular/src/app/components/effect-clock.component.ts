import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-effect-clock',
  standalone: true,
  template: `
    <section class="panel" id="effect">
      <h2>RxJS + takeUntilDestroyed</h2>
      <p class="lead muted">
        用 <code>interval</code> 每秒刷新；<code>takeUntilDestroyed</code> 在组件销毁时自动退订，避免泄漏。
      </p>
      <p style="margin: 0; font-variant-numeric: tabular-nums">{{ label() }}</p>
    </section>
  `,
})
export class EffectClockComponent {
  private readonly destroyRef = inject(DestroyRef);
  readonly label = signal(this.formatNow());

  constructor() {
    interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.label.set(this.formatNow()));
  }

  private formatNow(): string {
    return new Date().toLocaleTimeString('zh-CN', { hour12: false });
  }
}
