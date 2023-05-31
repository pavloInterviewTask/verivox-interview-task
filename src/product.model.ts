import { IOffer } from './offer.model';

export interface IProduct {
    name: Readonly<string>;
    getOffer: GetOffer;
    calculationModel: CalculationModel;
}

export type CalculationModel = (consumption: Readonly<number>) => Readonly<number>;
export type GetOffer = (consumption: Readonly<number>) => IOffer;
