import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

const FavouriteMealsScreen = () => {
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  const mealItems = MEALS.filter((meal) => favouriteMealIds.includes(meal.id));

  if (mealItems.length === 0) {
    return (
      <View style={styles.emptyMealContainer}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          there are not yet meal here!
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={mealItems}
        renderItem={({ item }) => <MealItem item={item}></MealItem>}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

export default FavouriteMealsScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  emptyMealContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
