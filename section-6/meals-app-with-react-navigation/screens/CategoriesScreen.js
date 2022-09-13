import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryItem from "../components/CategoryItem";

const CategoriesScreen = ({ navigation }) => {
  const categories = CATEGORIES;

  const pressedHandle = (id) => {
    navigation.navigate("MealsOverview", { id: id });
  };

  const renderCategoryItem = ({ item }) => {
    return (
      <CategoryItem
        id={item.id}
        name={item.name}
        color={item.color}
        onPress={pressedHandle}
      ></CategoryItem>
    );
  };

  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1,
  },
});
