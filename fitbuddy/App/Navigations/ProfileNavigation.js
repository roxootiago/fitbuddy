import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Screens/Profile";
import SignUpScreen from "../Screens/Signup";
import UserScreen from "../Screens/User";
import { TransitionPresets } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ProfileNavigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar se o usuário está logado

  // Função para simular o login (substitua com sua lógica real)
  const handleLogin = () => {
    // Lógica de verificação de credenciais (exemplo simplificado)
    const credentialsAreValid = true; // Simulando que as credenciais são válidas

    if (credentialsAreValid) {
      setIsLoggedIn(true); // Define o estado de login como verdadeiro
    }
  };

  return (
    <Stack.Navigator
      initialRouteName={isLoggedIn ? "user-screen" : "Profile"} // Condicionalmente define a tela inicial com base no estado de login
      screenOptions={{
        headerShown: false, // Certifique-se de que o cabeçalho está oculto por padrão
        gestureEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: null, // Remover o título do cabeçalho para a tela Profile
        }}
      />
      <Stack.Screen
        name="signup-screen"
        component={SignUpScreen}
        options={{
          headerTitle: null, // Remover o título do cabeçalho para a tela SignUpScreen
        }}
      />
      <Stack.Screen
        name="user-screen"
        component={UserScreen}
        options={{
          headerTitle: null, // Remover o título do cabeçalho para a tela UserScreen
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
