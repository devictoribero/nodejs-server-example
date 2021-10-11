export class Payer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public static areSamePayer(payer1: Payer, payer2: Payer): boolean {
    return payer1.toString() === payer2.toString();
  }

  public toString(): string {
    return this.name;
  }

  public isPayer(payer: Payer): boolean {
    return this.name === payer.toString();
  }
}
