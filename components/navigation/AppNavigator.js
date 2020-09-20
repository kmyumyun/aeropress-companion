import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NewRecipeNavigator } from "./stack_navigators/NewRecipeNavigator";
import ScreenOne from "../../screens/ScreenOne";
import ScreenTwo from "../../screens/ScreenTwo";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      backBehavior="history"
      drawerStyle={{
        backgroundColor: "#301C14",
      }}
      drawerContentOptions={{
        labelStyle: {
          color: "#fdfcfb",
          fontFamily: "",
        },
      }}
    >
      <Drawer.Screen name="ScreenOne" component={ScreenOne} />
      <Drawer.Screen name="ScreenTwo" component={ScreenTwo} />
      <Drawer.Screen
        name="NewRecipe"
        options={{
          title: "Create New Recipe",
        }}
        component={NewRecipeNavigator}
      />
    </Drawer.Navigator>
  );
};

export { AppNavigator };
