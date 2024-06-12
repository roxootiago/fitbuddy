import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Colors from "../Shared/Colors";
import { useNavigation } from "@react-navigation/native";

const recommendedExercises = [
  {
    id: 1,
    title: "Flexões",
    image:
      "https://img.freepik.com/fotos-gratis/retrato-de-homem-afro-americano-de-esportes-fazendo-exercicios-de-flexao_171337-8271.jpg?t=st=1718162469~exp=1718166069~hmac=784ad1284712a0b8751fbb115ba1a0847422e63037911984eeddbd45b279dd31&w=1380",
  },
  {
    id: 2,
    title: "Prancha",
    image:
      "https://blog.bodytech.com.br/wp-content/uploads/2023/03/prancha-exercicio.jpg",
  },
  {
    id: 3,
    title: "Abdominais",
    image:
      "https://conteudo.imguol.com.br/c/entretenimento/28/2020/12/11/abdominal-1607701858864_v2_900x506.jpg",
  },
];

export default function Corrida() {
  const navigator = useNavigation();

  const handleStartRun = (item) => {
    navigator.navigate("cronometro-screen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://blogpilates.com.br/wp-content/uploads/2023/01/Corrida-de-rua.png",
          }} // Imagem de capa
          style={styles.coverImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.headerTitle}>Treino de corrida</Text>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <TouchableOpacity
              style={styles.startRunButton}
              onPress={handleStartRun}
            >
              <Ionicons
                name="play-circle"
                size={24}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.startRunButtonText}>Iniciar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.startRunButton}
              onPress={() => {
                alert("Adicionar treino");
              }}
            >
              <Entypo
                name="circle-with-plus"
                size={24}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.startRunButtonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={20} color={Colors.YELLOW} />
          <Ionicons name="star" size={20} color={Colors.YELLOW} />
          <Ionicons name="star" size={20} color={Colors.YELLOW} />
          <Ionicons name="star" size={20} color={Colors.YELLOW} />
          <Ionicons name="star" size={20} color={Colors.YELLOW} />
          <Text style={styles.ratingText}>5.0</Text>
        </View>

        <View style={styles.recommendedContainer}>
          <Text style={styles.sectionTitle}>Recomendado</Text>
          <FlatList
            data={recommendedExercises}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.recommendationCard}>
                <Image source={{ uri: item.image }} style={styles.cardImage} />
                <Text style={styles.cardText}>{item.title}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_BACK,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: Dimensions.get("window").height * 0.35,
  },
  coverImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  ratingText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.DARK_GRAY,
  },
  recommendedContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.DARK_GRAY,
    marginBottom: 10,
  },
  recommendationCard: {
    marginRight: 10,
  },
  cardImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.DARK_GRAY,
    textAlign: "center",
  },
  startRunButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 100,
    alignItems: "center",
    flexDirection: "row",
  },
  startRunButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    marginRight: 5,
  },
});
