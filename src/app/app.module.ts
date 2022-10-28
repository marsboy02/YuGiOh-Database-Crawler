import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { CrawlerModule } from './crawler/crawler.module';

@Module({
  imports: [HealthModule, CrawlerModule],
})
export class AppModule {}
