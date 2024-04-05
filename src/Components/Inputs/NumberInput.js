import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import colors from "../../assets/colors";

const NumberInput = (props) => {
  return (
    <View style={[styles.box_style]}>
      <View style={styles.button_container}>
        <TouchableOpacity onPress={props.onPressMinus}>
          <Feather name={"minus"} color={colors.likeBlack} size={35} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text_style}>{props.text}</Text>
        <TextInput
          value={props.value}
          onChangeText={props.onChangeText}
          style={styles.input_style}
          keyboardType={"number-pad"}
        />
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity onPress={props.onPressPlus}>
          <Feather name={"plus"} color={colors.likeBlack} size={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box_style: {
    width: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input_style: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 5,
    width: 90,
    textAlign: "center",
    fontSize: 20,
  },
  text_style: {
    marginLeft: 5,
    fontSize: 12,
  },
  button_container: {
    marginTop: 25,
    paddingHorizontal: 5,
  },
});

export default NumberInput;
