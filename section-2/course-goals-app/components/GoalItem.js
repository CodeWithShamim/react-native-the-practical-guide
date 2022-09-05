import { FlatList, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const GoalItem = ({ goals }) => {
  return (
    <FlatList
      alwaysBounceVertical={false}
      style={{ width: "90%", marginVertical: 10 }}
      data={goals}
      renderItem={({ item }) => {
        return (
          <View style={styles.goalsContainer}>
            <Icon name="rocket" size={20} color="#fff"></Icon>
            <Text style={{ paddingLeft: 8 }}>{item}</Text>
          </View>
        );
      }}
      keyExtractor={(goal, index) => index}
    ></FlatList>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fabc33",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});
