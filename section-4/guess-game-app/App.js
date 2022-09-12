import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { primaryColor, secondaryColor } from "./constants/colors";
import EndGameScreen from "./screens/EndGameScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [userNumber, setUserNumber] = useState("");
  const [gameIsOver, setGameIsOver] = useState(false);
  const [totalGameRounds, setTotalGameRounds] = useState(0);
  const [fontsLoaded] = useFonts({
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-italic": require("./assets/fonts/Poppins-Italic.ttf"),
    "poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
    "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  let screen = <StartGameScreen setUserNumber={setUserNumber} />;

  if (userNumber && !gameIsOver) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        setUserNumber={setUserNumber}
        setGameIsOver={setGameIsOver}
        setTotalGameRounds={setTotalGameRounds}
      />
    );
  }
  if (gameIsOver) {
    screen = (
      <EndGameScreen
        userNumber={userNumber}
        setUserNumber={setUserNumber}
        setGameIsOver={setGameIsOver}
        totalGameRounds={totalGameRounds}
      />
    );
  }

  return (
    <View style={styles.appContainer}>
      <LinearGradient
        style={styles.linearGradient}
        colors={[primaryColor, secondaryColor]}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.imageBackground}
          imageStyle={{ opacity: 0.2 }}
        >
          {screen}
        </ImageBackground>
      </LinearGradient>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
});
