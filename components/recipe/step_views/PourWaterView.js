import React from "react";
import { View, Image, Text, TextInput, Keyboard } from "react-native";
import ScrollPicker from "react-native-picker-scrollview";
import { WaterAmountOptions } from "../../../resources/PickerOptions";

export default class PourWaterView extends React.Component {
  constructor() {
    super();

    this.state = {
      minutes: 0,
      seconds: 0,
      waterAmount: 0,
    };
  }

  textInput = (data) => {
    if (data === "Other") {
      return (
        <TextInput
          maxLength={4}
          style={{ textAlign: "center" }}
          keyboardType="numeric"
          placeholder="Enter your value"
          onChangeText={(val) => {
            this.setState({ waterAmount: val });
          }}
        />
      );
    } else {
      return (
        <View>
          <Text>{data}</Text>
        </View>
      );
    }
  };

  render() {
    return (
      <View>
        <View>
          <Text>This view is visible!</Text>
        </View>
        <View style={{ width: 60 }}>
          <View style={{ height: 160 }}>
            <ScrollPicker
              dataSource={WaterAmountOptions}
              selectedIndex={0}
              itemHeight={20}
              wrapperHeight={160}
              wrapperColor={"#ece6da"}
              highlightColor={"#B98929"}
              renderItem={(data, index, isSelected) => this.textInput(data)}
              onValueChange={(data, selectedIndex) => {
                if (data !== "Other") {
                  this.setState({ waterAmount: data });
                  Keyboard.dismiss();
                }
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
