import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DefaultCheckbox from "../Checkboxes/DefaultCheckbox";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../../assets/colors";

const AddFamilyElement = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <DefaultCheckbox />
      </View>
      <View>
        <Text>{props.name}</Text>
      </View>
      <View>
        <Text>{props.email}</Text>
      </View>
      <View>
        <FontAwesome name={"user-circle-o"} color={"black"} size={40} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
});

export default AddFamilyElement;
