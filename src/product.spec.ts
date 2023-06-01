import { CalculationModelFn, IProduct } from "./product.model";
import { Product } from "./product";
import { Offer } from "./offer";
import { IOffer } from "./offer.model";

describe("Product", () => {
  test("should create", () => {
    const sampleProduct: Readonly<IProduct> = new Product("", () => 0);

    expect<IProduct>(sampleProduct).toBeTruthy();
  });

  describe("getOffer", () => {
    test("should return a valid offer", () => {
      const calculationModel: CalculationModelFn = (
        consumption: Readonly<number>
      ) => +(60 + consumption * 0.22).toFixed(2);

      const product: Readonly<IProduct> = new Product(
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
