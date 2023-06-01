export interface IOffer {
  name: Readonly<string>;
  annualCosts: Readonly<string>;
  getNumericAnnualCosts: GetNumericAnnualCostsFn;
}

export type Offers = ReadonlyArray<IOffer>;
export type GetNumericAnnualCostsFn = () => Readonly<number>;
