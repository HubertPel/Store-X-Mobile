import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { color, ScreenHeight, ScreenWidth } from "@rneui/base";
import colors from "../../assets/colors";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";
import DefaultInput from "../Inputs/DefaultInput";
import DefaultButton from "../Buttons/DefaultButton";
import IconButton from "../Buttons/IconButton";
import Feather from "react-native-vector-icons/Feather";
import ProductRadio from "../Radios/ProductRadio";
import NumberInput from "../Inputs/NumberInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AddFamilyElement from "../Elements/AddFamilyElement";

const AddFamilyMemberModal = (props) => {
  return (
    <View
      style={[styles.modal_background, props.show ? {} : { display: "none" }]}
    >
      <View style={styles.modal_container}>
        <View style={styles.modal_title}>
          <Text>DODAJ CZŁONKA RODZINY</Text>
          <TouchableOpacity
            style={styles.modal_x_button}
            onPress={props.closePopup}
          >
            <Feather name={"x"} color={"black"} size={40} />
          </TouchableOpacity>
        </View>
        <View style={styles.modal_content}>
          <View style={styles.info_container}>
            <View style={styles.info_icon_container}>
              <MaterialCommunityIcons
                name={"information-outline"}
                color={"black"}
                size={30}
              />
            </View>
            <View>
              <Text style={styles.info_text}>
                Aby dodać nowego członka rodziny, musi on / ona posiadać konto w
                systemie STORE-X
              </Text>
            </View>
          </View>

          <View style={styles.search_container}>
            <DefaultInput inputStyle={{ width: 250 }} text={"WPISZ E-MAIL"} />

            <View style={styles.search_button_container}>
              <IconButton
                icon={<Feather name={"search"} color={"white"} size={25} />}
              />
            </View>
          </View>

          <View>
            <View style={styles.finded_users_text_container}>
              <Text>ZNALEZIONO X UŻYTKOWNIKÓW</Text>
            </View>
            <View>
              <AddFamilyElement id={1} name={"JAN"} email={"jan@mail.com"} />
              <AddFamilyElement id={2} name={"JAN"} email={"jan@mail.com"} />
              <AddFamilyElement id={3} name={"JAN"} email={"jan@mail.com"} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal_container: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  modal_background: {
    position: "absolute",
    width: ScreenWidth,
    height: ScreenHeight * 1.2,
    zIndex: 10,
    paddingTop: 100,
    paddingHorizontal: 15,
    backgroundColor: "#000000cc",
  },
  modal_title: {
    backgroundColor: colors.backgroundColor,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modal_content: {
    paddingVertical: 20,
  },
  add_new_product_button_container: {
    paddingHorizontal: 50,
  },
  modal_x_button: {
    position: "absolute",
    left: 120,
    top: -40,
  },
  info_container: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
    width: "80%",
  },
  info_icon_container: {
    marginRight: 10,
  },
  info_text: {
    fontSize: 16,
  },
  search_container: {
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  search_button_container: {
    paddingTop: 20,
    paddingLeft: 5,
  },
  finded_users_text_container: {
    marginLeft: 20,
  },
});

export default AddFamilyMemberModal;
