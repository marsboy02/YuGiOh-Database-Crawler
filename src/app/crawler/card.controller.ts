import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';
import { CardService } from './card.service';
import { CardDataResponse } from '../../infrastructure/swagger/dtos/response/card.data.response';
import { NotFound } from '../../infrastructure/swagger/common/error/not.found';
import { InternalServerError } from '../../infrastructure/swagger/common/error/internal.server.error';

@Controller('card')
@ApiTags('CardInformation')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('/search/:name')
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
    type: InternalServerError,
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found Error',
    type: NotFound,
  })
  @ApiResponse({
    status: 200,
    description: 'Ok',
    type: CardDataResponse,
  })
  @ApiOperation({ summary: '해당 카드에 대한 정보를 조회합니다.' })
  getCardOne(@Param('name') name: string) {
    return this.cardService.getCardData(name);
  }
}
