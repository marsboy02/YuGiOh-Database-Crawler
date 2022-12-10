import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';
import { CardService } from './card.service';
import { CardDataRequest } from '../../infrastructure/swagger/dtos/card.data.request';

@Controller('card')
@ApiTags('CardInformation')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('/search/:name')
  @ApiOperation({ summary: '해당 카드에 대한 정보를 조회합니다.' })
  getCardOne(@Param('name') name: CardDataRequest) {
    return this.cardService.getDataViaPuppeteer(name);
  }
}
