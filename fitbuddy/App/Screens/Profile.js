import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Colors from "../Shared/Colors";
import axios from "axios";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);

  const navigator = useNavigation();

  const navigateToSignUp = () => {
    navigator.navigate("signup-screen");
  };

const handleSignIn = async () => {
  try {
    const response = await axios.get(
      `https://api-fitbuddy.onrender.com/users/?email=${email}&password=${password}`
    );

    if (response.data && response.data.length > 0) {
      const { email } = response.data[0]; // Supondo que estamos pegando o primeiro usuário encontrado
      navigator.replace("user-screen", { email });
    } else {
      Alert.alert(
        "Erro",
        "Usuário não encontrado. Verifique suas credenciais."
      );
    }
  } catch (error) {
    console.error("Erro ao verificar usuário:", error);
    Alert.alert(
      "Erro",
      "Falha ao verificar usuário. Por favor, tente novamente."
    );
  }
};



  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.postimg.cc/vTMvNh7y/Apresenta-o-de-Eng-Soft-Escopo-do-Fitbuddy-3-removebg-preview.png",
        }}
        style={{ width: "50%", height: "20%" }}
      />
      <Text style={styles.welcomeBack}>Faça seu login</Text>
      <Text style={styles.signInText}>Motive-se, mova-se e se surpreenda</Text>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: focusedEmail ? Colors.PRIMARY : Colors.DARK_GRAY,
          },
        ]}
        placeholderTextColor={"white"}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        onFocus={() => setFocusedEmail(true)}
        onBlur={() => setFocusedEmail(false)}
        selectionColor={Colors.PRIMARY} // Cor do cursor quando focado
      />
      <TextInput
        style={[
          styles.input,
          {
            borderColor: focusedPassword ? Colors.PRIMARY : Colors.DARK_GRAY,
          },
        ]}
        placeholder="Password"
        placeholderTextColor={"white"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        onFocus={() => setFocusedPassword(true)}
        onBlur={() => setFocusedPassword(false)}
        selectionColor={Colors.PRIMARY} // Cor do cursor quando focado
      />

      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity style={styles.googleButton}>
          <AntDesign name="googleplus" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton}>
          <FontAwesome name="facebook" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.rememberMeRow}>
        <Switch
          value={rememberMe}
          onValueChange={setRememberMe}
          trackColor={{ false: Colors.DARK_GRAY, true: Colors.PRIMARY }}
          thumbColor={rememberMe ? Colors.PRIMARY : Colors.DARK_GRAY}
        />
        <Text style={styles.rememberMeText}>Lembrar de mim</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueci a senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToSignUp}>
        <Text style={styles.createAccount}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_BACK,
    alignItems: "center",
    justifyContent: "center",
  },
  googleButton: {
    backgroundColor: "#db4437",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 100,
    marginTop: 10,
  },
  facebookButton: {
    backgroundColor: "#4267B2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 100,
    marginTop: 10,
    width: 50,
  },
  welcomeBack: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    color: "white",
  },
  signInText: {
    fontSize: 16,
    color: "white",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    color: "white",
    marginBottom: 10,
  },
  rememberMeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  rememberMeText: {
    marginLeft: 10,
    color: "white",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "blue",
    textAlign: "center",
    color: "white",
  },
  signInButton: {
    width: "80%",
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  signInButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  createAccount: {
    color: Colors.PRIMARY,
    marginTop: 10,
  },
});

export default LoginScreen;
