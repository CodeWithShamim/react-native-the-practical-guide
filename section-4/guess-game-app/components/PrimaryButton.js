import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { whiteColor } from "../constants/colors";

const PrimaryButton = ({ children, bgColor, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: bgColor, borderRadius: 16, marginLeft: 5 }}
    >
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnText: {
    width: 120,
    color: whiteColor,
    fontSize: 17,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});
