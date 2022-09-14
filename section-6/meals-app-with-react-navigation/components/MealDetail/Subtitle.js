import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitleContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#c16f0b",
  },
  subTitle: {
    fontSize: 17,
    color: "#c16f0b",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
