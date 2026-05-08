import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DemoLifecycleInterceptor } from './demo-lifecycle.interceptor';

const nestHighlights = [
  {
    title: '模块（Module）与依赖注入',
    detail:
      '功能按模块拆分；`ItemsService` 由 Nest 容器注入到 `ItemsController`，便于替换实现与单测。',
  },
  {
    title: 'DTO + ValidationPipe（管道）',
    detail:
      '在 `main.ts` 全局启用 `ValidationPipe`；创建条目使用 `class-validator` 装饰器，非法体会得到 400 与字段级信息。',
  },
  {
    title: '拦截器（Interceptor）',
    detail:
      '`LoggingInterceptor` 全局环绕记录耗时；本路由额外挂载 `DemoLifecycleInterceptor`，可在响应头看到 `x-nest-demo`。',
  },
  {
    title: 'Swagger 与呈现',
    detail:
      '`@nestjs/swagger` 生成 OpenAPI；浏览器访问 `/docs` 在线试调，与根路径静态呈现页互补。',
  },
] as const;

@ApiTags('demo')
@Controller('api/demo')
@UseInterceptors(DemoLifecycleInterceptor)
export class DemoController {
  @Get('lifecycle')
  @ApiOperation({ summary: 'Nest 请求管道要点（对照阅读）' })
  @ApiHeader({ name: 'x-nest-demo', required: false, description: '由 DemoLifecycleInterceptor 写入' })
  @ApiResponse({
    status: 200,
    schema: {
      example: {
        message: '以下为 Nest HTTP 管道中常见环节（与 Fastify 钩子名称不同但角色类似）',
        nestPipeline: [
          'Middleware（可选）',
          'Guard（鉴权 / 策略）',
          'Interceptor（前置）',
          'Pipe（校验 / 转换，如 ValidationPipe）',
          'Controller handler',
          'Interceptor（后置 / 映射响应）',
          'ExceptionFilter（出错时）',
        ],
        nestHighlights: nestHighlights,
      },
    },
  })
  getLifecycle(): {
    message: string;
    nestPipeline: string[];
    nestHighlights: readonly { title: string; detail: string }[];
  } {
    return {
      message:
        '以下为 Nest HTTP 管道中常见环节（与 Fastify 钩子名称不同但角色类似）；全局耗时见终端 LoggingInterceptor 日志。',
      nestPipeline: [
        'Middleware（可选）',
        'Guard（鉴权 / 策略）',
        'Interceptor（前置）',
        'Pipe（校验 / 转换，如 ValidationPipe）',
        'Controller handler',
        'Interceptor（后置 / 映射响应）',
        'ExceptionFilter（出错时）',
      ],
      nestHighlights: nestHighlights,
    };
  }
}
