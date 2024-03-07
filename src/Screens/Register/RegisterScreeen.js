import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./RegisterScreen.styles";
import DefaultInput from "../../Components/Inputs/DefaultInput";
import DefaultButton from "../../Components/Buttons/DefaultButton";
import TextButton from "../../Components/Buttons/TextButton";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
const RegisterScreeen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.login_container}>
        <View style={styles.form_box}>
          <Text style={styles.form_title}>REJESTRACJA</Text>
          <DefaultInput text={"Imię"} />
          <View style={styles.space_view}></View>
          <DefaultInput text={"E-mail (login)"} />
          <View style={styles.space_view}></View>
          <DefaultInput text={"Hasło"} />
          <View style={styles.space_view}></View>
          <DefaultInput text={"Powtórz Hasło"} />
          <View style={styles.space_view}></View>
          <DefaultInput text={"Numer telefonu"} />
          <View style={styles.space_view}></View>
          <DefaultButton text={"ZAŁÓŻ NOWE KONTO"} />
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
            text={"POWRÓT DO LOGOWANIA"}
            icon={"arrow-left-circle"}
            iconFamily={"Feather"}
            iconPos={"left"}
            onClick={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreeen;
