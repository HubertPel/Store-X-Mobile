import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppStacks from "./src/Stacks/AppStacks";
import { ApiProvider } from "./src/Contexts/ApiContext";
import { ErrorProvider } from "./src/Contexts/ErrorContext";
import { UserProvider } from "./src/Contexts/UserContext";

export default function App() {
  return (
    <ApiProvider>
      <ErrorProvider>
        <UserProvider>
          <AppStacks />
        </UserProvider>
      </ErrorProvider>
    </ApiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
