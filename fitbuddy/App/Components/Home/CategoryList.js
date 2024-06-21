import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CategoryItem from "./CategoryItem";

export default function CategoryList({ setSelectedCategory }) {
  const navigation = useNavigation();

  const categoryList = [
    {
      id: 1,
      name: "Resistência",
      value: "resistencia",
      icon: {
        uri: "https://img.icons8.com/?size=100&id=BoxCBhx8WzP7&format=png&color=000000",
      },
    },
    {
      id: 2,
      name: "Cardio",
      value: "cardio",
      icon: {
        uri: "https://img.icons8.com/?size=100&id=jyJGpNFcJ-4R&format=png&color=000000",
      },
    },
    {
      id: 3,
      name: "Musculação",
      value: "musculacao",
      icon: {
        uri: "https://img.icons8.com/?size=100&id=122692&format=png&color=000000",
      },
    },
  ];

  const handleCategoryPress = (value) => {
    setSelectedCategory(value);
    navigation.navigate("category-detail-screen", { categoryValue: value });
  };

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={styles.headerText}>Treinos</Text>

      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCategoryPress(item.value)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontFamily: "raleway-bold",
    color: "white",
  },
});
