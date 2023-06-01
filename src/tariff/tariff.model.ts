import { IOffer } from "../offer/offer.model";

export interface ITariff {
  name: Readonly<string>;
  getOffer: TGetOfferFn;
  calculationModel: TCalculationModelFn;
}

export type TCalculationModelFn = (
  consumption: Readonly<number>
) => Readonly<number>;
export type TGetOfferFn = (consumption: Readonly<number>) => Readonly<IOffer>;
