import { v4 as uuid_v4, validate } from "uuid";

export class Uuid {
  private value: string;

  constructor(value: string) {
    if (!Uuid.isValid(value)) {
      throw new Error("Uuid value is not valid");
    }

    this.value = value;
  }

  public static random(): string {
    return uuid_v4().toString();
  }

  public static isValid(value: string) {
    return validate(value);
  }

  public toString(): string {
    return this.value;
  }
}
