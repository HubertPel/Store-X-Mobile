import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import ErrorContext from "../../Contexts/ErrorContext";
import { ScreenHeight, ScreenWidth } from "@rneui/base";
import DefaultButton from "../Buttons/DefaultButton";

const ErrorModal = () => {
  const { showErrorModal, setShowErrorModal, errorModalMessage } =
    useContext(ErrorContext);

  const showMessage = () => {
    let view = [];

    if (errorModalMessage) {
      errorModalMessage.forEach((item, index) => {
        view.push(<Text key={"error-text-" + index}>{item}</Text>);
      });
    }

    return view;
  };

  return (
    <View
      style={[styles.mainView, { display: showErrorModal ? "flex" : "none" }]}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalText}>{showMessage()}</View>
        <DefaultButton
          text={"Zamknij"}
          onPress={() => setShowErrorModal(false)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#000000cc",
    position: "absolute",
    height: ScreenHeight * 1.1,
    width: ScreenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    width: ScreenWidth * 0.8,
    padding: 10,
  },
  modalText: {
    marginBottom: 10,
  },
});
export default ErrorModal;
