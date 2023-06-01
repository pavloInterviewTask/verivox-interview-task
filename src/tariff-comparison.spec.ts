import { TariffComparison } from "./tariff-comparison";
import { ITariffComparison } from "./tariff-comparison.model";
import { CalculationModelFn, IProduct } from "./product.model";
import { Product } from "./product";
import { Offers } from "./offer.model";
import { Offer } from "./offer";

describe("Tariff Comparison", () => {
  test("should create", () => {
    const sampleTariffComparison: Readonly<ITariffComparison> =
      new TariffComparison([]);

    expect<ITariffComparison>(sampleTariffComparison).toBeTruthy();
  });

  describe("getOffers", () => {
    test("should return a valid offers", () => {
      const firstCalculationModel: CalculationModelFn = (
        consumption: Readonly<number>
      ) => +(60 + consumption * 0.22).toFixed(2);
      const secondCalculationModel: CalculationModelFn = (
        consumption: Readonly<number>
      ) => +(800 + Math.max(consumption - 4000, 0) * 0.3).toFixed(2);

      const firstProduct: Readonly<IProduct> = new Product(
        "First Product",
        firstCalculationModel
      );
      const secondProduct: Readonly<IProduct> = new Product(
        "Second Product",
        secondCalculationModel
      );

      const tariffComparison: Readonly<ITariffComparison> =
        new TariffComparison([firstProduct, secondProduct]);

      const expectedOffers: Offers = [
        new Offer("Second Product", "800.00 €/year"),
        new Offer("First Product", "830.00 €/year"),
      ];
      const sampleOffers: Offers = tariffComparison.getOffers(3500);

      expect<Offers>(sampleOffers).toEqual(expectedOffers);
    });
  });
});
