import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScreenWidth } from "@rneui/base";
import colors from "../../assets/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../Contexts/UserContext";

const HomeNavbar = () => {
  const navigation = useNavigation();
  const { userName } = useContext(UserContext);

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
        <TouchableOpacity
          style={styles.avatar_button_container}
          onPress={() => navigation.navigate("MyData")}
        >
          <FontAwesome name={"user-circle-o"} color={"black"} size={30} />
          <Text>{userName}</Text>
        </TouchableOpacity>
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
  avatar_button_container: {
    alignItems: "center",
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
