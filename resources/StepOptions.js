export default stepOptions = [
  {
    id: "0",
    name: "Pour Water",
    icon: {
      standard: require("../assets/fill-water-s.png"),
      inverted: require("../assets/fill-water-i.png"),
    },
    props: [
      {
        type: "number",
        name: "Water Amount",
      },
      {
        type: "time",
        name: "Time",
      },
    ],
    isMultipleProps: true,
  },
  {
    id: "1",
    name: "Invert",
    icon: require("../assets/invert-i.png"),
  },
];
