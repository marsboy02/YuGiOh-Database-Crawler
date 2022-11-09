import { Injectable } from '@nestjs/common';

const url = `https://www.db.yugioh-card.com/yugiohdb/card_search.action`;
const params = {
  ope: 1,
  sess: 1,
  rp: 10,
  mode: null,
  keyword: null,
  stype: 1,
  ctype: null,
  othercon: 2,
  starfr: null,
  starto: null,
  pscalefr: null,
  pscaleto: null,
  linkmarkerfr: null,
  linkmarkerto: null,
  link_m: 2,
  atkfr: null,
  atkto: null,
  deffr: null,
  defto: null,
};

@Injectable()
export class CardService {
  cheerio = require('cheerio');
  axios = require('axios');

  async getHTML(name: string) {
    try {
      params.keyword = name;
      return await this.axios.get(url, { params });
    } catch (error) {
      console.log(error);
    }
  }

  getCardData(name: string) {
    this.getHTML(name).then((html) => {
      const $ = this.cheerio.load(html.data);
      console.log(html);
      const card_img = $('#card_list > div > div');
      const card_effect = $(
        '#card_list > div > dl > dd.box_card_text.c_text.flex_1',
      ).text();
    });

    return name;
  }
}
// https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=1&sess=1&rp=10&mode=&sort=1&keyword=검투수 라크엘&stype=1&ctype=&othercon=2&starfr=&starto=&pscalefr=&pscaleto=&linkmarkerfr=&linkmarkerto=&link_m=2&atkfr=&atkto=&deffr=&defto=
// https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=1&sess=1&rp=10&mode=&sort=1&keyword=검투수 라크엘&stype=1&ctype=&othercon=2&starfr=&starto=&pscalefr=&pscaleto=&linkmarkerfr=&linkmarkerto=&link_m=2&atkfr=&atkto=&deffr=&defto=
