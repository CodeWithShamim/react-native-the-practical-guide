import { View, Text } from "react-native";
import React from "react";

const MealsOverviewScreen = ({ route }) => {
  const id = route.params.id;
  return (
    <View>
      <Text>MealsOverviewScreen {id}</Text>
    </View>
  );
};

export default MealsOverviewScreen;
