import { Offer } from "./offer";
import { IOffer } from "./offer.model";

describe("Offer", () => {
  test("should create", () => {
    const sampleOffer: Readonly<IOffer> = new Offer("", "");

    expect<IOffer>(sampleOffer).toBeTruthy();
  });

  describe("getNumericAnnualCosts", () => {
    test("should return a valid numeric annual costs", () => {
      const offer: Readonly<IOffer> = new Offer("Simple tariff", "4200 €/year");

      const expectedAnnualCosts: Readonly<number> = 4200;
      const sampleAnnualCosts: Readonly<number> = offer.getNumericAnnualCosts();

      expect<number>(sampleAnnualCosts).toEqual(expectedAnnualCosts);
    });
  });
});
