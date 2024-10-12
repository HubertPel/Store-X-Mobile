import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../assets/colors";

const CenterButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style ?? {}]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.darkestGray,
    paddingVertical: 7.5,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.darkestGray,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
export default CenterButton;
