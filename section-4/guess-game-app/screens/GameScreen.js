import { View, StyleSheet } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    marginTop: 80,
    marginHorizontal: 15,
  },
});
