import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import ItemTab from "../../shared/ItemTab";
import FilterSection from "./FilterSection";
import {
  CoffeeAmountOptions,
  WaterAmountOptions,
  TemeperatureOptions,
  GrindOptions,
} from "../../../resources/PickerOptions";
import FilterDisplayRender from "./FilterDisplayRender";

export default class TopComponent extends React.Component {
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

  render() {
    const coffeeBeanIcon = require("../../../assets/coffee-bean.png");
    const colorIcon = require("../../../assets/aeropress-colo.png");
    const grindSettingIcon = require("../../../assets/grind-setting.png");
    const waterIcon = require("../../../assets/water.png");
    const temperatureIcon = require("../../../assets/temperature.png");
    const standardIcon = require("../../../assets/ap-s-v2.png");
    const invertedIcon = require("../../../assets/ap-i-v2.png");

    return (
      <View>
        <View style={styles.title}>
          <View style={styles.topIcon}>
            <Image source={colorIcon} style={{ height: 80, width: 80 }} />
          </View>
          <View
            style={{
              maxWidth: "70%",
              justifyContent: "center",
            }}
          >
            <TextInput
              ref={this.titleRef}
              textBreakStrategy="simple"
              style={styles.titleText}
              placeholder="Edit Title"
              onChangeText={(val) => {
                this.props.setParentState({ title: val });
              }}
            />
            <TextInput
              placeholder="Enter Author"
              onChangeText={(val) => {
                this.props.setParentState({ author: val });
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.setParentState({ method: 1 });
            }}
            style={[
              styles.methodButton,
              {
                backgroundColor:
                  this.props.parentState.method === 1
                    ? "#B98929"
                    : "transparent",
              },
            ]}
          >
            <Image source={standardIcon} style={{ height: 40, width: 40 }} />
            <Text style={styles.methodText}>Standard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.setParentState({ method: 2 });
            }}
            style={[
              styles.methodButton,
              {
                backgroundColor:
                  this.props.parentState.method === 2
                    ? "#B98929"
                    : "transparent",
              },
            ]}
          >
            <Image
              source={invertedIcon}
              style={{ height: 40, width: 40, tintColor: "#301C14" }}
            />
            <Text style={styles.methodText}>Inverted</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <ItemTab
            optionIndex={this.props.parentState.coffeeAmountIndex}
            pickerText={"Coffee Amount"}
            pickerUnitText={
              CoffeeAmountOptions[this.props.parentState.coffeeAmountIndex] +
              "g"
            }
            icon={coffeeBeanIcon}
            onChangeValue={(data) => {
              this.props.setParentState({ coffeeAmountIndex: data });
            }}
            options={CoffeeAmountOptions}
          />
          <ItemTab
            optionIndex={this.props.parentState.waterAmountIndex}
            pickerText={"Water Amount"}
            pickerUnitText={
              WaterAmountOptions[this.props.parentState.waterAmountIndex] + "mL"
            }
            icon={waterIcon}
            onChangeValue={(data) => {
              this.props.setParentState({ waterAmountIndex: data });
            }}
            options={WaterAmountOptions}
          />
          <ItemTab
            optionIndex={this.props.parentState.grindIndex}
            pickerText={"Grind Setting"}
            pickerUnitText={GrindOptions[this.props.parentState.grindIndex]}
            icon={grindSettingIcon}
            onChangeValue={(data) => {
              this.props.setParentState({ grindIndex: data });
            }}
            options={GrindOptions}
          />
          <ItemTab
            optionIndex={this.props.parentState.temeperatureIndex}
            pickerText={"Temperature"}
            pickerUnitText={
              TemeperatureOptions[this.props.parentState.temeperatureIndex] +
              "\u00b0C"
            }
            icon={temperatureIcon}
            onChangeValue={(data) => {
              this.props.setParentState({ temeperatureIndex: data });
            }}
            options={TemeperatureOptions}
          />
        </View>
        <View>
          <FilterSection
            onAddFilter={this.props.onAddFilter}
            onDeleteFilter={this.props.onDeleteFilter}
            onUpdateFilter={this.props.onUpdateFilter}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topIcon: {
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  title: {
    margin: 15,
    borderRadius: 1,
    borderWidth: 5,
    borderColor: "#B98929",
    flexDirection: "row",
  },
  titleText: {
    fontSize: 25,
    fontWeight: "500",
    flexWrap: "nowrap",
    fontFamily: "",
  },
  methodButton: {
    borderRadius: 5,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    marginBottom: 10,
    paddingVertical: 5,
    borderColor: "#B98929",
    marginHorizontal: 5,
  },
  methodText: {
    fontSize: 20,
    color: "#301C14",
  },
});
