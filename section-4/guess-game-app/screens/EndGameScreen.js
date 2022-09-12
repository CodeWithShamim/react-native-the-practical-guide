import {
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
  Text,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import {
  accentColor,
  primaryColor,
  secondaryColor,
  whiteColor,
} from "../constants/colors";

const EndGameScreen = ({ setUserNumber, setGameIsOver }) => {
  const hanldeStartGameAgain = () => {
    setUserNumber("");
    setGameIsOver(false);
  };
  const { height, width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Title>Game Over!</Title>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        ></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Your phone needed to <Text style={styles.textNumber}>0</Text> rounds
          to guess the number <Text style={styles.textNumber}>55</Text>
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <PrimaryButton
          style={{
            width: width - 50,
            paddingVertical: 10,
            fontSize: 20,
          }}
          bgColor={accentColor}
          onPress={hanldeStartGameAgain}
        >
          Start Again
        </PrimaryButton>
      </View>
    </View>
  );
};

export default EndGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  btnContainer: {
    width: "100%",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    marginTop: 20,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: whiteColor,
  },
  textContainer: {},
  text: {
    textAlign: "center",
    fontFamily: "poppins-italic",
    color: whiteColor,
    fontSize: 20,
  },
  textNumber: { color: secondaryColor, fontSize: 25 },
});
