import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { secondaryColor } from "../constants/colors";

const PrimaryButton = ({ children, bgColor }) => {
  return (
    <TouchableOpacity style={{ backgroundColor: bgColor, borderRadius: 3 }}>
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
    paddingVertical: 5,
    paddingHorizontal: 3,
  },
  btnText: {
    color: secondaryColor,
    fontSize: 14,
    fontWeight: "bold",
  },
});
