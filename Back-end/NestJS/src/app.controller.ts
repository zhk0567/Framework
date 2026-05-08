import { Controller, Get, Header } from '@nestjs/common';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

@Controller()
export class AppController {
  /** 呈现页：与 Fastify 子项目类似，同源调用下方各 API */
  @Get()
  @Header('Content-Type', 'text/html; charset=utf-8')
  getIndex(): string {
    return readFileSync(join(process.cwd(), 'public', 'index.html'), 'utf-8');
  }
}
