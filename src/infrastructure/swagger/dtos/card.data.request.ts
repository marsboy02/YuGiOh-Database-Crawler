import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class CardDataRequest {
  @ApiProperty({
    example: '하루 우라라',
    description:
      '유희왕 데이터베이스 사이트에서 찾고 싶은 카드명을 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  name!: string;
}
