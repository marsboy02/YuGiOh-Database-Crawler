export function trimAllEscape(card_object: object): object {
  const data = {};
  for (const [key, value] of Object.entries(card_object)) {
    data[key] = trimEscape(value);
  }
  return data;
}

export function trimEscape(string: string): string {
  return string.replace(/\t/gi, '').replace(/\n/gi, '');
}

export const params = {
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
