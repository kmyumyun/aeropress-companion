import React from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { GlobalStyles } from "../GlobalStyles";
import ItemTab from "./shared/ItemTab";
import Slider from "@react-native-community/slider";
import Modal from "react-native-modal";
import { render } from "react-dom";
import FilterSection from "./recipe/FilterSection";
import { recipeDefaultState } from "../resources/RecipeModel";
import {
  CoffeeAmountOptions,
  WaterAmountOptions,
  TemeperatureOptions,
  GrindOptions,
} from "../resources/PickerOptions";
import { FilterOptions } from "../resources/PickerOptions";

export default class CreateRecipe extends React.Component {
  constructor(props) {
    super();
    this.state = recipeDefaultState;
    this.baseState = this.state;

    this.titleRef = React.createRef();
  }

  setDefaultState = () => {
    this.setState(recipeDefaultState);
  };

  handleUpdate = () => {
    this.titleRef.current.clear();
  };

  addFilter = (id) => {
    const filter = FilterOptions.find((x) => x.id === id);
    if (filter) {
      var filters = [...this.state.filters];
      var newFilterData = { filterId: id, brand: filter.brand };
      filters.push(newFilterData);
      this.setState({ filters });
    }
    console.log("Filters REC", this.state.filters.length);
  };

  deleteFilter = (index) => {
    var filters = [...this.state.filters];
    if (filters[index]) {
      filters.splice(index, 1);
      this.setState({ filters });
    }
  };

  updateFilter = (index, newFilter) => {
    console.log("Is updating!");
    var filters = [...this.state.filters];
    if (filters[index] && newFilter) {
      filters[index].brand = newFilter.brand;
      this.setState({ filters });
    }
  };

  render() {
    const coffeeBeanIcon = require("../assets/coffee-bean.png");
    const colorIcon = require("../assets/aeropress-colo.png");
    const grindSettingIcon = require("../assets/grind-setting.png");
    const waterIcon = require("../assets/water.png");
    const temperatureIcon = require("../assets/temperature.png");
    const standardIcon = require("../assets/ap-s-v2.png");
    const invertedIcon = require("../assets/ap-i-v2.png");

    return (
      <View style={GlobalStyles.genericBG}>
        <ScrollView>
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
                    this.setState({ title: val });
                  }}
                />
                <TextInput
                  placeholder="Enter Author"
                  onChangeText={(val) => {
                    this.setState({ author: val });
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
                  this.setState({ method: 1 });
                }}
                style={[
                  styles.methodButton,
                  {
                    backgroundColor:
                      this.state.method === 1 ? "#B98929" : "transparent",
                  },
                ]}
              >
                <Image
                  source={standardIcon}
                  style={{ height: 40, width: 40 }}
                />
                <Text style={styles.methodText}>Standard</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ method: 2 });
                }}
                style={[
                  styles.methodButton,
                  {
                    backgroundColor:
                      this.state.method === 2 ? "#B98929" : "transparent",
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
                optionIndex={this.state.coffeeAmountIndex}
                pickerText={"Coffee Amount"}
                pickerUnitText={
                  CoffeeAmountOptions[this.state.coffeeAmountIndex] + "g"
                }
                icon={coffeeBeanIcon}
                onChangeValue={(data) => {
                  this.setState({ coffeeAmountIndex: data });
                }}
                options={CoffeeAmountOptions}
              />
              <ItemTab
                optionIndex={this.state.waterAmountIndex}
                pickerText={"Water Amount"}
                pickerUnitText={
                  WaterAmountOptions[this.state.waterAmountIndex] + "mL"
                }
                icon={waterIcon}
                onChangeValue={(data) => {
                  this.setState({ waterAmountIndex: data });
                }}
                options={WaterAmountOptions}
              />
              <ItemTab
                optionIndex={this.state.grindIndex}
                pickerText={"Grind Setting"}
                pickerUnitText={GrindOptions[this.state.grindIndex]}
                icon={grindSettingIcon}
                onChangeValue={(data) => {
                  this.setState({ grindIndex: data });
                }}
                options={GrindOptions}
              />
              <ItemTab
                optionIndex={this.state.temeperatureIndex}
                pickerText={"Temperature"}
                pickerUnitText={
                  TemeperatureOptions[this.state.temeperatureIndex] + "\u00b0C"
                }
                icon={temperatureIcon}
                onChangeValue={(data) => {
                  this.setState({ temeperatureIndex: data });
                }}
                options={TemeperatureOptions}
              />
            </View>
            <View>
              <FilterSection
                filters={this.state.filters}
                onAddFilter={this.addFilter}
                onDeleteFilter={this.deleteFilter}
                onUpdateFilter={this.updateFilter}
              />
            </View>
          </View>
        </ScrollView>
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
  header: {
    backgroundColor: "#301C14",
    height: 50,
    color: "#fdfcfb",
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
