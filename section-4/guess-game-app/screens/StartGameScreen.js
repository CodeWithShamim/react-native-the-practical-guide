import { useState } from "react";
import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {
  darkColor,
  primaryColor,
  secondaryColor,
  whiteColor,
} from "../constants/colors";

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleEnteredNumber = (pressedNumber) => {
    setEnteredNumber(pressedNumber);
  };

  const resetEnteredNumber = () => {
    setEnteredNumber(null);
  };
  const confirmEnteredNumber = () => {
    if (isNaN(enteredNumber) || enteredNumber === "" || enteredNumber <= 0) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 to 99",
        [
          {
            text: "Ask me later",
            onPress: () => console.log("Ask me later pressed"),
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    }
    // --------------------------------
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Enter Your Number</Text>
      <TextInput
        style={styles.inputContainer}
        maxLength={2}
        value={enteredNumber}
        onChangeText={handleEnteredNumber}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      ></TextInput>
      <View style={styles.btnContainer}>
        <PrimaryButton onPress={resetEnteredNumber} bgColor={"#ff1493"}>
          Reset
        </PrimaryButton>
        <PrimaryButton onPress={confirmEnteredNumber} bgColor={"#00bfff"}>
          Confirm
        </PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: darkColor,
    paddingVertical: 15,
    marginTop: 100,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { height: 0, width: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  headText: {
    color: secondaryColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "20%",
    borderRadius: 2,
    borderBottomColor: secondaryColor,
    borderBottomWidth: 1,
    marginBottom: 15,
    fontSize: 25,
    textAlign: "center",
    color: whiteColor,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
  },
});
