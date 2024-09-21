import React, { useCallback, useState } from "react";
import { Text, View } from "react-native";
import styles from "./MyDataScreen.styles";
import HomeTemplate from "../../Components/Templates/HomeTemplate";
import DefaultInput from "../../Components/Inputs/DefaultInput";
import DefaultButton from "../../Components/Buttons/DefaultButton";
import MyAccountTemplate from "../../Components/Templates/MyAccountTemplate";
import { useFocusEffect } from "@react-navigation/native";
import userData from "../../Hooks/UserData";
import UpdateUser from "../../Hooks/UpdateUser";

const MyDataScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { getUserData } = userData();
  const { updateUser } = UpdateUser();

  useFocusEffect(
    useCallback(() => {
      const getUser = async () => {
        let userData = await getUserData();
        setName(userData.name);
        setEmail(userData.email);
      };

      getUser();
    }, [])
  );

  const setUserUpdate = async () => {
    const userUpdateData = {
      name: name,
      email: email,
      password: password,
      repeatPassword: repeatPassword,
    };

    let result = updateUser(userUpdateData);
    if (result) {
      setPassword("");
      setRepeatPassword("");
    }
  };

  return (
    <MyAccountTemplate>
      <View style={styles.title_container}>
        <Text>MOJE DANE</Text>
      </View>
      <View style={styles.inputs_container}>
        <DefaultInput
          text={"Imię"}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <View style={styles.gap_view} />
        <DefaultInput
          text={"E-mail (login)"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <View style={styles.gap_view} />
        <DefaultInput
          text={"Zmień hasło"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <View style={styles.gap_view} />
        <DefaultInput
          text={"Powtórz zmienione hasło"}
          value={repeatPassword}
          onChangeText={(text) => setRepeatPassword(text)}
          secureTextEntry={true}
        />
        <View style={styles.gap_view} />
        <DefaultButton text={"ZAPISZ"} onPress={() => setUserUpdate()} />
      </View>
    </MyAccountTemplate>
  );
};

export default MyDataScreen;
