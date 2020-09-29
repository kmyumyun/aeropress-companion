import React from "react";
import { View, Image, Text, TextInput, Keyboard } from "react-native";
import ScrollPicker from "react-native-picker-scrollview";
import PropTypes from "prop-types";

export default class ScrollPickerWithInput extends React.Component {
  constructor() {
    super();
  }

  textInput = (data) => {
    if (data === "Other") {
      return (
        <TextInput
          maxLength={this.props.inputMaxLength}
          style={{ textAlign: "center", fontSize: this.props.dataFontSize }}
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
          <Text style={{ fontSize: this.props.dataFontSize }}>{data}</Text>
        </View>
      );
    }
  };

  getOptions = () => {
    var options = [];
    var value = this.props.minValue;
    while (value <= this.props.maxValue) {
      options.push(value);
      value = value + this.props.step;
    }

    if (this.props.hasInput) {
      options.push("Other");
    }

    return options;
  };

  render() {
    const props = this.props;
    const options = this.getOptions();
    return (
      <View
        style={{
          height: props.wrapperHeight,
          width: this.props.width,
        }}
      >
        <ScrollPicker
          dataSource={options}
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
    );
  }
}

ScrollPickerWithInput.propTypes = {
  itemHeight: PropTypes.number,
  wrapperHeight: PropTypes.number,
  wrapperColor: PropTypes.string,
  highlightColor: PropTypes.string,
  onSelect: PropTypes.func,
};

ScrollPickerWithInput.defaultProps = {
  selectedIndex: 0,
  keyboardType: "default",
  inputPlaceholder: "Enter your value",
  minValue: 0,
  maxValue: 1,
  step: 1,
  hasInput: true,
};
