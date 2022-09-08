import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

const GoalInput = ({ setGoals, modalIsVisible, setModalIsVisible }) => {
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
      setModalIsVisible(false);
    }
    setInputText("");
  };

  return (
    <Modal
      visible={modalIsVisible}
      animationType="slide"
      style={{ backgroundColor: "#ed0b53" }}
    >
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={getInputText}
          style={styles.inputText}
          value={inputText}
          placeholder="Enter your course goal!"
          placeholderTextColor="#d1bebe"
        ></TextInput>
        {/* btn container  */}
        <View style={styles.btnContainer}>
          <Button
            onPress={addInputText}
            title="Add Goal"
            color="#dbae0d"
          ></Button>

          <Button
            onPress={() => setModalIsVisible(false)}
            title="Cancel"
            color="red"
          ></Button>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderBottomColor: "#fff",
    paddingBottom: 20,
    borderBottomWidth: 2,
    backgroundColor: "#ed0b53",
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
    width: "90%",
    placeholderColor: "blue",
    shadowColor: "#000000",
    elevation: 50,
  },
  btnContainer: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
