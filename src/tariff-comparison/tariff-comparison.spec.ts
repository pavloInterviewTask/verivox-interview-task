import { TariffComparison } from "./tariff-comparison";
import { ITariffComparison } from "./tariff-comparison.model";
import { TCalculationModelFn, ITariff } from "../tariff/tariff.model";
import { Tariff } from "../tariff/tariff";
import { TOffers } from "../offer/offer.model";
import { Offer } from "../offer/offer";

describe("Tariff Comparison", () => {
  test("should create", () => {
    const sampleTariffComparison: Readonly<ITariffComparison> =
      new TariffComparison([]);

    expect<ITariffComparison>(sampleTariffComparison).toBeTruthy();
  });

  describe("getOffers", () => {
    test("should return a valid offers", () => {
      const firstCalculationModel: TCalculationModelFn = (
        consumption: Readonly<number>
      ) => +(60 + consumption * 0.22).toFixed(2);
      const secondCalculationModel: TCalculationModelFn = (
        consumption: Readonly<number>
      ) => +(800 + Math.max(consumption - 4000, 0) * 0.3).toFixed(2);

      const firstProduct: Readonly<ITariff> = new Tariff(
        "First Tariff",
        firstCalculationModel
      );
      const secondProduct: Readonly<ITariff> = new Tariff(
        "Second Tariff",
        secondCalculationModel
      );

      const tariffComparison: Readonly<ITariffComparison> =
        new TariffComparison([firstProduct, secondProduct]);

      const expectedOffers: TOffers = [
        new Offer("Second Tariff", "800.00 €/year"),
        new Offer("First Tariff", "830.00 €/year"),
      ];
      const sampleOffers: TOffers = tariffComparison.getOffers(3500);

      expect<TOffers>(sampleOffers).toEqual(expectedOffers);
    });
  });
});
