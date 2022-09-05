import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  return (
    <View style={styles.appContainer}>
      <StatusBar
        backgroundColor={"#facc15"}
        barStyle={"dark-content"}
        translucent={false}
      />
      <Icon name="home" size={48} color="#facc15"></Icon>

      {/* input box  */}
      <GoalInput setGoals={setGoals}></GoalInput>

      {/* course goal item  */}
      <GoalItem goals={goals}></GoalItem>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#ed0b53",
  },
});
