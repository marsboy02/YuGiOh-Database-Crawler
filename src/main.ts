import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule } from '@nestjs/swagger';
import generateSwaggerDocument from './infrastructure/swagger/swagger.generator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup('docs', app, generateSwaggerDocument(app));
  await app.listen(
    3000,
    'ec2-3-38-100-30.ap-northeast-2.compute.amazonaws.com',
  );
}
bootstrap();
