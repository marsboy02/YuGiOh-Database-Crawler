import { ApiProperty } from '@nestjs/swagger';

export class HealthResponse {
  @ApiProperty({
    example: 'pong!',
    description: 'message',
  })
  message: string;

  @ApiProperty({
    example: '2022-12-11T02:18:28.623Z',
    description: 'currentTime',
  })
  currentTime: Date;
}
