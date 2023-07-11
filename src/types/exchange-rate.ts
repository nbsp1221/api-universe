import { type BaseData } from './base';

export interface ExchangeRate extends BaseData {
  base: string;
  rates: Record<string, number>;
}
