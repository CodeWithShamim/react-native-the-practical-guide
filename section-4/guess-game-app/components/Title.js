import { Text, StyleSheet } from "react-native";
import React from "react";
import { secondaryColor } from "../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.titleText}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  titleText: {
    textAlign: "center",
    fontSize: 22,
    color: secondaryColor,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: secondaryColor,
    padding: 8,
  },
});
