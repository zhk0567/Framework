import { Module } from '@nestjs/common';
import { BoxController } from './box.controller';
import { StampBoxInterceptor } from './stamp-box.interceptor';

@Module({
  controllers: [BoxController],
  providers: [StampBoxInterceptor],
})
export class FeatureBoxModule {}
