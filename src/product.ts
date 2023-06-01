import { IProduct, CalculationModelFn } from "./product.model";
import { IOffer } from "./offer.model";
import { Offer } from "./offer";

export class Product implements IProduct {
  public name: Readonly<string>;

  constructor(name: Readonly<string>, calculationModel: CalculationModelFn) {
    this.name = name;
    this.calculationModel = calculationModel;
  }

  public calculationModel: CalculationModelFn;

  public getOffer(consumption: Readonly<number>): IOffer {
    return new Offer(
      this.name,
      `${this.calculationModel(consumption).toFixed(2)} €/year`
    );
  }
}
