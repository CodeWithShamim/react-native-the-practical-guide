import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const GoalInput = ({ setGoals }) => {
  const [inputText, setInputText] = useState("");

  const getInputText = (txt) => {
    setInputText(txt);
  };

  const addInputText = () => {
    if (inputText !== "") {
      setGoals((goals) => [
        ...goals,
        { id: Math.random().toString(), name: inputText },
      ]);
    }
    setInputText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={getInputText}
        style={styles.inputText}
        value={inputText}
        placeholder="Enter your course goal!"
        placeholderTextColor="#d1bebe"
      ></TextInput>
      <Button onPress={addInputText} title="Add Goal" color="#dbae0d"></Button>
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
