import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../Shared/Colors";

const cards = [
  {
    id: 1,
    title: "Corrida",
    image: "https://encurtador.com.br/EAY0G",
    rating: 4.7,
  },
  {
    id: 2,
    title: "Alongamento",
    image: "https://webrun.com.br/wp-content/uploads/2021/03/alongamento.png",
    rating: 4.3,
  },
  {
    id: 3,
    title: "Aeróbico",
    image:
      "https://drbrunocosme.com.br/wp-content/uploads/2020/09/two-athletes-runs-on-treadmill-training-in-gym-Q6EBHEG.jpg",
    rating: 4.8,
  },
];

export default function PlaceList() {
  const navigator = useNavigation();
  const [filteredCards, setFilteredCards] = useState(cards);

  const onPlaceClick = (item) => {
    if (item.title === "Corrida") {
      navigator.navigate("run-screen");
    } else {
      navigator.navigate("place-detail", { place: item });
    }
  };

  const filterByRating = (rating) => {
    const filtered = cards.filter((card) => card.rating > rating);
    setFilteredCards(filtered);
  };

  const renderCard = ({ item }) => (
    <TouchableOpacity onPress={() => onPlaceClick(item)}>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <View style={styles.overlay}>
          <Text style={styles.cardText}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "raleway-bold",
          marginTop: 10,
          color: "white",
        }}
      >
        Exercícios populares
      </Text>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => filterByRating(4.5)}>
          <View
            style={{
              padding: 5,
              alignItems: "center",
              margin: 5,
              width: 80,
              height: 35,
              justifyContent: "center",
              borderRadius: 15,
              backgroundColor: "#FF6826",
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000",
              }}
              style={styles.image}
            />
            <Text style={styles.rating}>+4.5</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onPlaceClick({ title: "Exercício Popular" })}
        >
          <View
            style={{
              padding: 5,
              alignItems: "center",
              margin: 5,
              width: 80,
              height: 35,
              justifyContent: "center",
              borderRadius: 15,
              backgroundColor: "#FF6826",
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/?size=100&id=JrbE13EfhZWo&format=png&color=000000",
              }}
              style={styles.image}
            />
            <Text style={styles.rating}>Até 1h</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onPlaceClick({ title: "Exercício Popular" })}
        >
          <View style={styles.popularExercise}>
            <Image
              source={{
                uri: "https://img.icons8.com/?size=100&id=JrbE13EfhZWo&format=png&color=000000",
              }}
              style={styles.image}
            />
            <Text style={styles.rating}>Até 30min</Text>
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredCards}
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.cardContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  popularExercise: {
    padding: 5,
    alignItems: "center",
    margin: 5,
    width: 110,
    height: 35,
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#FF6826",
    flexDirection: "row",
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: -5,
  },
  rating: {
    marginLeft: 10,
    color: "white",
  },
  cardContainer: {
    padding: 10,
  },
  card: {
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 150,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
