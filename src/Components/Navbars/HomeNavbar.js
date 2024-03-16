import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScreenWidth } from "@rneui/base";
import colors from "../../assets/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const HomeNavbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navbar_container}>
      <TouchableOpacity
        style={styles.menu_container}
        onPress={() => navigation.toggleDrawer()}
      >
        <Feather name={"menu"} color={"black"} size={30} />
      </TouchableOpacity>
      <View style={styles.notifications_container}>
        <Text style={styles.notifications_text}>POWIADOMIENIA (3)</Text>
      </View>
      <View style={styles.avatar_container}>
        <FontAwesome name={"user-circle-o"} color={"black"} size={30} />
        <Text>Hubert</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar_container: {
    width: ScreenWidth,
    paddingTop: 50,
    paddingHorizontal: 5,
    backgroundColor: "white",
    flexDirection: "row",
    paddingBottom: 10,
  },
  avatar_container: {
    alignItems: "center",
    flex: 0.2,
  },
  notifications_container: {
    justifyContent: "flex-end",
    flex: 0.6,
    alignItems: "center",
  },
  notifications_text: {
    fontWeight: "bold",
  },
  menu_container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.2,
  },
});
export default HomeNavbar;
