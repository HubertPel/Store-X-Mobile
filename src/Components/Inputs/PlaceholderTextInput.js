import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import colors from "../../assets/colors";

const PlaceholderTextInput = (props) => {
    return (
        <View style={[styles.box_style, props.inputStyle]}>
            <TextInput
                value={props.value}
                onChangeText={props.onChangeText}
                style={styles.input_style}
                secureTextEntry={props.secureTextEntry ?? false}
                keyboardType={props.keyboardType ?? "default"}
                placeholder={props.placeholder ?? ''}
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

export default PlaceholderTextInput;
