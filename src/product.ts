import { IProduct, CalculationModel } from './product.model';
import { IOffer } from './offer.model';
import { Offer } from './offer';

export class Product implements IProduct {
    public name: Readonly<string>;

    constructor(name: Readonly<string>, calculationModel: CalculationModel) {
        this.name = name;
        this.calculationModel = calculationModel;
    }

    public calculationModel: CalculationModel;

    public getOffer(consumption: Readonly<number>): IOffer {
        return new Offer(this.name, `${this.calculationModel(consumption).toFixed(2)} €/year`);
    }
}
