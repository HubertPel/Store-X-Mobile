import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./RegisterScreen.styles";
import DefaultInput from "../../Components/Inputs/DefaultInput";
import DefaultButton from "../../Components/Buttons/DefaultButton";
import TextButton from "../../Components/Buttons/TextButton";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import CreateUser from "../../Hooks/CreateUser";
const RegisterScreeen = () => {
  const navigation = useNavigation();
  const { addUser } = CreateUser();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const finalizeRegister = async () => {
    const newUserData = {
      name: name,
      email: email,
      password: password,
      repeatPassword: repeatPassword,
    };

    let result = await addUser(newUserData);
    if (result) {
      setName("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
    }
  };

  return (
    <ScrollView>
      <View style={styles.login_container}>
        <View style={styles.form_box}>
          <Text style={styles.form_title}>REJESTRACJA</Text>
          <DefaultInput
            text={"Imię"}
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <View style={styles.space_view}></View>
          <DefaultInput
            text={"E-mail (login)"}
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType={"email-address"}
          />
          <View style={styles.space_view}></View>
          <DefaultInput
            text={"Hasło"}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <View style={styles.space_view}></View>
          <DefaultInput
            text={"Powtórz Hasło"}
            onChangeText={(text) => setRepeatPassword(text)}
            value={repeatPassword}
            secureTextEntry={true}
          />
          <View style={styles.space_view}></View>
          <DefaultButton
            text={"ZAŁÓŻ NOWE KONTO"}
            onPress={() => finalizeRegister()}
          />
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
