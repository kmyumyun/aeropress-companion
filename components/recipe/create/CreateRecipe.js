import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { GlobalStyles } from "../../../GlobalStyles";
import { recipeDefaultState } from "../../../resources/RecipeModel";
import { FilterOptions } from "../../../resources/PickerOptions";
import TopComponent from "./TopComponent";
import FilterDisplayRender from "./FilterDisplayRender";
import CreateRecipeFooter from "./CreateRecipeFooter";

export default class CreateRecipe extends React.Component {
  constructor() {
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
      this.setState({ filters, refresh: !this.state.refresh });
    }
    console.log("Filters REC", this.state.filters.length);
  };

  deleteFilter = (index) => {
    var filters = [...this.state.filters];
    if (filters[index]) {
      filters.splice(index, 1);
      this.setState({ filters, refresh: !this.state.refresh });
    }
  };

  updateFilter = (index, newFilter) => {
    console.log("Is updating!");
    var filters = [...this.state.filters];
    if (filters[index] && newFilter) {
      filters[index].brand = newFilter.brand;
      this.setState({ filters, refresh: !this.state.refresh });
    }
  };

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

  filterKeyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={GlobalStyles.genericBG}>
        <FlatList
          data={this.state.filters}
          renderItem={this.renderFilterDisplayItem}
          keyExtractor={this.filterKeyExtractor}
          extraData={this.state.refresh}
          ListHeaderComponent={
            <TopComponent
              onAddFilter={this.addFilter}
              onUpdateFilter={this.updateFilter}
              onDeleteFilter={this.deleteFilter}
              setParentState={(newState) => this.setState(newState)}
              parentState={this.state}
            />
          }
          ListFooterComponent={<CreateRecipeFooter steps={this.state.steps} />}
        />
      </View>
    );
  }
}
