import { IOffer } from "./offer.model";

export interface IProduct {
  name: Readonly<string>;
  getOffer: GetOfferFn;
  calculationModel: CalculationModelFn;
}

export type CalculationModelFn = (
  consumption: Readonly<number>
) => Readonly<number>;
export type GetOfferFn = (consumption: Readonly<number>) => Readonly<IOffer>;
