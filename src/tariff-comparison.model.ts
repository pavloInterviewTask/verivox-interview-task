import { Offers } from './offer.model';
import { IProduct } from './product.model';

export interface ITariffComparison {
    tariffs: ReadonlyArray<IProduct>;
    getOffers: GetOffers;
}

export type GetOffers = (consumption: Readonly<number>) => Offers;
