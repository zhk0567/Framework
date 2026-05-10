import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller('api/health')
export class HealthController {
  @Get()
  @ApiOperation({ summary: '健康检查' })
  @ApiResponse({ status: 200, schema: { example: { ok: true, service: 'framework-back-end-nestjs' } } })
  getHealth(): { ok: boolean; service: string } {
    return { ok: true, service: 'framework-back-end-nestjs' };
  }
}
