import { ITariff, TCalculationModelFn } from "./tariff.model";
import { IOffer } from "../offer/offer.model";
import { Offer } from "../offer/offer";

export class Tariff implements ITariff {
  public name: Readonly<string>;

  constructor(name: Readonly<string>, calculationModel: TCalculationModelFn) {
    this.name = name;
    this.calculationModel = calculationModel;
  }

  public calculationModel: TCalculationModelFn;

  public getOffer(consumption: Readonly<number>): IOffer {
    return new Offer(
      this.name,
      `${this.calculationModel(consumption).toFixed(2)} €/year`
    );
  }
}
