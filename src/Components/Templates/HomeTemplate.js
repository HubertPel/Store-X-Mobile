import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import HomeNavbar from "../Navbars/HomeNavbar";
import colors from "../../assets/colors";

const HomeTemplate = (props) => {
  return (
    <View style={styles.container}>
      <HomeNavbar />
      <ScrollView style={styles.scroll_view_container}>
        {props.children}
      </ScrollView>
    </View>
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
export default HomeTemplate;
