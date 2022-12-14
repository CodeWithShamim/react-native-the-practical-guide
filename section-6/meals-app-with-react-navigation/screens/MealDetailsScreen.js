import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import {
  addFavourite,
  removeFavourite,
} from "../store/redux/features/favouriteSlice";

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const mealItem = MEALS.find((mealItem) => mealItem.id === mealId);

  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  const mealIsFavourite = favouriteMealIds.includes(mealId);
  const dispatch = useDispatch();
  const headerButtonPressHandler = () => {
    if (mealIsFavourite) {
      dispatch(removeFavourite({ id: mealId }));
    } else {
      dispatch(addFavourite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ color, size }) => (
        <IconButton
          icon={mealIsFavourite ? "star" : "star-outline"}
          color="white"
          size={24}
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [navigation, headerButtonPressHandler]);

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
    width: "90%",
  },
});
