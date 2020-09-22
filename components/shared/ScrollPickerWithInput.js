import React from "react";
import { View, Image, Text, TextInput, Keyboard } from "react-native";
import ScrollPicker from "react-native-picker-scrollview";
import { WaterAmountOptions } from "../../../resources/PickerOptions";
import PropTypes from "prop-types"

export default class ScrollPickerWithInput {
    constructor() {
        super();
      }
    
      textInput = (data) => {
        if (data === "Other") {
          return (
            <TextInput
              style={{ textAlign: "center" }}
              keyboardType={this.props.keyboardType}
              placeholder={this.props.inputPlaceholder}
              onChangeText={(val) => {
                this.props.onSelect(val);
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
          const props = this.props;
          
        return (
          <View>
            <View>
              <Text>This view is visible!</Text>
            </View>
            <View style={{ height: props.wrapperHeight }}>
              <ScrollPicker
                dataSource={props.dataSource}
                selectedIndex={props.selectedIndex}
                itemHeight={props.itemHeight}
                wrapperHeight={props.wrapperHeight}
                wrapperColor={props.wrapperColor}
                highlightColor={props.highlightColor}
                renderItem={(data, index, isSelected) => this.textInput(data)}
                onValueChange={(data, selectedIndex) => {
                  if (data !== "Other") {
                    this.props.onSelect(data);
                    Keyboard.dismiss();
                  }
                }}
              />
            </View>
          </View>
        );
      }
}

ScrollPickerWithInput.PropTypes = {
    dataSource: PropTypes.array,
    itemHeight: PropTypes.number,
    wrapperHeight: PropTypes.number,
    wrapperColor: PropTypes.string,
    highlightColor: PropTypes.string,
    onSelect: PropTypes.func
}

ScrollPickerWithInput.defaultProps = {
    selectedIndex = 0,
    keyboardType: "default",
    inputPlaceholder: "Enter your value"
}