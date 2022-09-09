import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Entypo";

const GoalItem = ({ goals, handleDeleteGoalItem }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
      style={{ width: "90%", marginVertical: 10 }}
      data={goals}
      renderItem={({ item }) => {
        return (
          <Pressable
            android_ripple={{ color: "#ffffff" }}
            style={({ pressed }) =>
              pressed
                ? [styles.goalsContainer, styles.pressedStyle]
                : styles.goalsContainer
            }
          >
            <View style={{ flexDirection: "row" }}>
              <Icon name="rocket" size={20} color="purple"></Icon>
              <Text style={{ paddingLeft: 8 }}>{item.name}</Text>
            </View>
            <Icon2
              onPress={handleDeleteGoalItem.bind(this, item.id)}
              name="circle-with-cross"
              size={20}
              color="red"
            ></Icon2>
          </Pressable>
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
    justifyContent: "space-between",
    backgroundColor: "#fabc33",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  pressedStyle: {
    opacity: 0.5,
  },
});
