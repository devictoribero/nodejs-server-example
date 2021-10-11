import { Currency } from "./Currency";

export class Money {
  private amount: number;
  private currency: Currency;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = new Currency(currency);
  }
}
