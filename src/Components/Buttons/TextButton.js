import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../assets/colors";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const TextButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onClick}>
      <Text style={props.styles ?? {}}>
        {props.iconPos == "left" && (
          <>
            {props.iconFamily == "Feather" && (
              <Feather
                name={props.icon}
                color={props.iconColor ?? "black"}
                size={14}
              />
            )}
            {props.iconFamily == "SimpleLineIcons" && (
              <SimpleLineIcons
                name={props.icon}
                color={props.iconColor ?? "black"}
                size={14}
              />
            )}
            {props.iconFamily && props.icon && <> </>}
          </>
        )}

        {props.text}

        {(props.iconPos == "right" || !props.iconPos) && (
          <>
            {props.iconFamily && props.icon && <> </>}
            {props.iconFamily == "Feather" && (
              <Feather
                name={props.icon}
                color={props.iconColor ?? "black"}
                size={14}
              />
            )}
            {props.iconFamily == "SimpleLineIcons" && (
              <SimpleLineIcons
                name={props.icon}
                color={props.iconColor ?? "black"}
                size={14}
              />
            )}
          </>
        )}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 7.5,
    paddingHorizontal: 30,
  },
});

export default TextButton;
