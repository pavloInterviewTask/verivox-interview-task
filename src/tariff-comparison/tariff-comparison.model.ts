import { ITariff } from "../tariff/tariff.model";
import { TOffers } from "../offer/offer.model";

export interface ITariffComparison {
  tariffs: ReadonlyArray<ITariff>;
  getOffers: TGetOffersFn;
}

export type TGetOffersFn = (consumption: Readonly<number>) => TOffers;
