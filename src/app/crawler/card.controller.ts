import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';
import { CardService } from './card.service';
import { CardDataResponse } from '../../infrastructure/swagger/dtos/card.data.response';

@Controller('card')
@ApiTags('CardInformation')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('/search/:name')
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  @ApiResponse({
    status: 200,
    description: 'Ok',
    type: CardDataResponse,
  })
  @ApiOperation({ summary: '해당 카드에 대한 정보를 조회합니다.' })
  getCardOne(@Param('name') name: string): Promise<object> {
    return this.cardService.getDataViaPuppeteer(name);
  }
}
