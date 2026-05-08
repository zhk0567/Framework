import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { LoggingInterceptor } from './common/logging.interceptor';
import { DemoModule } from './demo/demo.module';
import { FeatureBoxModule } from './feature-box/feature-box.module';
import { HealthModule } from './health/health.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthModule,
    DemoModule,
    ItemsModule,
    FeatureBoxModule,
  ],
  controllers: [AppController],
  providers: [{ provide: APP_INTERCEPTOR, useClass: LoggingInterceptor }],
})
export class AppModule {}
