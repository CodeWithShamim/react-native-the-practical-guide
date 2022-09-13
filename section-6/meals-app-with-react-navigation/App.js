import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <CategoriesScreen></CategoriesScreen>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
