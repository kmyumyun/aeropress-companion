import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import CreateRecipeScreen from "../../../screens/recipes/CreateRecipeScreen";
import CreateRecipe from "../../recipe/create/CreateRecipe";
import { Text, View } from "react-native";
import Header from "../Header";
import StepSelectionTab from "../../shared/StepSelectionTab";
import StepDetailsTab from "../../shared/StepDetailsTab";

const Stack = createStackNavigator();

const NewRecipeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          return (
            <Header scene={scene} previous={previous} navigation={navigation} />
          );
        },
      }}
    >
      <Stack.Screen
        options={{ title: "Create New" }}
        name="Menu"
        component={CreateRecipe}
      />
      <Stack.Screen
        options={{ title: "Select Step" }}
        name="StepSelection"
        component={StepSelectionTab}
      />
      <Stack.Screen
        options={{ title: "Step Details" }}
        name="StepDetails"
        component={StepDetailsTab}
      />
    </Stack.Navigator>
  );
};

export { NewRecipeNavigator };
