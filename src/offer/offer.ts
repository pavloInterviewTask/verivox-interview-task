import { IOffer } from "./offer.model";

export class Offer implements IOffer {
  public annualCosts: Readonly<string>;
  public name: Readonly<string>;

  constructor(name: Readonly<string>, annualCosts: Readonly<string>) {
    this.name = name;
    this.annualCosts = annualCosts;
  }

  public getNumericAnnualCosts(): Readonly<number> {
    return +this.annualCosts.slice(0, this.annualCosts.indexOf(" "));
  }
}
