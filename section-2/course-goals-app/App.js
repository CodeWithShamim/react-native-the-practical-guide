import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleDeleteGoalItem = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  const handleModalVisibility = () => {
    setModalIsVisible(true);
  };

  return (
    <>
      <StatusBar style="dark" backgroundColor="#facc15" translucent={false} />
      <View style={styles.appContainer}>
        <Icon name="home" size={48} color="#facc15"></Icon>

        {/* --------modal visible button----------- */}
        <Button
          title="Add New Goal"
          color="#dbae0d"
          onPress={handleModalVisibility}
        ></Button>

        {/* input box  */}
        <GoalInput
          setGoals={setGoals}
          modalIsVisible={modalIsVisible}
          setModalIsVisible={setModalIsVisible}
        ></GoalInput>

        {/* course goal item  */}
        <GoalItem
          goals={goals}
          handleDeleteGoalItem={handleDeleteGoalItem}
        ></GoalItem>
      </View>
    </>
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
