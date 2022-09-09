import { View, StyleSheet, TextInput, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { primaryColor, secondaryColor } from "../constants/colors";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Enter Your Number</Text>
      <TextInput
        style={styles.inputContainer}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      ></TextInput>
      <View style={styles.btnContainer}>
        <PrimaryButton bgColor={"#ff1493"}>Reset</PrimaryButton>
        <PrimaryButton bgColor={"#00bfff"}>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: primaryColor,
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
    width: "25%",
    borderRadius: 2,
    borderBottomColor: secondaryColor,
    borderBottomWidth: 1,
    marginBottom: 15,
    fontSize: 25,
    color: secondaryColor,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
  },
});
