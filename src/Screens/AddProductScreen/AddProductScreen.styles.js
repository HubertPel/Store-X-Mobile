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
  add_myself: {
    display: "flex",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  center_button_styles: {
    width: 200,
  },
  divider_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: ScreenWidth * 0.05,
  },
  divider_line: {
    minHeight: 0.0001,
    minWidth: ScreenWidth * 0.39,
    borderWidth: 0.75,
    borderColor: colors.opacitedGray,
  },
  camera_container: {
    display: "flex",
    alignItems: "center",
    paddingVertical: ScreenWidth * 0.05,
  },
  camera: {
    height: 200,
    width: 200,
    backgroundColor: colors.darkerGray,
  },
  camera_gap: {
    height: 10,
  },
  camera_vertical_bars: {
    backgroundColor: "black",
    height: 50,
    width: 200,
    position: "absolute",
  },
  camera_horizontal_bars: {
    height: 100,
    width: 20,
    backgroundColor: "black",
    position: "absolute",
  },
  camera_top_bar: {
    top: 0,
    left: 0,
  },
  camera_right_bar: { top: 50, right: 0 },
  camera_bottom_bar: {
    bottom: 0,
    left: 0,
  },
  camera_left_bar: { top: 50, left: 0 },
  camera_top_left_corner: {
    position: "absolute",
    height: 20,
    width: 20,
    zIndex: 2,
    borderColor: "white",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    left: 10,
    top: 10,
  },
  camera_top_right_corner: {
    position: "absolute",
    height: 20,
    width: 20,
    zIndex: 2,
    borderColor: "white",
    borderTopWidth: 1,
    borderRightWidth: 1,
    right: 10,
    top: 10,
  },
  camera_bottom_right_corner: {
    position: "absolute",
    height: 20,
    width: 20,
    zIndex: 2,
    borderColor: "white",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    right: 10,
    bottom: 10,
  },
  camera_bottom_left_corner: {
    position: "absolute",
    height: 20,
    width: 20,
    zIndex: 2,
    borderColor: "white",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    left: 10,
    bottom: 10,
  },
  camera_view: {
    height: 200,
    width: 200,
  },
  camera_opacited_bars: {
    opacity: 0.5,
  },
});

export default styles;
