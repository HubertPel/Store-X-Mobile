import React from "react";
import { Text, View } from "react-native";
import styles from "./MyDataScreen.styles";
import HomeTemplate from "../../Components/Templates/HomeTemplate";
import DefaultInput from "../../Components/Inputs/DefaultInput";
import DefaultButton from "../../Components/Buttons/DefaultButton";
import MyAccountTemplate from "../../Components/Templates/MyAccountTemplate";

const MyDataScreen = () => {
  return (
    <MyAccountTemplate>
      <View style={styles.title_container}><Text>MOJE DANE</Text></View>
        <View style={styles.inputs_container}>
            <DefaultInput  text={"Imię"} />
            <View style={styles.gap_view} />
            <DefaultInput  text={"E-mail (login)"} />
            <View style={styles.gap_view} />
            <DefaultInput  text={"Numer telefonu"} />
            <View style={styles.gap_view} />
            <DefaultInput  text={"Zmień hasło"} />
            <View style={styles.gap_view} />
            <DefaultInput  text={"Powtórz zmienione hasło"} />
            <View style={styles.gap_view} />
            <DefaultButton text={"ZAPISZ"}/>
        </View>
    </MyAccountTemplate>
  );
};

export default MyDataScreen;
