import { Component } from '@angular/core';
import { EffectClockComponent } from './components/effect-clock.component';
import { ForTodoComponent } from './components/for-todo.component';
import { ShowDemoComponent } from './components/show-demo.component';
import { SignalsDemoComponent } from './components/signals-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SignalsDemoComponent,
    EffectClockComponent,
    ForTodoComponent,
    ShowDemoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly nav: readonly { href: string; label: string }[] = [
    { href: '#signals', label: 'Signals' },
    { href: '#effect', label: 'RxJS' },
    { href: '#for', label: '@for' },
    { href: '#show', label: '@if' },
  ];

  readonly tags: readonly string[] = [
    'Angular 独立运行时',
    'signal / computed',
    '@for / @if 控制流',
    'Standalone 组件',
    'CLI + esbuild 应用构建',
    'Zone.js 变更检测',
  ];
}
