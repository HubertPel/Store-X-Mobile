import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import { ScreenHeight, ScreenWidth } from "@rneui/base";

const styles = StyleSheet.create({
    inputs_container: {
        justifyContent: "center",
        width: ScreenWidth,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
    },
    gap_view: {
        minHeight: 20,
    }
});

export default styles;
