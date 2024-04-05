import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../assets/colors";

const IconButton = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>{props.icon}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.likeBlack,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    height: 40,
    aspectRatio: 1,
  },
});

export default IconButton;
