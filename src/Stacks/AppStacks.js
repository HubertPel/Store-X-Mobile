import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NoAuthStack from "./NoAuthStacks";
import AuthStacks from "./AuthStacks";
const AppStacks = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ zIndex: 2 }}>
        <>
          <NavigationContainer>
            {isLoggedIn ? <AuthStacks /> : <NoAuthStack />}
          </NavigationContainer>
          {/*<ErrorModal />*/}
        </>
        {/*{isLoading && <Activity />}*/}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default AppStacks;
