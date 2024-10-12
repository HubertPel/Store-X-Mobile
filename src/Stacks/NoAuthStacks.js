import React from "react";
import LoginScreen from "../Screens/Login/LoginScreen";
import RegisterScreeen from "../Screens/Register/RegisterScreeen";
import RemindPasswordScreen from "../Screens/RemindPassword/RemindPasswordScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const NoAuthStacks = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={"Login"}
      backBehavior={"history"}
      screenOptions={{
        headerShown: false,
        headerTransparent: false,
        drawerStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <>
        <Stack.Screen
          name={"Login"}
          option={{
            title: "Login",
            gestureEnabled: false,
          }}
        >
          {(props) => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name={"Register"}
          option={{
            title: "Register",
            gestureEnabled: false,
          }}
        >
          {(props) => <RegisterScreeen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name={"Reminder"}
          option={{
            title: "Reminder",
            gestureEnabled: false,
          }}
        >
          {(props) => <RemindPasswordScreen {...props} />}
        </Stack.Screen>
      </>
    </Stack.Navigator>
  );
};

export default NoAuthStacks;
