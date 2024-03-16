import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ShoppingListScreen from "../Screens/ShoppingList/ShoppingListScreen";
import DefaultDrawer from "../Components/Drawers/DefaultDrawer";

const AuthStacks = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName={"ShoppingList"}
      backBehavior={"history"}
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        drawerStyle: {
          backgroundColor: "transparent",
        },
      }}
      drawerContent={(props) => <DefaultDrawer {...props} />}
    >
      <>
        <Drawer.Screen
          name={"Login"}
          option={{
            title: "Login",
            gestureEnabled: false,
          }}
        >
          {(props) => <ShoppingListScreen {...props} />}
        </Drawer.Screen>
      </>
    </Drawer.Navigator>
  );
};

export default AuthStacks;
