import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import { trimAllEscape } from '../../infrastructure/crawling/card.infra';

@Injectable()
export class CardService {
  async getCardDate(name: string): Promise<object> {
    try {
      return this.getDataViaPuppeteer(name);
    } catch (error) {
      console.log(error);
      if (error instanceof NotFoundException)
        throw new NotFoundException(error);
      throw new InternalServerErrorException(error);
    }
  }

  async getDataViaPuppeteer(name: string): Promise<object> {
    const url = `https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=1&sess=1&rp=10&mode=&sort=1&keyword=${name}&stype=1&ctype=&othercon=2&starfr=&starto=&pscalefr=&pscaleto=&linkmarkerfr=&linkmarkerto=&link_m=2&atkfr=&atkto=&deffr=&defto=`;

    const browser = await puppeteer.launch({
      headless: false,
      args: ['--disable-setuid-sandbox', '--no-sandbox'],
      env: {
        DISPLAY: ':99',
      },
    });
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'ko',
    });
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    const content = await page.content();
    const $ = cheerio.load(content);
    const card_name = $(
      '#card_list > div:nth-child(1) > dl > dd.box_card_name.flex_1.top_set > span.card_name',
    ).text();
    if (!card_name) {
      browser.close();
      return new NotFoundException('해당하는 정보를 찾을 수 없습니다.');
    }

    const card_attribute = $(
      '#card_list > div:nth-child(1) > dl > dd.box_card_spec.flex_1 > span.box_card_attribute > span',
    ).text();
    const card_level = $(
      '#card_list > div:nth-child(1) > dl > dd.box_card_spec.flex_1 > span.box_card_level_rank.level > span',
    ).text();
    const card_species = $(
      '#card_list > div:nth-child(1) > dl > dd.box_card_spec.flex_1 > span.card_info_species_and_other_item > span',
    ).text();
    const card_atk = $(
      '#card_list > div:nth-child(1) > dl > dd.box_card_spec.flex_1 > span.atk_power > span',
    ).text();
    const card_def = $(
      '#card_list > div:nth-child(1) > dl > dd.box_card_spec.flex_1 > span.def_power > span',
    ).text();
    const card_effect = $(
      '#card_list > div:nth-child(1) > dl > dd.box_card_text.c_text.flex_1',
    ).text();

    const data = {
      card_name,
      card_level,
      card_species,
      card_atk,
      card_def,
      card_attribute,
      card_effect,
    };
    browser.close();
    return trimAllEscape(data);
  }
}
