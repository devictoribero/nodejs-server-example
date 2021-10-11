import express from "express";
import { v4 as uuid } from "uuid";

const router = express.Router();

type Expense = {
  id: string;
  category: ExpensesCategories;
  date: string;
  money: { amount: number; currency: Currency };
  payer: string;
};

// In memory DB
const expenses: Expense[] = [];

router.post("/expenses", (req, res) => {
  const { body } = req;
  const category: string = body.category;
  const amount: number = body.amount;
  const date: string = body.date;
  const currency: string = body.currency;
  const payer: string = body.payer;

  if (!Object.values<string>(ExpensesCategories).includes(category)) {
    res.status(400).send({ message: "The category provided is not correct" });
  }

  expenses.push({
    id: uuid(),
    category: category as ExpensesCategories,
    date: new Date(date).toISOString(),
    money: {
      amount,
      currency: currency as Currency,
    },
    payer,
  });

  res.status(201).end();
});

router.get("/expenses", (req, res) => {
  res.send({ expenses });
});

export const routerExpenses = router;

enum ExpensesCategories {
  Rent = "rent",
  Pets = "pets",
  Car = "car",
}

enum Currency {
  MXN = "MXN",
  EURO = "EURO",
}
