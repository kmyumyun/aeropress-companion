import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";
import { Feather } from "@expo/vector-icons";
import { FilterOptions } from "../../../resources/PickerOptions";

export default class BrandEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
      filterBrand: "",
    };
  }

  showModal = () => {
    this.setState({
      isModalVisible: true,
      filterBrand: this.props.filter.brand,
    });
  };

  hideModal = () => {
    this.setState({ isModalVisible: false });
  };

  changeBrand = () => {
    const brandName = this.state.filterBrand
      ? this.state.filterBrand
      : this.props.filter.brand;

    this.setState({ filterBrand: "test" });
    var filter = this.props.filter;
    filter.brand = brandName;

    this.props.onUpdateFilter(this.props.index, filter);
    this.hideModal();
  };

  render() {
    const filterData = this.props.filter;
    const filter = FilterOptions.find((x) => x.id === filterData.filterId);
    console.log("Display filter is: ", filterData);
    if (filter && filter.allowEdit === 1) {
      return (
        <View>
          <TouchableOpacity
            onPress={this.showModal}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={{ fontSize: 15, marginRight: 5 }}>
              {filterData.brand}
            </Text>
            <Feather name="edit" size={16} color="#6497b1" />
          </TouchableOpacity>
          <Modal
            isVisible={this.state.isModalVisible}
            onBackButtonPress={this.hideModal}
            onBackdropPress={this.hideModal}
          >
            <View style={styles.modalBox}>
              <Text
                style={{ fontSize: 20, alignSelf: "center", color: "#B98929" }}
              >
                Enter Filter Brand
              </Text>
              <TextInput
                style={styles.inputField}
                placeholder={"Leave blank for default"}
                onSubmitEditing={this.changeBrand}
                onChangeText={(val) => {
                  this.setState({ filterBrand: val });
                }}
              />
            </View>
          </Modal>
        </View>
      );
    } else {
      return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 15, marginRight: 5 }}>
            {filterData.brand}
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  modalBox: {
    backgroundColor: "#ece6da",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 6,
  },
  button: {
    width: "25%",
    alignSelf: "center",
    paddingBottom: 10,
  },
  inputField: {
    borderBottomWidth: 1,
    borderColor: "#B98929",
    marginVertical: 15,
    width: "50%",
    alignSelf: "center",
    textAlign: "center",
  },
});
