import { View, Text, StyleSheet } from "react-native";

const List = ({ listItems }) => {
  return (
    <>
      {listItems?.map((item) => (
        <View key={item} style={styles.listItem}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#e5b57e",
  },
  itemText: {
    textAlign: "center",
    color: "#5e3a11",
    fontWeight: "600",
  },
});
