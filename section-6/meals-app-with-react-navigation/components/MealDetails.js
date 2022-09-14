import { View, Text, StyleSheet } from "react-native";

const MealDetails = ({ mealItem, textStyle }) => {
  const {
    affordability,
    complexity,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  } = mealItem;

  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 6,
  },
  detailItem: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#f3c",
    marginHorizontal: 6,
  },
});
