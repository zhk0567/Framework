import { Module } from '@nestjs/common';
import { DemoLifecycleInterceptor } from './demo-lifecycle.interceptor';
import { DemoController } from './demo.controller';

@Module({
  controllers: [DemoController],
  providers: [DemoLifecycleInterceptor],
})
export class DemoModule {}
