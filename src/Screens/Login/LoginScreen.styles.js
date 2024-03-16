import { StyleSheet } from "react-native";
import colors from "../../assets/colors";

const styles = StyleSheet.create({
  login_container: {
    paddingTop: 125,
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
    height: "100%",
  },
  form_box: {
    alignItems: "center",
  },
  form_title: {
    marginBottom: 50,
  },
  space_view: {
    height: 20,
  },
  login_with_box: {
    width: "100%",
    backgroundColor: colors.darkGray,
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 100,
  },
  logos_box: {
    marginTop: 10,
    width: 130,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "space-between",
  },
  register_button_box: {
    width: "100%",
    marginTop: 380,
    alignItems: "center",
  },
});

export default styles;
