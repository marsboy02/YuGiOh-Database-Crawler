import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { CardModule } from './crawler/card.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HealthModule, CardModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
