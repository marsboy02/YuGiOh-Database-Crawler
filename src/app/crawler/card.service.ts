import { Injectable } from '@nestjs/common';

@Injectable()
export class CardService {
  cheerio = require('cheerio');
  getCardData(name: string) {
    return name;
  }
}
