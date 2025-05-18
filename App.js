import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import CategoriesScreen from "./Screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealOverviewScreen from "./Screens/MealOverviewScreen";
import MealDetailScreen from "./Screens/MealDetailScreen";
import FavouriteScreen from "./Screens/FavouriteScreen";
import { Ionicons } from "@expo/vector-icons";
import FavouriteContextProvider from "./store/context/favourite-context";

const stack = createNativeStackNavigator();
const drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#e4baa1",
      }}
    >
      <drawer.Screen
        name="categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <drawer.Screen
        name="favourite"
        component={FavouriteScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouriteContextProvider>
        <View style={styles.container}>
          <NavigationContainer>
            <stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: "#351401" },
                headerTintColor: "white",
                contentStyle: { backgroundColor: "#3f2f25" },
              }}
            >
              <stack.Screen
                name="Drawer"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="MealsOverview"
                component={MealOverviewScreen}
              />
              <stack.Screen
                name="MealDetail"
                component={MealDetailScreen}
                options={{
                  title: "About the Meal",
                }}
              />
            </stack.Navigator>
          </NavigationContainer>
        </View>
      </FavouriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#24180f"',
  },
});
