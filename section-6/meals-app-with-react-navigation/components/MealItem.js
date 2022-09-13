import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MealItem = ({ item }) => {
  const {
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  } = item;

  return (
    <View style={styles.mealsContainer}>
      <Text>{title}</Text>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealsContainer: {
    height: 200,
    width: 200,
    backgroundColor: "#fc3d",
    marginBottom: 20,
  },
});
