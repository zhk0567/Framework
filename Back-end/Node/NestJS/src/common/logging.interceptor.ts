import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import type { Request } from 'express';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

/**
 * 全局拦截器：在请求结束后记录耗时（体现 Nest 请求管道中的「环绕」能力）。
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    if (context.getType() !== 'http') {
      return next.handle();
    }
    const req = context.switchToHttp().getRequest<Request>();
    const started = Date.now();
    return next.handle().pipe(
      finalize(() => {
        const ms = Date.now() - started;
        this.logger.log(`${req.method} ${req.url} +${ms}ms`);
      }),
    );
  }
}
