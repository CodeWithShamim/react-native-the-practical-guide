import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({ item }) => {
  const [isImageUrl, setIsImageUrl] = useState(false);
  const navigation = useNavigation();
  const { id, title, affordability, complexity, imageUrl, duration } = item;

  const handleMealItemDetails = () => {
    navigation.navigate("MealDetails", { mealId: id });
  };
  useEffect(() => {
    if (imageUrl) {
      setTimeout(() => {
        setIsImageUrl(true);
      }, 800);
    }
  }, [imageUrl]);

  return (
    <View style={styles.itemContainer}>
      <Pressable
        onPress={handleMealItemDetails}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View>
          {isImageUrl ? (
            <Image style={styles.image} source={{ uri: imageUrl }} />
          ) : (
            <ActivityIndicator
              style={styles.image}
              size="large"
              color="#0000ff"
            />
          )}
          <Text style={styles.title}>{title}</Text>
        </View>

        {/* -----details----- */}
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}</Text>
          <Text style={styles.detailItem}>{complexity}</Text>
          <Text style={styles.detailItem}>{affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
    backgroundColor: "#ffffff",
    elevation: 3,
    borderRadius: 10,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    padding: 2,
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
    paddingHorizontal: 6,
  },
  detailItem: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#f3c",
    marginHorizontal: 6,
  },
});
