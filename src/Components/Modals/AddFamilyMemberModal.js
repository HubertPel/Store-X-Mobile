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

const AddFamilyMemberModal = (props) => {
    console.log(props);
  return (
    <View
      style={[styles.modal_background, props.show ? {} : { display: "none" }]}
    >
      <View style={styles.modal_container}>
        <View style={styles.modal_title}>
          <Text>DODAJ CZŁONKA RODZINY</Text>
          <TouchableOpacity style={styles.modal_x_button} onPress={props.closePopup}> 
            <Feather name={"x"} color={"black"} size={40} />
          </TouchableOpacity>
        </View>
        <View style={styles.modal_content}>
          <View style={styles.add_new_product_button_container}>
            <ButtonWithIcon
              text={"DODAJ NOWY PRODUKT"}
              iconPos={"right"}
              iconFamily={"Feather"}
              icon={"plus"}
            />
          </View>
          <View style={styles.divider_text_container}>
            <Text>LUB</Text>
          </View>
          <View style={styles.search_container}>
            </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    modal_background: {
        position: "absolute",
        width: ScreenWidth,
        height: ScreenHeight * 1.5,
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
});

export default AddFamilyMemberModal;
