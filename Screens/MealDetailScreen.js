import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavouriteContext } from "../store/context/favourite-context";

const MealDetailScreen = ({ route, navigation }) => {
  const favouriteMealsCtx = useContext(FavouriteContext);

  const mealId = route.params.mealId;
  // in MealItem.js when navigating to MealDetailScreen.js we have set "mealId"

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId);

  function changeFavouriteStatusHandler() {
    if (mealIsFavourite) {
      favouriteMealsCtx.removeFavourite(mealId);
    } else {
      favouriteMealsCtx.addFavourite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler, mealIsFavourite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingridients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
