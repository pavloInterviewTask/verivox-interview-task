import { ITariffComparison } from "./tariff-comparison.model";
import { ITariff } from "../tariff/tariff.model";
import { IOffer, TOffers } from "../offer/offer.model";

export class TariffComparison implements ITariffComparison {
  public tariffs: ReadonlyArray<ITariff>;

  constructor(tariffs: ReadonlyArray<ITariff>) {
    this.tariffs = tariffs;
  }

  public getOffers(consumption: Readonly<number>): TOffers {
    return this.tariffs
      .map((tariff: Readonly<ITariff>) => tariff.getOffer(consumption))
      .sort(
        (prev: Readonly<IOffer>, next: Readonly<IOffer>) =>
          prev.getNumericAnnualCosts() - next.getNumericAnnualCosts()
      );
  }
}
