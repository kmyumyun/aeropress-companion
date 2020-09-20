import React from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import SectionHeader from "../shared/SectionHeader";
import Modal from "react-native-modal";
import { FilterOptions } from "../../resources/PickerOptions";
import { GlobalStyles } from "../../GlobalStyles";
import { AntDesign, Feather } from "@expo/vector-icons";

export default class FilterSelectRender extends React.Component {
  render() {
    const filter = this.props.filter;
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => this.props.onAddFilter(filter.id)}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={filter.icon} style={{ height: 60, width: 60 }} />
          <View>
            <Text style={{ fontSize: 20 }}>{filter.name}</Text>
            <Text style={{ fontSize: 10 }}>{filter.brand}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 2,
    borderColor: "#B98929",
    marginHorizontal: 10,
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 10,
  },
});
