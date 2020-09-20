import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";

function DrawerTrigger({ navigation, previous }) {
  const Button = () => {
    if (previous)
      return <Ionicons name={"ios-arrow-back"} size={30} color={"#fdfcfb"} />;
    return <SimpleLineIcons name={"menu"} size={30} color={"#fdfcfb"} />;
  };

  function handlePress() {
    if (previous) navigation.goBack();
    else navigation.openDrawer();
  }

  return (
    <TouchableOpacity
      style={styles.trigger}
      onPress={() => {
        handlePress();
      }}
    >
      <Button />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  trigger: {
    width: 60,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DrawerTrigger;
