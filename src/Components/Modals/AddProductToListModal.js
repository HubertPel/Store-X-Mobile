import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { color, ScreenHeight, ScreenWidth } from "@rneui/base";
import colors from "../../assets/colors";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";
import DefaultInput from "../Inputs/DefaultInput";
import DefaultButton from "../Buttons/DefaultButton";
import IconButton from "../Buttons/IconButton";
import Feather from "react-native-vector-icons/Feather";
import ProductRadio from "../Radios/ProductRadio";
import NumberInput from "../Inputs/NumberInput";
import { TouchableOpacity } from "react-native-gesture-handler";

const AddProductToListModal = (props) => {
  const [qty, setQty] = useState("1");
  const [products, setProducts] = useState([
    { id: 1, text: "Masło Osełka 200g", unit: "szt.", checked: false },
    { id: 2, text: "Masmix 250g", unit: "szt.", checked: false },
    { id: 3, text: "Maseczka migdałowa", unit: "szt.", checked: true },
  ]);

  const radioPressed = (newId) => {
    let productsList = [];
    if (products) {
      products.map((item, index) => {
        if (item.id == newId) {
          item.checked = true;
        } else {
          item.checked = false;
        }
        productsList.push(item);
      });

      setProducts(productsList);
    }
  };

  return (
    <View
      style={[styles.modal_background, props.show ? {} : { display: "none" }]}
    >
      <View style={styles.modal_container}>
        <View style={styles.modal_title}>
          <Text>DODAJ DO LISTY</Text>
          <TouchableOpacity style={styles.modal_x_button} onPress={props.closePopup}> 
            <Feather name={"x"} color={"black"} size={40} />
          </TouchableOpacity>
        </View>
        <View style={styles.modal_content}>
          <View style={styles.add_new_product_button_container}>
            <ButtonWithIcon
              text={"DODAJ NOWY PRODUKT"}
              iconPos={"right"}
              iconFamily={"Feather"}
              icon={"plus"}
            />
          </View>
          <View style={styles.divider_text_container}>
            <Text>LUB</Text>
          </View>
          <View style={styles.search_container}>
            <DefaultInput inputStyle={{ width: 250 }} text={"WYSZUKAJ NAZWĘ"} />

            <View style={styles.search_button_container}>
              <IconButton
                icon={<Feather name={"search"} color={"white"} size={25} />}
              />
            </View>
          </View>
          <ScrollView style={styles.radios_container}>
            {products.map((item, index) => {
              return (
                <ProductRadio
                  text={item.text + "/" + item.unit}
                  checked={item.checked}
                  key={"radio-" + index}
                  onPress={() => radioPressed(item.id)}
                />
              );
            })}
          </ScrollView>
          <View style={styles.number_input_container}>
            <NumberInput
              text={"ilość"}
              value={qty}
              onChangeText={(text) => setQty(text)}
              onPressPlus={() => {
                let newQty = parseInt(qty);
                newQty++;
                newQty = newQty.toString();
                setQty(newQty);
              }}
              onPressMinus={() => {
                let newQty = parseInt(qty);
                newQty--;
                newQty = newQty.toString();
                setQty(newQty);
              }}
            />
          </View>
          <View style={styles.submit_button_container}>
            <DefaultButton text={"Dodaj do obecnej listy"} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal_background: {
    position: "absolute",
    width: ScreenWidth,
    height: ScreenHeight * 1.5,
    zIndex: 10,
    paddingTop: 100,
    paddingHorizontal: 15,
    backgroundColor: "#000000cc",
  },
  modal_container: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  modal_title: {
    backgroundColor: colors.backgroundColor,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modal_content: {
    paddingVertical: 20,
  },
  add_new_product_button_container: {
    paddingHorizontal: 50,
  },
  divider_text_container: {
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  search_container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  search_button_container: {
    paddingTop: 20,
    paddingLeft: 5,
  },
  radios_container: {
    marginTop: 20,
    paddingHorizontal: 20,
    maxHeight: 215,
  },
  number_input_container: {
    alignItems: "center",
    paddingTop: 20,
  },
  submit_button_container: {
    paddingHorizontal: 50,
    paddingTop: 20,
  },
  modal_x_button: {
    position: "absolute",
    left: 120,
    top: -40,
  },  
});

export default AddProductToListModal;
