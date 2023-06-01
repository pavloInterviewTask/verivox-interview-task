import { TCalculationModelFn, ITariff } from "./tariff/tariff.model";
import { Tariff } from "./tariff/tariff";
import { ITariffComparison } from "./tariff-comparison/tariff-comparison.model";
import { TariffComparison } from "./tariff-comparison/tariff-comparison";
import {
  BasicTariffCoefficients,
  PackagedTariffCoefficients,
} from "./constants/calculation-model-coefficients.cons";

const basicTariffCalculationModel: TCalculationModelFn = (
  consumption: Readonly<number>
) =>
  +(
    BasicTariffCoefficients.FIXED_COSTS +
    consumption * BasicTariffCoefficients.COSTS_PER_KWH
  ).toFixed(2);
const packagedTariffCalculationModel: TCalculationModelFn = (
  consumption: Readonly<number>
) =>
  +(
    PackagedTariffCoefficients.FIXED_COSTS +
    Math.max(consumption - PackagedTariffCoefficients.FIXED_CONSUMPTION, 0) *
      PackagedTariffCoefficients.COSTS_PER_KWH
  ).toFixed(2);

const basicTariff: Readonly<ITariff> = new Tariff(
  "Basic electricity tariff",
  basicTariffCalculationModel
);
const packagedTariff: Readonly<ITariff> = new Tariff(
  "Packaged tariff",
  packagedTariffCalculationModel
);

const tariffComparison: Readonly<ITariffComparison> = new TariffComparison([
  basicTariff,
  packagedTariff,
]);

console.log("Offers for Consumption = 3500 kWh/year:");
console.log(tariffComparison.getOffers(3500));
console.log("Offers for Consumption = 4500 kWh/year:");
console.log(tariffComparison.getOffers(4500));
console.log("Offers for Consumption = 6000 kWh/year:");
console.log(tariffComparison.getOffers(6000));
