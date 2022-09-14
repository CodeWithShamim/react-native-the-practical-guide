import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: "All Categories",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#c16f0b" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f1477" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            // options={{
            //   title: "All Categories",
            //   headerStyle: { backgroundColor: "#633952" },
            //   headerTintColor: "white",
            //   contentStyle: { backgroundColor: "#3f1477" },
            // }}
          ></Stack.Screen>
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const id = route.params.id;
            //   return {
            //     title: id,
            //   };
            // }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
