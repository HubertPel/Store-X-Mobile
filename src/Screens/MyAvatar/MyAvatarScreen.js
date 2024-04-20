import React from "react";
import { Text, View } from "react-native";
import styles from "./MyAvatarScreen.styles";
import HomeTemplate from "../../Components/Templates/HomeTemplate";
import DefaultInput from "../../Components/Inputs/DefaultInput";
import DefaultButton from "../../Components/Buttons/DefaultButton";
import MyAccountTemplate from "../../Components/Templates/MyAccountTemplate";

const MyAvatarScreen = () => {
  return (
    <MyAccountTemplate>
        <Text>Avatary</Text>
    </MyAccountTemplate>
  );
};

export default MyAvatarScreen;
