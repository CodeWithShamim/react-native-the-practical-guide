import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;
  const mealItem = MEALS.find((mealItem) => mealItem.id === mealId);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: mealItem.imageUrl }}></Image>
      <Text style={styles.title}>{mealItem.title}</Text>
      <MealDetails
        mealItem={mealItem}
        textStyle={styles.detailText}
      ></MealDetails>

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List listItems={mealItem.ingredients}></List>
          <Subtitle>Steps</Subtitle>
          <List listItems={mealItem.steps}></List>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
    color: "#ffffff",
  },
  detailText: {
    color: "#cccccc",
  },
  listOuterContainer: {
    flex: 1,
    alignItems: "center",
  },
  listContainer: {
    width: "95%",
  },
});
