import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { CardModule } from './crawler/card.module';

@Module({
  imports: [HealthModule, CardModule],
})
export class AppModule {}
