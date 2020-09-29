import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { GlobalStyles, GlobalConstants } from "../../GlobalStyles";
import PourWaterView from "../recipe/step_views/PourWaterView";

export default class StepDetailsTab extends React.Component {
  ViewSelector = () => {
    return <PourWaterView />;
  };

  render() {
    const step = this.props.route.params.step;
    console.log("Step is: ", step);
    return (
      <View style={GlobalStyles.backgroundDark}>
        <View style={styles.header}>
          <View style={styles.headerTextBox}>
            <Text style={styles.headerText}>{step.name}</Text>
          </View>
          <View style={styles.headerIconBox}>
            <Image source={step.icon} style={{ height: 120, width: 120 }} />
          </View>
        </View>
        <View>{this.ViewSelector()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 10,
  },
  headerText: {
    fontSize: 35,
  },
  headerTextBox: {
    alignSelf: "center",
    backgroundColor: GlobalConstants.colors.backgroundLight,
    minWidth: "40%",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
    alignItems: "center",
    paddingHorizontal: 5,
  },
  headerIconBox: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: GlobalConstants.colors.backgroundLight,
    width: "35%",
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
});
