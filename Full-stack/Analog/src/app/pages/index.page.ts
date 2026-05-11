import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, type OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <main style="max-width:720px;margin:2rem auto;font-family:system-ui,sans-serif">
      <h1>Analog 全栈展台</h1>
      <p style="color:#64748b">Angular + Vite + Nitro；<code>GET /api/demo</code>。端口 <strong>3035</strong>。</p>
      <pre
        style="margin-top:1rem;padding:1rem;border-radius:8px;background:#0f172a;color:#e2e8f0;overflow:auto;font-size:0.85rem"
        >{{ text }}</pre
      >
    </main>
  `,
})
export default class IndexPage implements OnInit {
  private readonly http = inject(HttpClient);
  text = '加载中…';

  ngOnInit(): void {
    this.http.get<Record<string, unknown>>('/api/demo').subscribe({
      next: (d) => {
        this.text = JSON.stringify(d, null, 2);
      },
      error: () => {
        this.text = '请求失败';
      },
    });
  }
}
