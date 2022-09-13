import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
// import { useRoute } from "@react-navigation/native";

const MealsOverviewScreen = ({ route }) => {
  const meals = MEALS;
  const id = route.params.id;

  const displayedMeals = meals.filter(
    (mealItem) => mealItem.categoryIds.indexOf(id) >= 0
  );

  const renderMealItem = ({ item }) => {
    return <MealItem item={item}></MealItem>;
  };

  return (
    <View style={styles.mealsContainer}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  mealsContainer: {
    margin: 10,
  },
});
