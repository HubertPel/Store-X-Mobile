import React, { useState } from "react";
import ProductsListTemplate from "../../Components/Templates/ProductsListTemplate";
import { Text, View } from "react-native";
import styles from "./AddProductScreen.styles";
import ProductsListElement from "../../Components/Elements/ProductsListElement";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "../../assets/colors";
import CenterButton from "../../Components/Buttons/CenterButton";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeTemplate from "../../Components/Templates/HomeTemplate";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import DefaultInput from "../../Components/Inputs/DefaultInput";
import IconButton from "../../Components/Buttons/IconButton";
import PlaceholderTextInput from "../../Components/Inputs/PlaceholderTextInput";
import Feather from "react-native-vector-icons/Feather";
import {useNavigation} from "@react-navigation/native";

const AddProductScreen = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [barcodeData, setBarcodeData] = useState(null);
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setBarcodeData(data);
    alert(`Kod kreskowy zeskanowany! Dane: ${data}`);
  };

  const navigation = useNavigation()
;
  return (
    <HomeTemplate>
      <View style={styles.title_container}>
        <Text>PRODUKTY</Text>
        <MaterialIcons name={"arrow-right"} color={colors.darkGray} size={20} />
        <Text>DODAJ PRODUKT</Text>
      </View>
      <View style={styles.add_myself}>
        <CenterButton
          text={"DODAJ RĘCZNIE"}
          style={styles.center_button_styles}
          onPress={() => navigation.navigate("AddProductForm")}
        />
      </View>
      <View style={styles.divider_container}>
        <View style={styles.divider_line}></View>
        <View>
          <Text>LUB</Text>
        </View>
        <View style={styles.divider_line}></View>
      </View>
      <View style={styles.camera_container}>
        <Text>
          SKANUJ KOD PRODUKTU
          <MaterialCommunityIcons name={"barcode"} color={"black"} size={25} />
        </Text>
        <View style={styles.camera_gap} />
        <View style={styles.camera}>
          <View
            style={[styles.camera_top_bar, styles.camera_vertical_bars]}
          ></View>
          <View
            style={[styles.camera_right_bar, styles.camera_horizontal_bars]}
          ></View>
          <View
            style={[styles.camera_bottom_bar, styles.camera_vertical_bars]}
          ></View>
          <View
            style={[styles.camera_left_bar, styles.camera_horizontal_bars]}
          ></View>
          {showCamera && (
            <CameraView
              style={styles.camera_view}
              facing={"back"}
              onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
              barcodeScannerSettings={{
                barcodeTypes: ["ean8", "ean13", "qr"],
              }}
            ></CameraView>
          )}
          <View
            style={[
              styles.camera_top_bar,
              styles.camera_vertical_bars,
              styles.camera_opacited_bars,
            ]}
          ></View>
          <View
            style={[
              styles.camera_right_bar,
              styles.camera_horizontal_bars,
              styles.camera_opacited_bars,
            ]}
          ></View>
          <View
            style={[
              styles.camera_bottom_bar,
              styles.camera_vertical_bars,
              styles.camera_opacited_bars,
            ]}
          ></View>
          <View
            style={[
              styles.camera_left_bar,
              styles.camera_horizontal_bars,
              styles.camera_opacited_bars,
            ]}
          ></View>
          <View style={styles.camera_top_left_corner}></View>
          <View style={styles.camera_top_right_corner}></View>
          <View style={styles.camera_bottom_right_corner}></View>
          <View style={styles.camera_bottom_left_corner}></View>
        </View>
        <View style={styles.camera_gap} />
        {!showCamera && (
          <CenterButton
            text={"SKANUJ"}
            style={styles.center_button_styles}
            onPress={() => setShowCamera(true)}
          />
        )}
        {(!scanned && showCamera) && (
          <CenterButton
            text={"SKANOWANIE"}
            style={styles.center_button_styles}
          />
        )}
        {(scanned && showCamera)  && (
          <CenterButton
            text={"SKANUJ NOWY"}
            style={styles.center_button_styles}
            onPress={() => setScanned(false)}
          />
        )}
      </View>
      <View style={styles.divider_container}>
        <View style={styles.divider_line}></View>
        <View>
          <Text>LUB</Text>
        </View>
        <View style={styles.divider_line}></View>
      </View>
        <View style={styles.search_container}>
            <PlaceholderTextInput inputStyle={styles.search_input} placeholder={"wyszukaj w internecie..."}/>
            <IconButton icon={<Feather name={"search"} color={"white"} size={25} />}/>
        </View>
    </HomeTemplate>

  );
};

export default AddProductScreen;
