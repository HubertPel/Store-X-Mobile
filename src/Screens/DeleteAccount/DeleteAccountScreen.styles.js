import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import { ScreenWidth } from "@rneui/base";

const styles = StyleSheet.create({
  title_box: {
    paddingTop: 20,
    width: ScreenWidth,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  title_text: {
    fontSize: 20,
  },
  icon_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  text_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text_description: {
    fontSize: 15,
    marginTop: 15,
    textAlign: "center",
  },
  button_container: {
    marginTop: 20,
    paddingHorizontal: ScreenWidth * 0.1,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  bolder_text: {
    fontWeight: "bold",
  },
});

export default styles;
