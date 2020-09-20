import React from "react";

import ScreenName from "../components/ScreenNames.js";
import { View, StyleSheet } from "react-native";

export default function ScreenOne() {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <ScreenName name={"ScreenOnce"} />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
