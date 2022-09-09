import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { whiteColor } from "../constants/colors";

const PrimaryButton = ({ children, bgColor, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: bgColor, borderRadius: 16, marginLeft: 5 }}
    >
      <View style={styles.btnContainer}>
        <Text style={styles.btnText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnContainer: {
    width: 100,
    alignItems: "center",
    paddingVertical: 9,
    paddingHorizontal: 5,
  },
  btnText: {
    color: whiteColor,
    fontSize: 14,
    fontWeight: "bold",
  },
});
