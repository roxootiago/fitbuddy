import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import axios from "axios";
import Colors from "../Shared/Colors";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const UserProfileScreen = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    profileImage:
      "https://img.icons8.com/?size=100&id=85356&format=png&color=000000",
  });

  const navigation = useNavigation();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "https://api-fitbuddy.onrender.com/users/"
      );
      if (response.data.length > 0) {
        const lastIndex = response.data.length - 1;
        const { name, email, imageProfile } = response.data[lastIndex];
        setUserData({ name, email, profileImage: imageProfile });
      }
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    }
  };

  const handleLogout = () => {
    
    navigation.replace("Profile");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => console.log("Voltar")}
          style={styles.headerButton}
        >
          <Text style={styles.headerButtonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Configurações")}
          style={styles.headerButton}
        >
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/50/000000/settings.png",
            }}
            style={styles.settingsIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Informações do perfil */}
      <View style={styles.profileInfo}>
        <Image
          source={{ uri: userData.profileImage }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{userData.name}</Text>
        <Text style={styles.profileEmail}>{userData.email}</Text>
        <TouchableOpacity
          onPress={() => console.log("Editar perfil")}
          style={styles.editProfileButton}
        >
          <Text style={styles.editProfileButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Cards com informações adicionais */}
      <View style={styles.cardsContainer}>
        {/* Card 1: Informações Pessoais */}
        <TouchableOpacity
          onPress={() => console.log("Card de Informações Pessoais clicado")}
          style={styles.card}
        >
          <Text style={styles.cardTitle}>Progress</Text>
          <Entypo name="bar-graph" size={24} color="white" />
        </TouchableOpacity>

        {/* Card 2: Interesses */}
        <TouchableOpacity
          onPress={() => console.log("Card de Interesses clicado")}
          style={styles.card}
        >
          <Text style={styles.cardTitle}>Compartilhar perfil</Text>
          <Entypo name="share" size={24} color="white" />
        </TouchableOpacity>

        {/* Card 3: Estatísticas */}
        <TouchableOpacity onPress={handleLogout} style={styles.card}>
          <Text style={styles.cardTitle}>Sair da conta</Text>
          <MaterialCommunityIcons name="logout" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#1E1E1E",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 45,
  },
  headerButton: {
    padding: 4,
  },
  headerButtonText: {
    color: "white",
    fontSize: 14,
  },
  settingsIcon: {
    width: 20,
    height: 20,
    tintColor: "white",
  },
  profileInfo: {
    alignItems: "center",
    marginTop: 16,
    paddingHorizontal: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profileName: {
    color: "white",
    fontSize: 24,
    marginTop: 12,
  },
  profileEmail: {
    color: "gray",
    fontSize: 16,
    marginTop: 4,
  },
  editProfileButton: {
    marginTop: 12,
  },
  editProfileButtonText: {
    color: Colors.PRIMARY,
    fontSize: 16,
  },
  cardsContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#333",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    color: "white",
    fontSize: 18,
    marginBottom: 8,
  },
  cardText: {
    color: "gray",
    fontSize: 16,
  },
});

export default UserProfileScreen;
