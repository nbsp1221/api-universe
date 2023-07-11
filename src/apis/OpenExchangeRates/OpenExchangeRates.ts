import { OPEN_EXCHANGE_RATES_API_URL } from './constants';
import { parseExchangeRate } from './utils';

interface OpenExchangeRatesOptions {
  appId: string;
  baseUrl?: string;
}

export class OpenExchangeRates {
  private appId: string;
  private baseUrl: string;

  constructor(options: OpenExchangeRatesOptions) {
    const {
      appId,
      baseUrl,
    } = options;

    this.appId = appId;
    this.baseUrl = baseUrl ?? OPEN_EXCHANGE_RATES_API_URL;
  }

  public async fetchLatest() {
    const response = await fetch(`${this.baseUrl}/api/latest.json?app_id=${this.appId}`, {
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log(await response.json());

    return parseExchangeRate((await response.json()));
  }
}
