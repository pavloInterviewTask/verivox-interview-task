export interface IOffer {
    name: Readonly<string>;
    annualCosts: Readonly<string>;
    getNumberAnnualCosts: GetNumericAnnualCosts;
}

export type Offers = ReadonlyArray<IOffer>;
export type GetNumericAnnualCosts = () => Readonly<number>;
