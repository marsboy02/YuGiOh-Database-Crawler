import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

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
export class cardService {
  async getDataViaPuppeteer(name: string) {
    const url = `https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=1&sess=1&rp=10&mode=&sort=1&keyword=${name}&stype=1&ctype=&othercon=2&starfr=&starto=&pscalefr=&pscaleto=&linkmarkerfr=&linkmarkerto=&link_m=2&atkfr=&atkto=&deffr=&defto=`;
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
  }
}
