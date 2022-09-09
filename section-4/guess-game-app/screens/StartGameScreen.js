import { Text, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { secondaryColor } from "../constants/colors";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: secondaryColor }}>StartGameScreen</Text>
      <View>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
