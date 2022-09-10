import { Text, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { accentColor } from "../constants/colors";

const EndGameScreen = ({ setUserNumber, setGameIsOver }) => {
  const hanldeStartGameAgain = () => {
    setUserNumber("");
    setGameIsOver(false);
  };

  return (
    <View style={styles.container}>
      <Text>EndGameScreen</Text>
      <View style={styles.btnContainer}>
        <PrimaryButton bgColor={accentColor} onPress={hanldeStartGameAgain}>
          Start Again
        </PrimaryButton>
      </View>
    </View>
  );
};

export default EndGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    width: "100%",
    alignItems: "center",
  },
});
