import { Uuid } from "../../../Shared/Domain/Uuid";
import { Category } from "../ValueObject/Category";
import { Money } from "../ValueObject/Money";
import { Payer } from "../ValueObject/Payer";

export class Expense {
  private uuid: Uuid;
  private category: Category;
  private money: Money;
  private date: string;
  private payer: Payer;

  constructor(
    category: string,
    amount: number,
    currency: string,
    date: string,
    payer: string
  ) {
    this.uuid = new Uuid(Uuid.random());
    this.category = new Category(category);
    this.money = new Money(amount, currency);
    this.date = date;
    this.payer = new Payer(payer);
  }
}
