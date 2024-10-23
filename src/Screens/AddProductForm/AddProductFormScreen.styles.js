import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import { ScreenWidth } from "@rneui/base";

const styles = StyleSheet.create({
    title_container: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        paddingHorizontal: ScreenWidth * 0.05,
        marginTop: 10,
    },
    form_container: {
        paddingHorizontal: ScreenWidth * 0.5,
        marginTop: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    form_input: {
        marginBottom: 10,
    },
    form_input_number: {
        width: 225,
    },
    form_button_container: {
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    form_button: {
        width: 300,
    },
    price_history_container: {

    }
});

export default styles;
