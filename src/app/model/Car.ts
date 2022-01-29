export class Car {
  name: string;
  sold: boolean;
  price: string;

  constructor(name: string, price: string, sold: boolean) {
    this.name = name;
    this.price = price;

    if (sold === undefined) {
      this.sold = false;
    } else {
      this.sold = sold
    }
  }
}
