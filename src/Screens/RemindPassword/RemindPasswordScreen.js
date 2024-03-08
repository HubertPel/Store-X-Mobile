import React from "react";
import { Text, View } from "react-native";
import styles from "../Login/LoginScreen.styles";
import DefaultInput from "../../Components/Inputs/DefaultInput";
import DefaultButton from "../../Components/Buttons/DefaultButton";
import TextButton from "../../Components/Buttons/TextButton";
import Entypo from "react-native-vector-icons/Entypo";

const RemindPasswordScreen = () => {
  return (
    <View style={styles.login_container}>
      <View style={styles.form_box}>
        <Text style={styles.form_title}>ZAPOMNIAŁEM HASŁA</Text>
        <DefaultInput text={"E-mail (login)"} />
        <View style={styles.space_view}></View>
        <DefaultInput text={"Hasło"} />
        <View style={styles.space_view}></View>
        <DefaultButton text={"ZALOGUJ SIĘ"} />
        <View style={styles.space_view}></View>
        <TextButton text={"ZAPOMNIAŁEM HASŁA"} />
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

export default RemindPasswordScreen;
