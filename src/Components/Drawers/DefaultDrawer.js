import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextBase,
} from "react-native";
import { ScreenHeight, ScreenWidth } from "@rneui/base";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import TextButton from "../Buttons/TextButton";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const DefaultDrawer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.drawer_container}>
      <View style={styles.close_container}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Feather name={"x"} color={"black"} size={40} />
        </TouchableOpacity>
      </View>
      <View style={styles.avatar_container}>
        <FontAwesome name={"user-circle-o"} color={"black"} size={40} />
        <Text>Hubert</Text>
      </View>
      <View style={styles.menu_options}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("MyData")}>
          <Text>MOJE KONTO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("MyFamily")}>
          <Text>MOJA RODZINA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text>POWIADOMIENIA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.space}></View>
      <View style={styles.menu_options}>
        <TouchableOpacity style={styles.option}>
          <Text>LISTA ZAKUPÓW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text>HISTORIA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text>PRODUKTY</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logout_container}>
        <TextButton
          text={"WYLOGUJ SIĘ"}
          icon={"logout"}
          iconFamily={"SimpleLineIcons"}
          iconPos={"left"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawer_container: {
    width: ScreenWidth * 0.7,
    backgroundColor: "white",
    marginTop: 70,
    height: ScreenHeight * 0.9,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  close_container: {
    alignItems: "flex-end",
    padding: 10,
  },
  avatar_container: {
    justifyContent: "center",
    alignItems: "center",
  },
  menu_options: {
    marginTop: 0,
  },
  option: {
    alignItems: "center",
    marginTop: 25,
  },
  space: {
    height: 75,
  },
  logout_container: {
    marginTop: 120,
    alignItems: "center",
  },
});

export default DefaultDrawer;
