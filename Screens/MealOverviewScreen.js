import { View, FlatList, StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

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

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id:item.id,
      title: item.title,
      imageurl: item.imageUrl,
      complexity: item.complexity,
      duration: item.duration,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
