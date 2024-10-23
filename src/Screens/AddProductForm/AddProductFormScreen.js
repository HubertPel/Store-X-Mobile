import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "../../assets/colors";
import styles from "./AddProductFormScreen.styles";
import HomeTemplate from "../../Components/Templates/HomeTemplate";
import DefaultInput from "../../Components/Inputs/DefaultInput";
import NumberInput from "../../Components/Inputs/NumberInput";
import TextButton from "../../Components/Buttons/TextButton";
import CenterButton from "../../Components/Buttons/CenterButton";
import DefaultButton from "../../Components/Buttons/DefaultButton";
import Feather from "react-native-vector-icons/Feather";

const AddProductFormScreen = () => {
    return (
        <HomeTemplate>
            <View style={styles.title_container}>
                <Text>PRODUKTY</Text>
                <MaterialIcons name={"arrow-right"} color={colors.darkGray} size={20} />
                <Text>PRODUKT - INFO</Text>
            </View>
            <View style={styles.form_container}>
                <DefaultInput text={"Nazwa *"} inputStyle={styles.form_input}/>
                <DefaultInput text={"Kategoria *"} inputStyle={styles.form_input}/>
                <DefaultInput text={"Jednostki"} inputStyle={styles.form_input}/>
                <DefaultInput text={"Cena"} inputStyle={styles.form_input}/>
                <DefaultInput text={"Kod kreskowy"} inputStyle={styles.form_input}/>
                <NumberInput text={"Ilość *"} inputStyle={styles.form_input_number}/>
            </View>
            <View style={styles.form_button_container}>
                <CenterButton style={styles.form_button} text={"ZAPISZ ZMIANY"} />
            </View>

            <View style={styles.price_history_container}>
                <View style={styles.price_history_table_title}>
                    <Text>HISTORIA CEN PRODUKTÓW</Text>
                    <TouchableOpacity>
                        <Feather name={'info'} color={colors.opacitedBlack} size={20} />
                    </TouchableOpacity>
                </View>
            </View>

        </HomeTemplate>
    );
};

export default AddProductFormScreen;
