import React from "react";
import { Text, View } from "react-native";
import styles from "./LoginScreen.styles";
import DefaultInput from "../../Components/Inputs/DefaultInput";
import DefaultButton from "../../Components/Buttons/DefaultButton";
import TextButton from "../../Components/Buttons/TextButton";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.login_container}>
      <View style={styles.form_box}>
        <Text style={styles.form_title}>LOGOWANIE</Text>
        <DefaultInput text={"E-mail (login)"} />
        <View style={styles.space_view}></View>
        <DefaultInput text={"Hasło"} />
        <View style={styles.space_view}></View>
        <DefaultButton onPress={() => navigation.navigate("ShoppingList")} text={"ZALOGUJ SIĘ"} />
        <View style={styles.space_view}></View>
        <TextButton
          text={"ZAPOMNIAŁEM HASŁA"}
          onClick={() => navigation.navigate("Reminder")}
        />
      </View>
      <View style={styles.login_with_box}>
        <Text>ZALOGUJ KONTEM W</Text>
        <View style={styles.logos_box}>
          <Entypo name={"linkedin-with-circle"} color={"black"} size={30} />
          <Entypo name={"google--with-circle"} color={"black"} size={30} />
          <Entypo name={"facebook-with-circle"} color={"black"} size={30} />
        </View>
      </View>
      <View style={styles.register_button_box}>
        <TextButton
          text={"ZAREJESTRUJ SIĘ"}
          icon={"arrow-right-circle"}
          iconFamily={"Feather"}
          onClick={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
