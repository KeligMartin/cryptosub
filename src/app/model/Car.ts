export class Car {
  name: string;
  sold: boolean;
  price: number;

  constructor(name: string, price: number, sold: boolean) {
    this.name = name;
    this.price = price;

    if (sold === undefined) {
      this.sold = false;
    } else {
      this.sold = sold
    }
  }
}
