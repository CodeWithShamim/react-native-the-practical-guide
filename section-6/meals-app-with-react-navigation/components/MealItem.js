import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

const MealItem = ({ item }) => {
  const [isImageUrl, setIsImageUrl] = useState(false);

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

  useEffect(() => {
    if (imageUrl) {
      setTimeout(() => {
        setIsImageUrl(true);
      }, 500);
    }
  }, [imageUrl]);

  return (
    <View style={styles.itemContainer}>
      <Pressable
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
    elevation: 2,
    borderRadius: 6,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 6,
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
