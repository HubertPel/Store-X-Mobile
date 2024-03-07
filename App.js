import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppStacks from "./src/Stacks/AppStacks";

export default function App() {
  return <AppStacks />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
