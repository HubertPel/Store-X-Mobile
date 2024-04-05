import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import HomeNavbar from "../Navbars/HomeNavbar";
import colors from "../../assets/colors";
import DefaultButton from "../Buttons/DefaultButton";
import { ScreenWidth } from "@rneui/base";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";
import AddProductToListModal from "../Modals/AddProductToListModal";

const ShoppingListTemplate = (props) => {
  const [showAddProductToListModal, setShowAddProductToListModal] =
    useState(false);
  console.log(showAddProductToListModal);

  return (
    <View style={styles.container}>
      <HomeNavbar />
      <AddProductToListModal show={showAddProductToListModal} />
      <ScrollView style={styles.scroll_view_container}>
        {props.children}
      </ScrollView>
      <View style={styles.buttons_box}>
        <View style={styles.button_container}>
          <ButtonWithIcon
            text={"Dodaj do tej listy zakupowej"}
            iconPos={"left"}
            iconFamily={"Feather"}
            icon={"plus"}
            onPress={() => setShowAddProductToListModal(true)}
          />
        </View>
        <View style={styles.gap_between_buttons} />
        <View style={styles.button_container}>
          <ButtonWithIcon
            text={"Zarchiwizuj listę i utwórz nową"}
            iconPos={"left"}
            iconFamily={"Feather"}
            icon={"plus"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  scroll_view_container: {
    flex: 10,
  },
  buttons_box: {
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button_container: {
    width: ScreenWidth * 0.45,
  },
  gap_between_buttons: {
    width: ScreenWidth * 0.05,
  },
});

export default ShoppingListTemplate;
