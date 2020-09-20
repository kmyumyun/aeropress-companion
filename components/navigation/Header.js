import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../GlobalStyles";

import DrawerTrigger from "./DrawerTrigger";
import { ceil } from "react-native-reanimated";

function Header({ scene, previous, navigation }) {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
  return (
    <View style={GlobalStyles.header}>
      <View style={styles.navigationButton}>
        <DrawerTrigger navigation={navigation} previous={previous} />
      </View>
      <View style={styles.headerTitle}>
        <Text style={GlobalStyles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationButton: {
    justifyContent: "center",
  },
  headerTitle: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -60,
    flex: 1,
  },
});

export default Header;
