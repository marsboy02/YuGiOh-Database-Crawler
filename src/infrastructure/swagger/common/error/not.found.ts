import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class NotFound {
  @ApiProperty({
    type: 'number',
    description: 'HTTP error code입니다.',
    example: 404,
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    title: '응답 메시지',
    example: 'NotFoundError',
    description: 'NotFoundError',
  })
  message: string;

  @ApiProperty({
    type: 'string',
    title: '응답 데이터',
    description: 'NotFoundError',
    example: 'NotFoundError',
  })
  error: string;
}
