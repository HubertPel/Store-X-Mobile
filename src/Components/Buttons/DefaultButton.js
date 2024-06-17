import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../assets/colors";

const DefaultButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.darkGray,
    paddingVertical: 7.5,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.likeBlack,
  },
});
export default DefaultButton;
