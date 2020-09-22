import React from "react";
import { View, Image } from "react-native";
import { GlobalStyles } from "../../GlobalStyles";
import PourWaterView from "../recipe/step_views/PourWaterView";

export default class StepDetailsTab extends React.Component {
  ViewSelector = () => {
    return <PourWaterView />;
  };

  render() {
    const step = this.props.route.params.step;
    console.log("Step is: ", step);
    return (
      <View style={GlobalStyles.genericBG}>
        <View>
          <Image source={step.icon} style={{ height: 80, width: 80 }} />
        </View>
        <View>{this.ViewSelector()}</View>
      </View>
    );
  }
}
