import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data.js";
import CategoryGridTitle from "../components/CategoryGridTitle.js";

const CategoriesScreen = ({ navigation }) => {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    ); // title and color are props passed to CategoryGridTitle.js
  }

  return (
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2} // display 2 coluns on screen
      />
  );
};

export default CategoriesScreen;
