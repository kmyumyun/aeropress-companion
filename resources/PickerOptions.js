const CoffeeAmountOptions = Array.from({ length: 10 }, (v, k) =>
  (2 + k * 0.1).toFixed(1)
);

const WaterAmountOptions = Array.from({ length: 10 }, (v, k) => k * 5);

const TemeperatureOptions = Array.from({ length: 10 }, (v, k) => 2 + k);

const GrindOptions = [
  "Turkish",
  "Extra Fine",
  "Fine",
  "Medium",
  "Extra Extra Coarse",
];

const FilterOptions = [
  {
    id: "0",
    icon: require("../assets/filter-paper.png"),
    name: "Paper Filter",
    brand: "Standart",
    allowEdit: 1,
  },
  {
    id: "1",
    icon: require("../assets/filter-metal.png"),
    name: "Metal Filter",
    brand: "Any",
    allowEdit: 1,
  },
  {
    id: "2",
    icon: require("../assets/filter-prismo.png"),
    name: "Prismo Attachment",
    brand: "Fellow",
    allowEdit: 0,
  },
];

export {
  CoffeeAmountOptions,
  WaterAmountOptions,
  GrindOptions,
  TemeperatureOptions,
  FilterOptions,
};
