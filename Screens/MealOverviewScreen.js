import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealList from "../components/MealList/MealList";

const MealOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId; // getting the id in "MealOverviewScreen.js" component from "CategoriesScreen.js" component

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;

    //indexOf() => If the item is found, it returns the index number (like 0, 1, 2, etc.).If the item is not found, it returns -1.
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  // catId and navigation are two external things that we use inside of this function

  return <MealList items={displayedMeals} />;
};

export default MealOverviewScreen;
