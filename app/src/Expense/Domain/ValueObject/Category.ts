enum ExpensesCategories {
  Rent = "rent",
  Pets = "pets",
  Car = "car",
}

export class Category {
  private name: string;

  constructor(name: string) {
    if (!Object.values<string>(ExpensesCategories).includes(name)) {
      throw new Error("Category has not a valid name");
    }

    this.name = name;
  }

  public toString(): string {
    return this.name;
  }
}
