import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import StepOptions from "../../resources/StepOptions";
import { GlobalStyles } from "../../GlobalStyles";

export default class StepSelectionTab extends React.Component {
  getIcon = (item) => {
    console.log("Item icon is:  ", this.props);
    const method = this.props.route.params.method;
    if (item.icon.standard && method === 1) return item.icon.standard;
    if (item.icon.inverted && method === 2) return item.icon.inverted;

    return item.icon;
  };

  handleSelect = (item) => {
    item.icon = this.getIcon(item);
    this.props.navigation.navigate("StepDetails", { step: item });
  };

  renderStepView = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => this.handleSelect(item)}
        style={styles.container}
      >
        <View style={styles.iconContainer}>
          <Image
            source={this.getIcon(item)}
            style={{ height: 80, width: 80 }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  filterKeyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={[GlobalStyles.genericBG, styles.listBox]}>
        <FlatList
          data={StepOptions}
          renderItem={this.renderStepView}
          keyExtractor={this.filterKeyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listBox: {
    paddingVertical: 5,
  },
  container: {
    backgroundColor: "#e2cebd",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconContainer: {
    borderRadius: 15,
    backgroundColor: "#ece6da",
    marginLeft: 5,
  },
  textContainer: {
    textAlign: "center",
    flex: 1,
  },
  text: {
    fontSize: 25,
    textAlign: "center",
  },
});
