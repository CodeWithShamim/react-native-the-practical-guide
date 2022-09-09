import { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { accentColor, primaryColor, whiteColor } from "../constants/colors";

// -----------generate random number-------------
function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({ userNumber, setUserNumber }) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

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
  };

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Text style={styles.headTitle}>Higher or lower?</Text>

      <View style={styles.btnContainer}>
        <PrimaryButton
          bgColor={accentColor}
          onPress={nextRandomNumber.bind(this, "greater")}
        >
          +
        </PrimaryButton>
        <PrimaryButton
          bgColor={accentColor}
          onPress={nextRandomNumber.bind(this, "lower")}
        >
          -
        </PrimaryButton>
      </View>

      {/* -------Game over btn---------- */}
      <View style={styles.gameOverButton}>
        <PrimaryButton bgColor={primaryColor} onPress={handleGameOver}>
          Game Over
        </PrimaryButton>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    marginTop: 80,
    marginHorizontal: 15,
  },
  headTitle: {
    fontSize: 20,
    marginVertical: 30,
    fontWeight: "bold",
    color: whiteColor,
    letterSpacing: 2,
    textTransform: "uppercase",
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
  },
});
