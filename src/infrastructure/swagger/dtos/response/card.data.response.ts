import { ApiProperty } from '@nestjs/swagger';

export class CardDataResponse {
  @ApiProperty({
    example: '하루 우라라',
    description: 'card_name',
  })
  card_name: string;

  @ApiProperty({
    example: '레벨 3',
    description: 'card_level',
  })
  card_level: string;

  @ApiProperty({
    example: '[언데드족/튜너/효과]',
    description: 'card_species',
  })
  card_species: string;

  @ApiProperty({
    example: '공격력 0',
    description: 'card_atk',
  })
  card_atk: string;

  @ApiProperty({
    example: '수비력 1800',
    description: 'card_def',
  })
  card_def: string;

  @ApiProperty({
    example: '화염',
    description: 'card_attribute',
  })
  card_attribute: string;

  @ApiProperty({
    example:
      '이 카드명의 효과는 1턴에 1번밖에 사용할 수 없다. ①: 이하의 어느 효과를 포함하는 마법 / 함정 / 몬스터의 효과가 발동했을 때,' +
      ' 이 카드를 패에서 버리고 발동할 수 있다. 그 효과를 무효로 한다.●덱에서 카드를 패에 넣는 효과●덱에서 몬스터를 특수 소환하는 효과' +
      '●덱에서 카드를 묘지로 보내는 효과',
    description: 'card_effect',
  })
  card_effect: string;
}
