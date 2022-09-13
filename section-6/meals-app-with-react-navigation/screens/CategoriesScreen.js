import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryItem from "../components/CategoryItem";

const CategoriesScreen = () => {
  const categories = CATEGORIES;

  const pressedHandle = (id) => {};

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
        showsHorizontalScrollIndicator
      ></FlatList>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1,
    marginHorizontal: 14,
  },
});
