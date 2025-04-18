import locales from "../resources/locales.json";
export const APP_NAME = "Alola Trading Ltd";
export const APP_PHONE = "+66 2 2520452";
export const APP_EMAIL = "info@alolatrading.com";
export const APP_URL = "www.alolatrading.com";
export const APP_ADDRESS = `
16th Fl., Office # 1602, Vanit Building 1<br />
1126/1 New Petchburi Road, Makkasan, Ratchathewi<br />
10400 Bangkok, Thailand`;
export const API_BASE = "https://xtremnet.vercel.app/mailer";
export const delay = async (millisecs = 2000) =>
  await new Promise((r) => setTimeout(r, millisecs));
const cats: any = locales;
export const $t = (val: any) => cats[val] || val;
