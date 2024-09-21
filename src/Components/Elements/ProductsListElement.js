import React, { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "../../assets/colors";
import DefaultCheckbox from "../Checkboxes/DefaultCheckbox";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ProductsListOption = (props) => {
  return (
    <View style={styles.list_element}>
      <View style={styles.list_element_product}>
        <Text style={[props.checked == true ? styles.crossed_text : ""]}>
          Marchew
        </Text>
      </View>
    </View>
  );
};
const ProductsListElement = () => {
  const heightValue = useRef(new Animated.Value(0)).current;
  const heightValueBox = useRef(new Animated.Value(0)).current;
  const [products, setProduct] = useState([
    { text: "Marchew" },
    { text: "Marchew" },
    { text: "Marchew" },
    { text: "Marchew" },
    { text: "Marchew" },
    { text: "Marchew" },
  ]);
  const [showed, setShowed] = useState(false);

  const slideIn = () => {
    let height = products.length * 40 + 20;

    Animated.timing(heightValue, {
      toValue: height,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(heightValueBox, {
      toValue: height,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setShowed(true);
  };

  const slideOut = () => {
    Animated.timing(heightValueBox, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setShowed(false);
  };

  const toggleItems = () => {
    if (showed) {
      slideOut();
    } else {
      slideIn();
    }
  };

  return (
    <View style={styles.list_container}>
      <TouchableOpacity
        style={styles.head_list_container}
        onPress={() => toggleItems()}
      >
        <View style={styles.list_category_container}>
          <MaterialCommunityIcons
            name={"silverware-fork-knife"}
            color={"white"}
            size={30}
          />
        </View>
        <View style={styles.list_title_container}>
          <Text style={styles.list_title_text}>ŻYWNOŚĆ</Text>
        </View>
        <View style={styles.arrow_list_icon}>
          <MaterialIcons
            name={"keyboard-arrow-down"}
            color={colors.darkerGray}
            size={40}
          />
        </View>
      </TouchableOpacity>
      <Animated.View
        style={[styles.list_options_container, { height: heightValueBox }]}
      >
        <Animated.View style={[styles.list_options, { height: heightValue }]}>
          <View style={{ height: 10 }}></View>
          <ProductsListOption />
          <ProductsListOption />
          <ProductsListOption />
          <ProductsListOption />
          <ProductsListOption />
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  list_container: {
    paddingHorizontal: 20,
    marginTop: 10,
    zIndex: 1,
    backgroundColor: colors.backgroundColor,
  },
  list_category_container: {
    backgroundColor: colors.darkerGray,
    padding: 3,
  },
  head_list_container: {
    backgroundColor: colors.darkGray,
    flexDirection: "row",
  },
  list_title_container: {
    justifyContent: "center",
    paddingLeft: 10,
  },
  list_title_text: {
    color: colors.opacitedGray,
  },

  arrow_list_icon: {
    position: "absolute",
    right: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  list_element: {
    flexDirection: "row",
    height: 40,
  },
  list_options_container: {},
  list_options: {
    position: "absolute",
    height: 0,
    width: "100%",
  },
  list_element_checkbox: {
    flex: 0.07,
  },
  list_element_product: {
    flex: 0.53,
    paddingLeft: 10,
  },
  list_element_qty: {
    flex: 0.1,
    alignItems: "center",
  },
  list_element_unit: {
    flex: 0.2,
    alignItems: "center",
  },
  list_element_avatar: {
    flex: 0.2,
    alignItems: "center",
  },
  break_line: {
    height: 5,
    width: "100%",
    borderBottomColor: colors.darkerGray,
    borderBottomWidth: 1,
  },
  crossed_text: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});

export default ProductsListElement;
