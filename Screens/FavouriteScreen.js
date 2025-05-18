import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
import { FavouriteContext } from "../store/context/favourite-context";

const FavouriteScreen = () => {
  const favouriteMealsCtx = useContext(FavouriteContext);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsCtx.ids.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );
  }
  return <MealList items={favouriteMeals} />;
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#24180f",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color:'white'
  },
});
