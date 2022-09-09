import { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  ImageBackground,
} from "react-native";

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
      <ImageBackground
        style={styles.bgImage}
        source={require("../assets/images/goalBG.jpg")}
        resizeMode="cover"
        imageStyle={{ opacity: 1 }}
      >
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={getInputText}
            style={styles.inputText}
            value={inputText}
            placeholder="Enter your course goal!"
            placeholderTextColor="#483d8b"
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
      </ImageBackground>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 50,
    marginLeft: 5,
    alignItems: "center",
    width: "100%",
    borderBottomColor: "#fff",
    paddingBottom: 20,
    borderBottomWidth: 2,
    // backgroundColor: "#ed0b53",
  },
  inputText: {
    backgroundColor: "#fff",
    color: "#000000",
    fontWeight: "bold",
    letterSpacing: 1,
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
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
});
