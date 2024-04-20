import React from "react";
import { ScrollView, StyleSheet, View, Text, TouchableHighlight } from "react-native";
import HomeNavbar from "../Navbars/HomeNavbar";
import colors from "../../assets/colors";
import { ScreenWidth } from "@rneui/base";
import { useRoute, useNavigation } from '@react-navigation/native';


const MyAccountTemplate = (props) => {
    const route = useRoute();
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HomeNavbar />
      <ScrollView style={styles.scroll_view_container}>
        {props.children}
      </ScrollView>
      <View style={styles.submenu_container}>
        <TouchableHighlight style={[styles.submenu_button, styles.submenu_button_left, route.name === "MyData" ? styles.submenu_active_button : {}]} onPress={() => navigation.navigate("MyData")}><Text style={styles.submenu_button_text}>Moje{"\n"}dane</Text></TouchableHighlight>
        <TouchableHighlight style={[styles.submenu_button, route.name === "MyAvatar" ? styles.submenu_active_button : {}]}><Text style={styles.submenu_button_text}  onPress={() => navigation.navigate("MyAvatar")}>Mój{"\n"}awatar</Text></TouchableHighlight>
        <TouchableHighlight style={[styles.submenu_button,  styles.submenu_button_right]}><Text style={styles.submenu_button_text}>Moja{"\n"}rodzina</Text></TouchableHighlight>
      </View>
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
  submenu_container: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  submenu_button: {
    padding: 5,
    backgroundColor: colors.darkGray,
    borderRadius: 2,
    borderColor: colors.likeBlack,
    borderWidth: 1,
    marginHorizontal: 5,
    width: ScreenWidth * 0.3,
    height: 50,
    opacity: 0.3,
  },
  submenu_button_text: {
    textAlign: "center",
  },
  submenu_button_left: {
    borderBottomLeftRadius: 15,
  },
  submenu_button_right: {
    borderBottomRightRadius: 15,
  },
  submenu_active_button:{
    opacity: 1,
  }
});
export default MyAccountTemplate;
