import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
const DefaultInput = (props) => {
  return (
    <View style={[styles.box_style, props.inputStyle]}>
      <Text style={styles.text_style}>{props.text}</Text>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.input_style}
        secureTextEntry={props.secureTextEntry ?? false}
        keyboardType={props.keyboardType ?? "default"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box_style: {
    width: 300,
  },
  input_style: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
  },
  text_style: {
    marginLeft: 5,
  },
});
export default DefaultInput;
