import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import GameScreenCard from "../components/game/GameScreenCard";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/Title";

// -----------generate random number-------------
function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({ userNumber, setUserNumber, setGameIsOver }) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  // -------------------game over------------------------
  useEffect(() => {
    const parseCurrentGuess = parseInt(currentGuess);
    const parseUserNumber = parseInt(userNumber);
    if (parseCurrentGuess === parseUserNumber) {
      setGameIsOver(true);
    }
  }, [currentGuess, userNumber, setGameIsOver]);

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <GameScreenCard
        currentGuess={currentGuess}
        userNumber={userNumber}
        generateRandomNumber={generateRandomNumber}
        setCurrentGuess={setCurrentGuess}
        setUserNumber={setUserNumber}
        setGameIsOver={setGameIsOver}
      ></GameScreenCard>
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
});
