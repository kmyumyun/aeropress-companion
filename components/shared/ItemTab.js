import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Button,
  TextInput,
  Keyboard,
} from "react-native";
import Modal from "react-native-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ScrollPicker from "react-native-picker-scrollview";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

export default class ItemTab extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isModalVisible: false,
      selectedItem: 0,
    };
  }

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  hideModal = () => {
    this.setState({ isModalVisible: false });
  };

  handleSubmit = (data) => {
    this.props.onChangeValue(this.state.selectedItem);
    this.hideModal();
  };

  textInput = (data) => {
    if (data === "Other") {
      return (
        <TextInput
          style={{ textAlign: "center" }}
          keyboardType="numeric"
          placeholder="Enter your value"
          onChangeText={(val) => {
            this.setState({ selectedItem: val });
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
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.showModal}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Image source={this.props.icon} style={styles.icon} />
          </View>
          <View style={{ backgroundColor: "red" }}>
            <Text style={{ color: "#ff6600", textAlign: "center" }}>
              {this.props.pickerUnitText}
            </Text>
          </View>
        </TouchableOpacity>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackButtonPress={this.hideModal}
          onBackdropPress={this.hideModal}
        >
          <View>
            <View style={[styles.bgColor, styles.modalHeader]}>
              <Text style={{ fontSize: 25, color: "#B98929" }}>
                {this.props.pickerText}
              </Text>
            </View>
            <View style={styles.pickerContainer}>
              <ScrollPicker
                dataSource={this.props.options}
                selectedIndex={0}
                itemHeight={50}
                wrapperHeight={160}
                wrapperColor={styles.bgColor.backgroundColor}
                highlightColor={"#B98929"}
                renderItem={(data, index, isSelected) => this.textInput(data)}
                onValueChange={(data, selectedIndex) => {
                  if (data !== "Other") {
                    this.setState({ selectedItem: data });
                    Keyboard.dismiss();
                  }
                }}
              />
            </View>
            <View style={[styles.bgColor, styles.buttonsContainer]}>
              <TouchableOpacity
                onPress={this.hideModal}
                style={styles.cancelButton}
              >
                <View>
                  <MaterialCommunityIcons
                    name="cancel"
                    size={30}
                    color="black"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handleSubmit}
                style={styles.submitButton}
              >
                <View>
                  <Text style={{ fontSize: 25 }}>Submit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "22%",
    borderColor: "#B98929",
    borderWidth: 2,
    borderRadius: 5,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#ff0000",
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  submitButton: {
    backgroundColor: "#0099ff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  bgColor: {
    backgroundColor: "#ece6da",
  },
  pickerContainer: {
    height: 160,
  },
  modalHeader: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  icon: {
    width: responsiveScreenWidth(15),
    height: responsiveScreenHeight(8),
  },
});
