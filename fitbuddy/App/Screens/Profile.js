import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Image
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Colors from "../Shared/Colors";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

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
        style={styles.input}
        placeholderTextColor={"white"}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"white"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
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
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
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
    borderColor: Colors.DARK_GRAY,
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
