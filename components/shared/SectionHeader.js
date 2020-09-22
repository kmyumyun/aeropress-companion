import React from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { MaterialIcons } from "@expo/vector-icons";

export default class SectionHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{this.props.name}</Text>
        <TouchableOpacity
          style={{ paddingRight: 5, paddingVertical: 3 }}
          onPress={this.props.onPress}
        >
          <MaterialIcons name="add-circle-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#B98929",
    width: "100%",
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 25,
    color: "#ece6da",
  },
  icon: {},
});
