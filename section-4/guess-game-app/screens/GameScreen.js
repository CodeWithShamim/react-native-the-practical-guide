import { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Pressable } from "react-native";
import GameScreenCard from "../components/game/GameScreenCard";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/Title";
import { primaryColor, secondaryColor, whiteColor } from "../constants/colors";

// -----------generate random number-------------
function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({
  userNumber,
  setUserNumber,
  setGameIsOver,
  setTotalGameRounds,
}) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [gameRounds, setGameRounds] = useState([]);

  // -------------------game over------------------------
  useEffect(() => {
    const parseCurrentGuess = parseInt(currentGuess);
    const parseUserNumber = parseInt(userNumber);
    if (parseCurrentGuess === parseUserNumber) {
      setGameIsOver(true);
    }
  }, [currentGuess, userNumber, setGameIsOver]);

  useEffect(() => {
    const newGameRounds = {
      id: gameRounds.length + 1,
      number: currentGuess,
    };
    setGameRounds([...gameRounds, newGameRounds]);
    setTotalGameRounds(gameRounds.length);
  }, [currentGuess]);

  // ------renderRoundsItem generate-------
  const renderRoundsItem = (itemData) => {
    return (
      <Pressable android_ripple={{ color: "#f3h" }}>
        <View style={styles.roundsContainer}>
          <Text style={styles.leftText}>#{itemData.item.id}</Text>
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightText}>Opponent's Guess:</Text>
            <Text style={styles.rightText}>({itemData.item.number})</Text>
          </View>
        </View>
      </Pressable>
    );
  };

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

      {/* -----game rounds---- */}
      <FlatList
        style={{ marginTop: 20 }}
        data={gameRounds.reverse()}
        renderItem={renderRoundsItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    marginTop: 80,
    height: "100%",
    marginHorizontal: 15,
  },
  roundsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: primaryColor,
    borderRadius: 5,
  },
  leftText: {
    fontSize: 18,
    fontWeight: "bold",
    color: secondaryColor,
  },
  rightText: {
    fontSize: 18,
    color: secondaryColor,
    paddingRight: 5,
    fontWeight: "bold",
  },
  rightTextContainer: {
    flexDirection: "row",
    paddingVertical: 6,
  },
});
