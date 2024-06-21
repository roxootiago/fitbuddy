import { View, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Fav from "../Screens/Fav";
import Search from "../Screens/Search";
import Profile from "../Screens/Profile";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import HomeNavigation from "./HomeNavigation";
import ProfileNavigation from "./ProfileNavigation";
import Colors from "../Shared/Colors";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.navigatorContainer}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "tomato", // Cor dos ícones ativos
          tabBarInactiveTintColor: "gray", // Cor dos ícones inativos
          tabBarStyle: {
            backgroundColor: "#192126", // Cor de fundo da barra de navegação
            borderBottomColor: "transparent",
            borderRadius: 20,
            position: "absolute",
            margin: 10,
            height: 60,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 10,
            justifyContent: "center", // Centralizar horizontalmente
          },
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;
            let iconMarginBottom = focused ? 0 : -12; // Ajuste do margin Bottom

            if (route.name === "Home") {
              iconName = "home";
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                  style={{ marginBottom: iconMarginBottom }}
                />
              );
            } else if (route.name === "Search") {
              iconName = "search";
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                  style={{ marginBottom: iconMarginBottom }}
                />
              );
            } else if (route.name === "Fav") {
              iconName = "heart-outline";
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                  style={{ marginBottom: iconMarginBottom }}
                />
              );
            } else if (route.name === "Profile") {
              iconName = "user-circle-o";
              return (
                <FontAwesome
                  name={iconName}
                  size={size}
                  color={color}
                  style={{ marginBottom: iconMarginBottom }}
                />
              );
            }
          },
          tabBarLabelStyle: {
            marginBottom: 8, // Adicionando margem inferior ao texto dos ícones
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigation}
          options={{
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: "Search",
          }}
        />
        <Tab.Screen
          name="Fav"
          component={Fav}
          options={{
            tabBarLabel: "Fav",
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileNavigation}
          options={{
            tabBarLabel: "Profile",
            headerTitle: null, // Remover o título do cabeçalho para a tela Profile
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  navigatorContainer: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 20,
    margin: 10,
    backgroundColor: Colors.DARK_BACK, // Você pode ajustar a cor de fundo conforme necessário
  },
});
