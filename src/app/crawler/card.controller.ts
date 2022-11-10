import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, Req } from '@nestjs/common';
import { CardService } from './card.service';

@Controller('card')
@ApiTags('CardInformation')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('/search/:name')
  @ApiOperation({ summary: '해당 카드에 대한 정보를 조회합니다.' })
  getCardOne(@Param('name') name: string) {
    return this.cardService.getDataViaPuppeteer(name);
  }
}
