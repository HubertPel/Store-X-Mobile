import React, { useContext, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NoAuthStack from "./NoAuthStacks";
import AuthStacks from "./AuthStacks";
import ErrorModal from "../Components/Modals/ErrorModal";
import UserContext from "../Contexts/UserContext";
import LoginUser from "../Hooks/LoginUser";
const AppStacks = () => {
  const { isLoggedIn } = useContext(UserContext);
  const { checkIfLogged } = LoginUser();

  useEffect(() => {
    const setup = async () => {
      checkIfLogged();
    };

    setup();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ zIndex: 2 }}>
        <>
          <NavigationContainer>
            {isLoggedIn ? <AuthStacks /> : <NoAuthStack />}
          </NavigationContainer>
          <ErrorModal />
        </>
        {/*{isLoading && <Activity />}*/}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default AppStacks;
