import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HealthService } from './health.service';

@Controller('health')
@ApiTags('ServiceHealth')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}
  @Get()
  @ApiOperation({ summary: 'API 서버 상태를 확인합니다.' })
  getHealth() {
    return this.healthService.getHealthData();
  }
}
