import { Product } from "./product";
import { CalculationModelFn, IProduct } from "./product.model";
import { ITariffComparison } from "./tariff-comparison.model";
import { TariffComparison } from "./tariff-comparison";

const basicTariffCalculationModel: CalculationModelFn = (
  consumption: Readonly<number>
) => +(60 + consumption * 0.22).toFixed(2);
const packagedTariffCalculationModel: CalculationModelFn = (
  consumption: Readonly<number>
) => +(800 + Math.max(consumption - 4000, 0) * 0.3).toFixed(2);

const basicTariff: Readonly<IProduct> = new Product(
  "Basic electricity tariff",
  basicTariffCalculationModel
);
const packagedTariff: Readonly<IProduct> = new Product(
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
