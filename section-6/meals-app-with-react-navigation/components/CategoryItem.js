import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

const CategoryItem = ({ id, name, color, onPress }) => {
  return (
    <Pressable
      onPress={() => onPress(id)}
      android_ripple={{ color: "#ccc" }}
      style={[styles.categoryContainer, { backgroundColor: color }]}
    >
      <View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    height: 150,
    width: 150,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  text: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#ffffff",
  },
});
