import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StampBoxInterceptor } from './stamp-box.interceptor';

@ApiTags('box')
@Controller('api/box')
@UseInterceptors(StampBoxInterceptor)
export class BoxController {
  @Get('inner')
  @ApiOperation({ summary: '封装盒内路由（响应头由路由级拦截器写入）' })
  @ApiResponse({ status: 200 })
  inner(): { where: string; note: string } {
    return {
      where: '/api/box/inner',
      note: 'x-feature-box 由 StampBoxInterceptor 设置，仅挂在本 Controller，而非全局。',
    };
  }
}
