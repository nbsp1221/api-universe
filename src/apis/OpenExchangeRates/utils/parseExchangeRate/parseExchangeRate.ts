import { type ExchangeRate } from '../../../../types/exchange-rate';

export function parseExchangeRate(data: any): ExchangeRate {
  return {
    original: data,
    base: data.base,
    rates: data.rates,
  };
}
