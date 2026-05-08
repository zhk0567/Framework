import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import type { Response } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * 路由级拦截器：仅挂在 demo 控制器上，响应头体现「子树可组合中间逻辑」。
 */
@Injectable()
export class DemoLifecycleInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const res = context.switchToHttp().getResponse<Response>();
    return next.handle().pipe(
      tap(() => {
        res.setHeader('x-nest-demo', 'demo-lifecycle-interceptor');
      }),
    );
  }
}
