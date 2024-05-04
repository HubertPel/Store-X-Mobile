import React, { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../../assets/colors";

const FamilyMemberElement = (props) => {
  
  return (
    <View style={styles.member_container}>
        <View style={styles.avatar_container}><FontAwesome name={"user-circle-o"} color={"black"} size={40} /></View>
        <View style={styles.name_container}><Text>{props.name}{props.you === true ? <Text> (TY)</Text> : ''}</Text></View>
        <View style={styles.delete_container}>{props.you === false && (<TouchableOpacity><FontAwesome name={"trash-o"} color={"gray"} size={30} /></TouchableOpacity>)}</View>
    </View>
  );
};

const styles = StyleSheet.create({
    member_container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        height: 80,
        borderBottomColor: colors.opacitedBlack,
        borderBottomWidth: 1,
    },
    avatar_container: {
        flex: 0.2,
    },
    name_container: {
        flex: 0.6,
    },
    delete_container:{
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default FamilyMemberElement;
