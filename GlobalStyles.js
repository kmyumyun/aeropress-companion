import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  headerText: {
    color: "#fdfcfb",
    fontSize: 25,
  },
  header: {
    backgroundColor: "#301C14",
    height: 50,
    flexDirection: "row",
  },
  genericBG: {
    backgroundColor: "#ece6da",
    flex: 1,
  },
  backgroundDark: {
    backgroundColor: "#e2cebd",
    flex: 1,
  },
});

export const GlobalConstants = {
  colors: {
    backgroundDark: "#e2cebd",
    backgroundLight: "#ece6da",
  },
};
