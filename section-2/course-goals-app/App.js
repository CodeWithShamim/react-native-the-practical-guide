import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [inputText, setInputText] = useState("");

  const getInputText = (txt) => {
    setInputText(txt);
  };

  const addInputText = () => {
    if (inputText !== "") {
      setGoals((goals) => [...goals, inputText]);
    }
    setInputText("");
  };

  return (
    <View style={styles.appContainer}>
      <Icon name="home" size={50} color="#dbae0d"></Icon>

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={getInputText}
          style={styles.inputText}
          value={inputText}
          placeholder="Enter your course goal!"
        ></TextInput>
        <Button
          onPress={addInputText}
          title="Add Goal"
          color="#dbae0d"
        ></Button>
      </View>

      {/* course goal text  */}
      <ScrollView style={{ width: "90%", marginVertical: 10 }}>
        {goals?.map((goal, index) => (
          <View style={styles.goalsContainer} key={index}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: "10%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    width: "90%",
    borderBottomColor: "purple",
    paddingBottom: 20,
    borderBottomWidth: 2,
  },
  inputText: {
    borderColor: "#facc15",
    borderWidth: 2,
    paddingHorizontal: 5,
    borderRadius: 4,
    marginRight: 10,
    width: "70%",
    shadowColor: "#000000",
    elevation: 50,
  },
  goalsContainer: {
    backgroundColor: "#fabc33",
    borderRadius: 10,
    padding: 10,
    marginBottom: 3,
  },
});
