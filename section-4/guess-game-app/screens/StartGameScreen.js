import { Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { secondaryColor } from "../constants/colors";

const StartGameScreen = () => {
  return (
    <View>
      <Text style={{ color: secondaryColor }}>StartGameScreen</Text>
      <View>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;
