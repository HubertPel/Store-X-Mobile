import React from "react";
import { Text, View } from "react-native";
import styles from "./ProductsScreen.styles";
import ProductsListTemplate from "../../Components/Templates/ProductsListTemplate";
import ProductsListElement from "../../Components/Elements/ProductsListElement";

const ProductsScreen = () => {
  return (
    <ProductsListTemplate>
      <View style={styles.title_container}>
        <Text>PRODUKTY</Text>
      </View>
      <View style={styles.lists_container}>
        <ProductsListElement />
        <ProductsListElement />
        <ProductsListElement />
        <ProductsListElement />
      </View>
    </ProductsListTemplate>
  );
};

export default ProductsScreen;
