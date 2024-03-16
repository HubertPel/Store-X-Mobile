import React from "react";
import { Text, View } from "react-native";
import styles from "../Login/LoginScreen.styles";
import DefaultInput from "../../Components/Inputs/DefaultInput";
import DefaultButton from "../../Components/Buttons/DefaultButton";
import TextButton from "../../Components/Buttons/TextButton";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from "@react-navigation/native";

const RemindPasswordScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.login_container}>
      <View style={styles.form_box}>
        <Text style={styles.form_title}>ZAPOMNIAŁEM HASŁA</Text>
        <DefaultInput text={"E-mail (login)"} />
        <View style={styles.space_view}></View>
        <DefaultButton text={"RESETUJ HASŁO"} />
      </View>

      <View style={styles.register_button_box}>
          <TextButton
              text={"POWRÓT DO LOGOWANIA"}
              icon={"arrow-left-circle"}
              iconFamily={"Feather"}
              iconPos={"left"}
              onClick={() => navigation.navigate("Login")}
          />
      </View>
    </View>
  );
};

export default RemindPasswordScreen;
