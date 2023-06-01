export interface IOffer {
  name: Readonly<string>;
  annualCosts: Readonly<string>;
  getNumericAnnualCosts: TGetNumericAnnualCostsFn;
}

export type TOffers = ReadonlyArray<IOffer>;
export type TGetNumericAnnualCostsFn = () => Readonly<number>;
