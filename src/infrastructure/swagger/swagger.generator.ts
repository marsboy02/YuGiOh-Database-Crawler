import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { tags } from './swagger.tags';
import { INestApplication } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

const document = new DocumentBuilder()
  .setTitle('유희왕 카드 데이터 API')
  .setDescription('유희왕 카드와 관련된 데이터를 크롤링하는 API입니다.')
  .setVersion('0.1');

tags.forEach((tag) => document.addTag(tag.name, tag.description));

export default function generateSwaggerDocument(
  app: INestApplication | NestExpressApplication,
) {
  return SwaggerModule.createDocument(app, document.build());
}
