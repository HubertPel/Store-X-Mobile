import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import colors from "../../assets/colors";

const DefaultCheckbox = (props) => {
  const [checked, setChecked] = useState(props.checked);
  const checkCheckbox = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  return (
    <TouchableOpacity
      style={styles.checkbox_container}
      onPress={() => checkCheckbox()}
    >
      {checked && <View style={styles.checked_checkbox}></View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox_container: {
    backgroundColor: "white",
    borderRadius: 2,
    minHeight: 20,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: colors.likeBlack,
    justifyContent: "center",
    alignItems: "center",
  },
  checked_checkbox: {
    minWidth: 15,
    minHeight: 15,
    backgroundColor: colors.likeBlack,
    borderRadius: 2,
  },
});
export default DefaultCheckbox;
