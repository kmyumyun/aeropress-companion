import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
} from "react-native";
import ScrollPicker from "react-native-picker-scrollview";
import { WaterAmountOptions } from "../../../resources/PickerOptions";
import ScrollPickerWithInput from "../../shared/ScrollPickerWithInput";
import { format } from "react-string-format";
import { GlobalConstants } from "../../../GlobalStyles";

class TimeText extends React.Component {
  render() {
    const minutes = this.props.minutes;
    const seconds = this.props.seconds;
    if (minutes !== 0 || seconds !== 0) {
      const minutesString = minutes <= 9 ? "0" + minutes : minutes;
      const secondsString = seconds <= 9 ? "0" + seconds : seconds;
      const timeString = minutes === 0 ? "seconds." : "minutes.";

      return (
        <View style={styles.textBox}>
          <Text style={styles.mainText}> in </Text>
          <Text style={[styles.dynamicText, styles.mainText]}>
            {minutesString}:{secondsString}
          </Text>
          <Text style={styles.mainText}> {timeString}</Text>
        </View>
      );
    }

    return null;
  }
}

const timeValues = () => {
  var arr = [];
};

export default class PourWaterView extends React.Component {
  constructor() {
    super();

    this.state = {
      waterAmount: 10,
      minutes: 0,
      seconds: 0,
    };
  }

  render() {
    const dot = this.state.minutes === 0 && this.state.seconds === 0 ? "." : "";
    return (
      <View>
        <View>
          <View style={styles.textBox}>
            <Text style={styles.mainText}>Pour </Text>
            <Text style={[styles.mainText, styles.dynamicText]}>
              {this.state.waterAmount}mL
            </Text>
            <Text style={styles.mainText}> of water{dot}</Text>
          </View>
          <TimeText minutes={this.state.minutes} seconds={this.state.seconds} />
        </View>
        <View style={styles.pickerBox}>
          <View style={styles.waterInputBox}>
            <Text style={styles.labelText}>Water</Text>
            <ScrollPickerWithInput
              width={110}
              itemHeight={80}
              wrapperHeight={80}
              wrapperColor={"#ece6da"}
              highlightColor={"red"}
              onSelect={(data) => {
                this.setState({ waterAmount: data });
              }}
              keyboardType={"numeric"}
              minValue={10}
              maxValue={400}
              step={10}
              inputPlaceholder={"Val."}
              inputMaxLength={4}
              dataFontSize={40}
            />
          </View>
          <View style={styles.timeInputBox}>
            <Text style={styles.labelText}>Duration</Text>
            <View style={styles.timeScrollBox}>
              <ScrollPickerWithInput
                itemHeight={80}
                dataFontSize={40}
                width={55}
                wrapperHeight={80}
                wrapperColor={"#ece6da"}
                highlightColor={"red"}
                onSelect={(data) => {
                  this.setState({ minutes: data });
                }}
                keyboardType={"numeric"}
                minValue={0}
                maxValue={59}
                step={1}
                inputPlaceholder={"Val."}
                inputMaxLength={4}
                hasInput={false}
              />
              <Text style={styles.timeSeperator}>:</Text>
              {/* <ScrollPicker
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
        /> */}
              <ScrollPickerWithInput
                hasInput={false}
                width={55}
                itemHeight={80}
                dataFontSize={40}
                wrapperHeight={80}
                wrapperColor={"#ece6da"}
                highlightColor={"red"}
                onSelect={(data) => {
                  this.setState({ seconds: data });
                }}
                keyboardType={"numeric"}
                minValue={0}
                maxValue={59}
                step={1}
                inputPlaceholder={"Val."}
                inputMaxLength={4}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerBox: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-evenly",
  },
  mainText: {
    fontSize: 25,
  },
  dynamicText: {
    color: "blue",
  },
  textBox: {
    backgroundColor: GlobalConstants.colors.backgroundLight,
    flexDirection: "row",
    justifyContent: "center",
  },
  labelText: {
    textAlign: "center",
    fontSize: 15,
    paddingBottom: 5,
  },
  waterInputBox: {},
  timeInputBox: {},
  timeScrollBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeSeperator: {
    fontSize: 25,
    paddingBottom: 6,
    paddingHorizontal: 3,
  },
});
