import React, { useState } from "react";
import { ScrollView, StyleSheet, SafeAreaView } from "react-native";
import colors from "../../assets/colors";
import { useRoute, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const NoLoggedTemplate = (props) => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={false}
        backgroundColor={colors.backgroundColor}
        barStyle={"dark-content"}
        statusBarStyle={"dark-content"}
      />
      <ScrollView style={styles.scroll_view_container}>
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  scroll_view_container: {
    flex: 10,
  },
});
export default NoLoggedTemplate;
