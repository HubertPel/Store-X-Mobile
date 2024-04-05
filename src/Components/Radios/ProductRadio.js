import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../assets/colors";

const ProductRadio = (props) => {
  return (
    <View style={styles.radio_container}>
      <View>
        <TouchableOpacity style={styles.checkbox_item} onPress={props.onPress}>
          {props.checked ? <View style={styles.checkbox_checked_item} /> : ""}
        </TouchableOpacity>
      </View>
      <View style={styles.radio_text_container}>
        <Text>{props.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  radio_container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  checkbox_item: {
    borderWidth: 2,
    borderColor: colors.likeBlack,
    aspectRatio: 1,
    height: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox_checked_item: {
    backgroundColor: colors.likeBlack,
    height: 20,
    aspectRatio: 1,
    borderRadius: 50,
  },
  radio_text_container: {
    paddingLeft: 10,
  },
});

export default ProductRadio;
