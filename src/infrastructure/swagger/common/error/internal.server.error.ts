import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class InternalServerError {
  @ApiProperty({
    type: 'number',
    description: 'HTTP error code입니다.',
    example: 500,
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    title: '응답 메시지',
    example: 'InternalServerError',
    description: 'InternalServerError',
  })
  message: string;

  @ApiProperty({
    type: 'string',
    title: '응답 데이터',
    description: 'InternalServerError',
  })
  error: string;
}
