import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ShoppingListScreen from "../Screens/ShoppingList/ShoppingListScreen";
import DefaultDrawer from "../Components/Drawers/DefaultDrawer";
import MyDataScreen from "../Screens/MyDataScreen/MyDataScreen";
import MyAvatarScreen from "../Screens/MyAvatar/MyAvatarScreen";
import MyFamilyScreen from "../Screens/MyFamily/MyFamilyScreen";

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
        <Drawer.Screen
          name={"MyData"}
          option={{
            title: "MyData",
            gestureEnabled: false,
          }}
        >
          {(props) => <MyDataScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen
          name={"MyAvatar"}
          option={{
            title: "MyAvatar",
            gestureEnabled: false,
          }}
        >
          {(props) => <MyAvatarScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen
          name={"MyFamily"}
          option={{
            title: "MyFamily",
            gestureEnabled: false,
          }}
        >
          {(props) => <MyFamilyScreen {...props} />}
        </Drawer.Screen>
      </>
    </Drawer.Navigator>
  );
};

export default AuthStacks;
