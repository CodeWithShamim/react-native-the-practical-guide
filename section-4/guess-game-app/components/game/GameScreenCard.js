import { View, Text, StyleSheet, Alert } from "react-native";
import { accentColor, primaryColor, whiteColor } from "../../constants/colors";
import PrimaryButton from "../PrimaryButton";
import { AntDesign } from "@expo/vector-icons";

const GameScreenCard = ({
  currentGuess,
  userNumber,
  generateRandomNumber,
  setCurrentGuess,
  setUserNumber,
  setGameIsOver,
}) => {
  // -------generate new random nmr----------
  const nextRandomNumber = (direction) => {
    let maxBoundary = 100;
    let minBoundary = 1;
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNum = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNum);
  };

  // -----------game over btn--------
  const handleGameOver = () => {
    setUserNumber("");
    setGameIsOver(true);
  };

  return (
    <>
      <Text style={styles.headTitle}>Higher or lower?</Text>
      <View style={styles.btnContainer}>
        <PrimaryButton
          bgColor={accentColor}
          onPress={nextRandomNumber.bind(this, "greater")}
        >
          <AntDesign name="plus" size={24} color="white" />
        </PrimaryButton>
        <PrimaryButton
          bgColor={accentColor}
          onPress={nextRandomNumber.bind(this, "lower")}
        >
          <AntDesign name="minus" size={24} color="white" />
        </PrimaryButton>
      </View>

      {/* -------Game over btn---------- */}
      <View style={styles.gameOverButton}>
        <PrimaryButton
          style={styles.primaryButton}
          bgColor={primaryColor}
          onPress={handleGameOver}
        >
          Game Over
        </PrimaryButton>
      </View>
    </>
  );
};

export default GameScreenCard;

const styles = StyleSheet.create({
  headTitle: {
    fontFamily: "poppins-bold",
    fontSize: 20,
    marginVertical: 20,
    fontWeight: "bold",
    color: whiteColor,
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverButton: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButton: {
    width: 330,
    paddingVertical: 10,
  },
});
