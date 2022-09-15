import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavouriteMeals from "./screens/FavouriteMeals";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import IconButton from "./components/IconButton";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          title: "All Categories",
          headerTitleAlign: "center",
          headerTintColor: "#ffffff",
          headerStyle: { backgroundColor: "#c16f0b" },
          sceneContainerStyle: { backgroundColor: "#3f1477" },
          // drawerContentStyle: { backgroundColor: "#3f1477" },
          drawerStyle: { backgroundColor: "#3f1477" },
          drawerActiveTintColor: "#3f1477",
          drawerActiveBackgroundColor: "#c16f0b",
          drawerInactiveTintColor: "#ffffff",
        }}
      >
        <Drawer.Screen
          name="MealsCategories"
          component={CategoriesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <IconButton icon="home" size={size} color={color} />
            ),
          }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="FavouriteMeals"
          component={FavouriteMeals}
          options={{
            drawerIcon: ({ color, size }) => (
              <IconButton icon="star" size={size} color={color} />
            ),
          }}
        ></Drawer.Screen>
      </Drawer.Navigator>
    );
  };

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
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
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
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
