import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import MealDetails from "./MealDetails";

const MealItem = ({
  id,
  title,
  imageurl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  function selectMealHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealHandler}
      >
        <View style={{ borderRadius: 8, overflow: "hidden" }}>
          <View style={styles.container}>
            <Image source={{ uri: imageurl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 6,

    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 200,
  },
  buttonPressed: {
    opacity: 0.55,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 8,
  },
});
