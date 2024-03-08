import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "../Screens/Login/LoginScreen";
import RegisterScreeen from "../Screens/Register/RegisterScreeen";
import RemindPasswordScreen from "../Screens/RemindPassword/RemindPasswordScreen";

const NoAuthStacks = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName={"Login"}
      backBehavior={"history"}
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        drawerStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <>
        <Drawer.Screen
          name={"Login"}
          option={{
            title: "Login",
            gestureEnabled: false,
          }}
        >
          {(props) => <LoginScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen
          name={"Register"}
          option={{
            title: "Register",
            gestureEnabled: false,
          }}
        >
          {(props) => <RegisterScreeen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen
          name={"Reminder"}
          option={{
            title: "Reminder",
            gestureEnabled: false,
          }}
        >
          {(props) => <RemindPasswordScreen {...props} />}
        </Drawer.Screen>
      </>
    </Drawer.Navigator>
  );
};

export default NoAuthStacks;
