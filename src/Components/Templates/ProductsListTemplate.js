import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import HomeNavbar from "../Navbars/HomeNavbar";
import AddProductToListModal from "../Modals/AddProductToListModal";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";
import colors from "../../assets/colors";
import { ScreenWidth } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const ProductsListTemplate = ({ ...props }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HomeNavbar />

      <ScrollView style={styles.scroll_view_container}>
        {props.children}
      </ScrollView>
      <View style={styles.buttons_box}>
        <View style={styles.button_container}>
          <ButtonWithIcon
            text={"Dodaj nowy produkt"}
            iconPos={"right"}
            iconFamily={"Feather"}
            icon={"plus"}
            onPress={() => navigation.navigate("AddProduct")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  scroll_view_container: {
    flex: 10,
  },
  buttons_box: {
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  gap_between_buttons: {
    width: ScreenWidth * 0.05,
  },
});

export default ProductsListTemplate;
