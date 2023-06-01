import { Offers } from "./offer.model";
import { IProduct } from "./product.model";

export interface ITariffComparison {
  tariffs: ReadonlyArray<IProduct>;
  getOffers: GetOffersFn;
}

export type GetOffersFn = (consumption: Readonly<number>) => Offers;
