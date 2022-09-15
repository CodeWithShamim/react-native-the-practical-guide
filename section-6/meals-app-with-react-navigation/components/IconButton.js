import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, size, color, onPress }) => {
  return (
    <Pressable onPress={({ pressed }) => pressed && styles.pressed}>
      <Ionicons
        onPress={onPress}
        name={icon}
        size={size}
        color={color}
      ></Ionicons>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
