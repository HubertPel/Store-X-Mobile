import React from "react";
import HomeTemplate from "../../Components/Templates/HomeTemplate";
import { Text, View } from "react-native";
import styles from "./DeleteAccountScreen.styles";
import Feather from "react-native-vector-icons/Feather";
import TextButton from "../../Components/Buttons/TextButton";
import DefaultButton from "../../Components/Buttons/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import DeleteUser from "../../Hooks/DeleteUser";

const DeleteAccountScreen = () => {
  const navigation = useNavigation();
  const { deleteAccount } = DeleteUser();

  const doDeleteAccount = async () => {
    await deleteAccount();
  };

  return (
    <HomeTemplate>
      <View style={styles.title_box}>
        <Text style={styles.title_text}>Usuwanie konta</Text>
      </View>
      <View style={styles.icon_container}>
        <Feather name={"user-x"} color={"red"} size={65} />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.text_description}>
          Czy na pewno chcesz usunąć konto?
        </Text>
        <Text style={styles.text_description}>
          Usunięcie konta spowoduje trwałą utratę wszystkich Twoich danych.
        </Text>
        <Text style={styles.text_description}>
          Nie będzie możliwości ich odzyskania.
        </Text>
        <Text style={[styles.text_description, styles.bolder_text]}>
          Czy na pewno chcesz kontynuować?
        </Text>
      </View>
      <View style={styles.button_container}>
        <DefaultButton text={"Anuluj"} onPress={() => navigation.goBack()} />
        <DefaultButton text={"Usuń konto"} onPress={() => doDeleteAccount()} />
      </View>
    </HomeTemplate>
  );
};

export default DeleteAccountScreen;
