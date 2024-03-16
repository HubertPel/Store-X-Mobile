import React from "react";
import { Text, View } from "react-native";
import HomeTemplate from "../../Components/Templates/HomeTemplate";
import styles from "./ShoppingListScreen.styles";
import ShoppingListElement from "../../Components/Elements/ShoppingListElement";

const ShoppingListScreen = () => {
  return (
    <HomeTemplate>
      <View style={styles.title_container}>
        <Text>Lista zakupów</Text>
        <Text>2024-07-01</Text>
      </View>
      <View style={styles.lists_container}>
        <ShoppingListElement />
        <ShoppingListElement />
      </View>
      <View></View>
    </HomeTemplate>
  );
};

export default ShoppingListScreen;
