import React from "react";
import { View, FlatList } from "react-native";
import SectionHeader from "../../shared/SectionHeader";

export default class CreateRecipeFooter extends React.Component {
  constructor() {
    super();

    this.state = {
      refresh: true,
      steps: [],
      isModalVisible: false,
    };
  }

  showModal = () => {
    this.state.isModalVisible = true;
  };

  hideModal = () => {
    this.state.isModalVisible = false;
  };

  render() {
    return (
      <View>
        <View>
          <SectionHeader name={"Steps"} showModal={this.showModal} />
        </View>
        <View>
          <FlatList
            data={this.state.steps}
            renderItem={this.renderFilterDisplayItem}
            keyExtractor={this.filterKeyExtractor}
            extraData={this.state.refresh}
          />
        </View>
      </View>
    );
  }
}
