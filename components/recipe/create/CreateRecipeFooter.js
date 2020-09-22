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
    this.props.navigation.navigate("StepSelection");
  };

  render() {
    return (
      <View>
        <View>
          <SectionHeader
            name={"Steps"}
            onPress={() =>
              this.props.navigation.navigate("StepSelection", {
                method: this.props.parentState.method,
              })
            }
          />
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
