import React from "react";
import { Text, View } from "react-native";
import styles from "./ShoppingListScreen.styles";
import ShoppingListElement from "../../Components/Elements/ShoppingListElement";
import ShoppingListTemplate from "../../Components/Templates/ShoppingListTemplate";

const ShoppingListScreen = () => {
  return (
    <ShoppingListTemplate>
      <View style={styles.title_container}>
        <Text>Lista zakupów</Text>
        <Text>2024-07-01</Text>
      </View>
      <View style={styles.lists_container}>
        <ShoppingListElement />
        <ShoppingListElement />
      </View>
    </ShoppingListTemplate>
  );
};

export default ShoppingListScreen;
