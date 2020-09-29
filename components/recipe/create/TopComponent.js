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
import {
  responsiveScreenFontSize,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export default class TopComponent extends React.Component {
  renderFilterDisplayItem = ({ item, index }) => {
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
    const standardIcon = require("../../../assets/ap-s.png");
    const invertedIcon = require("../../../assets/ap-i.png");

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
            alignItems: "center",
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
            <Image source={standardIcon} style={styles.icon} />
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
            <Image source={invertedIcon} style={styles.icon} />
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
            pickerText={"Coffee Amount"}
            pickerUnitText={this.props.parentState.coffeeAmount + "g"}
            icon={coffeeBeanIcon}
            onChangeValue={(data) => {
              this.props.setParentState({ coffeeAmount: data });
            }}
            options={CoffeeAmountOptions}
          />
          <ItemTab
            pickerText={"Water Amount"}
            pickerUnitText={this.props.parentState.waterAmount + "mL"}
            icon={waterIcon}
            onChangeValue={(data) => {
              this.props.setParentState({ waterAmount: data });
            }}
            options={WaterAmountOptions}
          />
          <ItemTab
            pickerText={"Grind Setting"}
            pickerUnitText={this.props.parentState.grind}
            icon={grindSettingIcon}
            onChangeValue={(data) => {
              this.props.setParentState({ grind: data });
            }}
            options={GrindOptions}
          />
          <ItemTab
            pickerText={"Temperature"}
            pickerUnitText={this.props.parentState.temeperature + "\u00b0C"}
            icon={temperatureIcon}
            onChangeValue={(data) => {
              this.props.setParentState({ temeperature: data });
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
    justifyContent: "flex-start",
    alignItems: "center",
    width: "46%",
    paddingVertical: 5,
    borderColor: "#B98929",
    marginBottom: 10,
    marginHorizontal: 5,
  },
  methodText: {
    fontSize: responsiveScreenFontSize(3),
    color: "#301C14",
  },
  icon: {
    height: 40,
    width: 40,
    marginLeft: -5,
    marginRight: -5,
  },
});
