import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HealthService } from './health.service';
import { HealthResponse } from '../../infrastructure/swagger/dtos/response/health.response';
import { InternalServerError } from '../../infrastructure/swagger/common/error/internal.server.error';

@Controller('health')
@ApiTags('ServiceHealth')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}
  @Get()
  @ApiOperation({ summary: 'API 서버 상태를 확인합니다.' })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
    type: InternalServerError,
  })
  @ApiResponse({
    status: 200,
    description: 'Ok',
    type: HealthResponse,
  })
  getHealth() {
    return this.healthService.getHealthData();
  }
}
