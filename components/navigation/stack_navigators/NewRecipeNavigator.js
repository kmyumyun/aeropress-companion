import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import CreateRecipeScreen from "../../../screens/recipes/CreateRecipeScreen";
import CreateRecipe from "../../CreateRecipe";
import { Text, View } from "react-native";
import Header from "../Header";

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
    </Stack.Navigator>
  );
};

export { NewRecipeNavigator };
