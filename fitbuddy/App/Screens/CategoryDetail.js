import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Colors from "../Shared/Colors";
import { FontAwesome } from "@expo/vector-icons";

const WorkoutCard = ({ workout }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: workout.image }} style={styles.cardImage} />
      <View style={styles.cardDetails}>
        <Text style={styles.cardTitle}>{workout.title}</Text>
        <Text style={styles.cardDuration}>{workout.duration} minutos</Text>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={15} color="gold" />
          <Text style={styles.cardRating}>{workout.rating}/5</Text>
        </View>
      </View>
    </View>
  );
};

const WorkoutScreen = () => {
  const workouts = [
    {
      id: 1,
      title: "Agachamento",
      duration: 15,
      rating: 4.5,
      image:
        "https://www.smartfit.com.br/news/wp-content/uploads/2020/01/como-fazer-agachamento.jpg",
    },
    {
      id: 2,
      title: "Flexões",
      duration: 20,
      rating: 4,
      image:
        "https://www.smartfit.com.br/news/wp-content/uploads/2014/10/flex%C3%A3o-de-bra%C3%A7o-como-fazer.jpg",
    },
    {
      id: 3,
      title: "Corrida",
      duration: 60,
      rating: 5,
      image:
        "https://s1.static.brasilescola.uol.com.br/be/2023/01/mulher-asiatica-correndo-com-roupa-e-tenis-na-cor-laranja.jpg",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>INICIAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17161B",
    paddingVertical: 30, 
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#1E1C24",
    borderRadius: 10,
    marginBottom: 15, 
  },
  cardImage: {
    width: 80,
    height: 60,
    borderRadius: 10,
  },
  cardDetails: {
    marginLeft: 10,
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  cardDuration: {
    color: "#777",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardRating: {
    color: "#777",
    marginLeft: 5,
  },
  button: {
    alignSelf: "stretch",
    backgroundColor: Colors.PRIMARY,
    alignItems: "center",
    paddingVertical: 15,
    marginHorizontal: 20,
    marginBottom: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default WorkoutScreen;
