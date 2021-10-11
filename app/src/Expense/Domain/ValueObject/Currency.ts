enum Currencies {
  MXN = "MXN",
  EURO = "EURO",
}

export class Currency {
  private name: string;

  constructor(name: string) {
    if (!Object.values<string>(Currencies).includes(name)) {
      throw new Error("Currency not found");
    }

    this.name = name;
  }

  public toString(): string {
    return this.name;
  }
}
