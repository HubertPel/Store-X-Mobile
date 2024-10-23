import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ShoppingListScreen from "../Screens/ShoppingList/ShoppingListScreen";
import DefaultDrawer from "../Components/Drawers/DefaultDrawer";
import MyDataScreen from "../Screens/MyDataScreen/MyDataScreen";
import MyAvatarScreen from "../Screens/MyAvatar/MyAvatarScreen";
import MyFamilyScreen from "../Screens/MyFamily/MyFamilyScreen";
import ProductsScreen from "../Screens/Products/ProductsScreen";
import DeleteAccountScreen from "../Screens/DeleteAccount/DeleteAccountScreen";
import AddProductScreen from "../Screens/AddProductScreen/AddProductScreen";
import AddProductFormScreen from "../Screens/AddProductForm/AddProductFormScreen";

const AuthStacks = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName={"ShoppingList"}
      backBehavior={"history"}
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        drawerStyle: {
          backgroundColor: "transparent",
        },
      }}
      drawerContent={(props) => <DefaultDrawer {...props} />}
    >
      <>
        <Drawer.Screen
          name={"ShoppingList"}
          option={{
            title: "ShoppingList",
            gestureEnabled: false,
          }}
        >
          {(props) => <ShoppingListScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen
          name={"MyData"}
          option={{
            title: "MyData",
            gestureEnabled: false,
          }}
        >
          {(props) => <MyDataScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen
          name={"MyAvatar"}
          option={{
            title: "MyAvatar",
            gestureEnabled: false,
          }}
        >
          {(props) => <MyAvatarScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen
          name={"MyFamily"}
          option={{
            title: "MyFamily",
            gestureEnabled: false,
          }}
        >
          {(props) => <MyFamilyScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen
          name={"Products"}
          option={{
            title: "Products",
            gestureEnabled: false,
          }}
        >
          {(props) => <ProductsScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen
          name={"DeleteAccount"}
          option={{
            title: "DeleteAccount",
            gestureEnabled: false,
          }}
        >
          {(props) => <DeleteAccountScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen
          name={"AddProduct"}
          option={{
            title: "AddProduct",
            gestureEnabled: false,
          }}
        >
          {(props) => <AddProductScreen {...props} />}
        </Drawer.Screen>
          <Drawer.Screen
              name={"AddProductForm"}
              option={{
                  title: "AddProductForm",
                  gestureEnabled: false,
              }}
          >
              {(props) => <AddProductFormScreen {...props} />}
          </Drawer.Screen>
      </>
    </Drawer.Navigator>
  );
};

export default AuthStacks;
