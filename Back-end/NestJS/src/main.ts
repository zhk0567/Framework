import 'reflect-metadata';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.enableCors({ origin: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('NestJS 演示')
    .setDescription('模块与依赖注入、DTO + ValidationPipe、拦截器、Swagger 文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  const port = Number(process.env.PORT ?? 3001);
  const host = process.env.HOST ?? '127.0.0.1';
  await app.listen(port, host);
  const logger = new Logger('Bootstrap');
  logger.log(
    `呈现页 http://${host}:${port}/  |  Swagger http://${host}:${port}/docs`,
  );
}

bootstrap().catch((err) => {
  const logger = new Logger('Bootstrap');
  logger.error(err);
  process.exit(1);
});
