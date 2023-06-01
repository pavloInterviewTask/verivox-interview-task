import { TCalculationModelFn, ITariff } from "./tariff.model";
import { Tariff } from "./tariff";
import { IOffer } from "../offer/offer.model";
import { Offer } from "../offer/offer";

describe("Product", () => {
  test("should create", () => {
    const sampleProduct: Readonly<ITariff> = new Tariff("", () => 0);

    expect<ITariff>(sampleProduct).toBeTruthy();
  });

  describe("getOffer", () => {
    test("should return a valid offer", () => {
      const calculationModel: TCalculationModelFn = (
        consumption: Readonly<number>
      ) => +(60 + consumption * 0.22).toFixed(2);

      const product: Readonly<ITariff> = new Tariff(
        "Product",
        calculationModel
      );

      const expectedOffer: Readonly<IOffer> = new Offer(
        "Product",
        "830.00 €/year"
      );
      const sampleOffer: Readonly<IOffer> = product.getOffer(3500);

      expect<IOffer>(sampleOffer).toEqual(expectedOffer);
    });
  });
});
