import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SectionHeader from "../shared/SectionHeader";
import Modal from "react-native-modal";
import { FilterOptions } from "../../resources/PickerOptions";
import { Feather } from "@expo/vector-icons";
import FilterDisplayRender from "./FilterDisplayRender";
import FilterSelectRender from "./FilterSelectRender";
import { FlatList } from "react-native-gesture-handler";

import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
  "VirtualizedLists should never be nested", // TODO: Remove when fixed
]);

export default class FilterSection extends React.Component {
  constructor() {
    super();

    this.state = {
      isModalVisible: false,
      refresh: false,
    };
  }

  renderFilterSelectItem = ({ item }) => {
    return <FilterSelectRender filter={item} onAddFilter={this.addFilter} />;
  };

  renderFilterDisplayItem = ({ item, index }) => {
    console.log("Item is: ", item);
    return (
      <FilterDisplayRender
        filter={item}
        index={index}
        onDeleteFilter={this.deleteFilter}
        onUpdateFilter={this.updateFilter}
      />
    );
  };

  addFilter = (index) => {
    console.log("onadd", index);
    this.props.onAddFilter(index);
    this.setState({ refresh: !this.state.refresh });
    this.hideModal();
  };

  updateFilter = (index, newFilter) => {
    this.props.onUpdateFilter(index, newFilter);
    this.setState({ refresh: !this.state.refresh });
  };

  deleteFilter = (index) => {
    this.props.onDeleteFilter(index);
    this.setState({ refresh: !this.state.refresh });
  };

  keyExtractor = (item, index) => item.id;
  filterKeyExtractor = (item, index) => index.toString();

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  hideModal = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    return (
      <View>
        <View>
          <SectionHeader name={"Filters"} showModal={this.showModal} />
        </View>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackButtonPress={this.hideModal}
          onBackdropPress={this.hideModal}
        >
          <View style={{ backgroundColor: "#ece6da", borderRadius: 3 }}>
            <Text
              style={{ alignSelf: "center", fontSize: 25, paddingVertical: 5 }}
            >
              Pick a Filter
            </Text>
            <View>
              <FlatList
                data={FilterOptions}
                renderItem={this.renderFilterSelectItem}
                keyExtractor={this.keyExtractor}
                extraData={this.state.refresh}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
            >
              <Feather name="info" size={20} color="#6497b1" />
              <Text
                numberOfLines={2}
                style={{ color: "#C0C0C0", paddingLeft: 3 }}
              >
                Pick your filters in the order they are in the cap.
              </Text>
            </View>
          </View>
        </Modal>
        <View style={{ maxHeight: 220 }}>
          <FlatList
            data={this.props.filters}
            renderItem={this.renderFilterDisplayItem}
            keyExtractor={this.filterKeyExtractor}
            extraData={this.state.refresh}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
