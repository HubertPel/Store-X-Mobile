import React, { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../assets/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ShoppingListOption = () => {
  return (
    <View style={styles.list_element}>
      <View></View>
      <View>
        <Text>Marchew</Text>
      </View>
      <View>
        <Text>6</Text>
      </View>
      <View>
        <Text>szt.</Text>
      </View>
      <View></View>
    </View>
  );
};

const ShoppingListElement = () => {
  const heightValue = useRef(new Animated.Value(0)).current;
  const heightValueBox = useRef(new Animated.Value(0)).current;
  const [products, setProduct] = useState([
    { text: "Marchew", unit: "szt.", qty: 6 },
    { text: "Marchew", unit: "szt.", qty: 6 },
    { text: "Marchew", unit: "szt.", qty: 6 },
    { text: "Marchew", unit: "szt.", qty: 6 },
    { text: "Marchew", unit: "szt.", qty: 6 },
  ]);
  const [showed, setShowed] = useState(false);

  const slideIn = () => {
    let height = products.length * 30;
    Animated.timing(heightValue, {
      toValue: height, // Nowa wartość wysokości
      duration: 500,
      useNativeDriver: false, // Ustawienie na false, ponieważ nie wszystkie właściwości można animować z użyciem native driver
    }).start();
    Animated.timing(heightValueBox, {
      toValue: height, // Nowa wartość wysokości
      duration: 500,
      useNativeDriver: false, // Ustawienie na false, ponieważ nie wszystkie właściwości można animować z użyciem native driver
    }).start();
    setShowed(true);
  };

  const slideOut = () => {
    Animated.timing(heightValue, {
      toValue: 0, // Nowa wartość wysokości
      duration: 500,
      useNativeDriver: false, // Ustawienie na false, ponieważ nie wszystkie właściwości można animować z użyciem native driver
    }).start();
    Animated.timing(heightValueBox, {
      toValue: 0, // Nowa wartość wysokości
      duration: 500,
      useNativeDriver: false, // Ustawienie na false, ponieważ nie wszystkie właściwości można animować z użyciem native driver
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
      <Animated.View style={{ height: heightValueBox }}>
        <Animated.View style={[styles.list_options, { height: heightValue }]}>
          <ShoppingListOption />
          <ShoppingListOption />
          <ShoppingListOption />
          <ShoppingListOption />
          <ShoppingListOption />
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
  },
  list_options: {
    position: "absolute",
    height: 0,
    backgroundColor: "red",
    width: "100%",
  },
});

export default ShoppingListElement;
