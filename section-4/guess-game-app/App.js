import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { primaryColor, secondaryColor } from "./constants/colors";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState("");

  let screen = <StartGameScreen setUserNumber={setUserNumber} />;

  if (userNumber) {
    screen = <GameScreen />;
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
