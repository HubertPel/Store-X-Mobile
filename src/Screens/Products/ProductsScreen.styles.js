import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import { ScreenHeight } from "@rneui/base";

const styles = StyleSheet.create({
  title_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  lists_container: {
    marginTop: 10,
    zIndex: 1,
  },
});

export default styles;
