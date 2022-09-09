import { View, Text, StyleSheet } from "react-native";
import { secondaryColor, whiteColor } from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 60,
  },
  numberText: {
    textAlign: "center",
    fontSize: 26,
    color: whiteColor,
    fontWeight: "bold",
    borderWidth: 3,
    borderColor: secondaryColor,
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
});
