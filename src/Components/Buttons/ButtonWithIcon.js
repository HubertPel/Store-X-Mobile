import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../assets/colors";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const ButtonWithIcon = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      {props.iconPos == "left" && (
        <Text>
          {props.iconFamily == "Feather" && (
            <Feather name={props.icon} color={"black"} size={14} />
          )}
          {props.iconFamily == "SimpleLineIcons" && (
            <SimpleLineIcons name={props.icon} color={"black"} size={14} />
          )}
          {props.iconFamily && props.icon && <> </>}
        </Text>
      )}
      <Text adjustsFontSizeToFit={true} numberOfLines={2}>
        {props.text}
      </Text>
      {props.iconPos == "right" && (
        <Text>
          {props.iconFamily == "Feather" && (
            <Feather name={props.icon} color={"black"} size={14} />
          )}
          {props.iconFamily == "SimpleLineIcons" && (
            <SimpleLineIcons name={props.icon} color={"black"} size={14} />
          )}
          {props.iconFamily && props.icon && <> </>}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: colors.darkGray,
    paddingVertical: 7.5,
    paddingRight: 30,
    paddingLeft: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.likeBlack,
  },
});

export default ButtonWithIcon;
