import { ITariffComparison } from "./tariff-comparison.model";
import { IOffer, Offers } from "./offer.model";
import { IProduct } from "./product.model";

export class TariffComparison implements ITariffComparison {
  public tariffs: ReadonlyArray<IProduct>;

  constructor(tariffs: ReadonlyArray<IProduct>) {
    this.tariffs = tariffs;
  }

  public getOffers(consumption: Readonly<number>): Offers {
    return this.tariffs
      .map((tariff: Readonly<IProduct>) => tariff.getOffer(consumption))
      .sort(
        (prev: Readonly<IOffer>, next: Readonly<IOffer>) =>
          prev.getNumericAnnualCosts() - next.getNumericAnnualCosts()
      );
  }
}
