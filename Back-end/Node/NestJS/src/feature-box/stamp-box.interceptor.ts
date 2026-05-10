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
 * 仅挂在「盒」控制器上：对比全局 LoggingInterceptor，体现拦截器作用域组合。
 */
@Injectable()
export class StampBoxInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const res = context.switchToHttp().getResponse<Response>();
    return next.handle().pipe(
      tap(() => {
        res.setHeader('x-feature-box', 'inner-interceptor');
      }),
    );
  }
}
