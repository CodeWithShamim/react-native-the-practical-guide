import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Alert,
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
      <Icon name="home" size={50} color="#facc15"></Icon>

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={getInputText}
          style={styles.inputText}
          value={inputText}
          placeholder="Enter your course goal!"
          placeholderTextColor="#d1bebe"
        ></TextInput>
        <Button
          onPress={addInputText}
          title="Add Goal"
          color="#dbae0d"
        ></Button>
      </View>

      {/* course goal text  */}
      <FlatList
        alwaysBounceVertical={false}
        style={{ width: "90%", marginVertical: 10 }}
        data={goals}
        renderItem={({ item }) => {
          return (
            <TouchableHighlight style={styles.goalsContainer}>
              <Text>{item}</Text>
            </TouchableHighlight>
          );
        }}
        keyExtractor={(goal) => goal}
      ></FlatList>
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
    backgroundColor: "#ed0b53",
  },
  inputContainer: {
    flexDirection: "row",
    width: "90%",
    borderBottomColor: "#fff",
    paddingBottom: 20,
    borderBottomWidth: 2,
  },
  inputText: {
    borderColor: "#facc15",
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginRight: 10,
    width: "70%",
    placeholderColor: "blue",
    shadowColor: "#000000",
    elevation: 50,
  },
  goalsContainer: {
    backgroundColor: "#fabc33",
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
  },
});
