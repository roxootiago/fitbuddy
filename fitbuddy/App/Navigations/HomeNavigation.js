import { View, Text } from "react-native";
import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import Home from "../Screens/Home";
import PlaceDetail from "../Components/PlaceDetail/PlaceDetail";
import Corrida from "../Screens/Corrida"; // Importe a nova página
import Cronometro from "../Screens/Cronometro";
import CategoryDetail from "../Screens/CategoryDetail"

export default function HomeNavigation() {
  const isAndroid = true;
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        ...(isAndroid && TransitionPresets.ModalPresentationIOS),
      }}
    >
      <Stack.Screen
        name="home-screen"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="place-detail"
        options={{ title: "" }}
        component={PlaceDetail}
      />
      <Stack.Screen
        name="run-screen"
        options={{ title: "Corrida" }}
        component={Corrida}
      />
      <Stack.Screen
        name="cronometro-screen"
        options={{ title: "Cronometro" }}
        component={Cronometro}
      />

      <Stack.Screen
        name="category-detail-screen"
        options={{ title: "Resistencia" }}
        component={CategoryDetail}
      />
    </Stack.Navigator>
  );
}
