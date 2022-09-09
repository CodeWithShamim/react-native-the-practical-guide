import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "./constants/colors";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" translucent={false} />
      <View style={styles.appContainer}>
        <LinearGradient
          style={styles.linearGradient}
          colors={[primaryColor, secondaryColor]}
        >
          <StartGameScreen></StartGameScreen>
        </LinearGradient>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
});
