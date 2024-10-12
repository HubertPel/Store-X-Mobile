import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./LoginScreen.styles";
import DefaultInput from "../../Components/Inputs/DefaultInput";
import DefaultButton from "../../Components/Buttons/DefaultButton";
import TextButton from "../../Components/Buttons/TextButton";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import LoginUser from "../../Hooks/LoginUser";
import NoLoggedTemplate from "../../Components/Templates/NoLoggedTemplate";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { login } = LoginUser();
  const [loginField, setLoginField] = useState("hubert.pelechaty@test.pl");
  const [userPassword, setUserPassword] = useState("123456");

  const loginUser = () => {
    let loginData = {
      login: loginField,
      password: userPassword,
    };
    login(loginData);
  };

  return (
    <NoLoggedTemplate>
      <View style={styles.login_container}>
        <View style={styles.form_box}>
          <Text style={styles.form_title}>LOGOWANIE</Text>
          <DefaultInput
            text={"E-mail (login)"}
            onChangeText={(text) => setLoginField(text)}
            value={loginField}
          />
          <View style={styles.space_view}></View>
          <DefaultInput
            text={"Hasło"}
            onChangeText={(text) => setUserPassword(text)}
            value={userPassword}
            secureTextEntry={true}
          />
          <View style={styles.space_view}></View>
          <DefaultButton onPress={() => loginUser()} text={"ZALOGUJ SIĘ"} />
          <View style={styles.space_view}></View>
          <TextButton
            text={"ZAPOMNIAŁEM HASŁA"}
            onClick={() => navigation.navigate("Reminder")}
          />
        </View>
        {/* ikonki logowania fb itd
      <View style={styles.login_with_box}>
        <Text>ZALOGUJ KONTEM W</Text>
        <View style={styles.logos_box}>
          <Entypo name={"linkedin-with-circle"} color={"black"} size={30} />
          <Entypo name={"google--with-circle"} color={"black"} size={30} />
          <Entypo name={"facebook-with-circle"} color={"black"} size={30} />
        </View>
      </View> */}
        <View style={styles.register_button_box}>
          <TextButton
            text={"ZAREJESTRUJ SIĘ"}
            icon={"arrow-right-circle"}
            iconFamily={"Feather"}
            onClick={() => navigation.navigate("Register")}
          />
        </View>
      </View>
    </NoLoggedTemplate>
  );
};

export default LoginScreen;
