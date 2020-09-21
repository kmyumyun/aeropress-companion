import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FilterOptions } from "../../../resources/PickerOptions";
import { AntDesign } from "@expo/vector-icons";
import BrandEdit from "./BrandEdit";

export default class FilterDisplayRender extends React.Component {
  render() {
    const filterData = this.props.filter;
    const filter = FilterOptions.find((x) => x.id === filterData.filterId);
    if (filter === null) return;
    return (
      <View style={styles.filterContainer}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={filter.icon} style={{ height: 80, width: 80 }} />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 25 }}>{filter.name}</Text>
            <BrandEdit
              filter={filterData}
              index={this.props.index}
              onUpdateFilter={this.props.onUpdateFilter}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{ paddingRight: 2 }}
          onPress={() => this.props.onDeleteFilter(this.props.index)}
        >
          <AntDesign name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#B98929",
    borderWidth: 1,
    borderRadius: 1,
    marginVertical: 3,
    marginHorizontal: 10,
    alignItems: "center",
    paddingHorizontal: 5,
  },
});
