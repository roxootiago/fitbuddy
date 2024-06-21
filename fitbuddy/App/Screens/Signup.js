import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import Toast from "react-native-toast-message";
import * as ImagePicker from "expo-image-picker";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import Colors from "../Shared/Colors";


const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
   const [focusedEmail, setFocusedEmail] = useState(false);
   const [focusedPassword, setFocusedPassword] = useState(false);
   const [focusedUsername, setFocusedUsername] = useState(false);

   

  const handleRegister = async () => {
    try {
      const formData = new FormData();
      formData.append("name", username);
      formData.append("email", email);
      formData.append("password", password);
      if (image) {
        const uriParts = image.split(".");
        const fileType = uriParts[uriParts.length - 1];
        formData.append("imageProfile", {
          uri: image,
          name: `photo.${fileType}`,
          type: `image/${fileType}`,
        });
      }

      const response = await axios.post(
        "https://api-fitbuddy.onrender.com/users",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        Toast.show({
          type: "success",
          text1: "Sucesso",
          text2: "Usuário cadastrado com sucesso!",
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Toast.show({
          type: "error",
          text1: "Bad Request",
          text2: "Invalid input. Please check your data and try again.",
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Failed to register user. Please try again.",
        });
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar-se</Text>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: focusedUsername ? Colors.PRIMARY : Colors.DARK_GRAY,
          },
        ]}
        placeholderTextColor={"white"}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        onFocus={() => setFocusedUsername(true)}
        onBlur={() => setFocusedUsername(false)}
        selectionColor={Colors.PRIMARY}
      />
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
        keyboardType="email-address"
        onChangeText={setEmail}
        onFocus={() => setFocusedEmail(true)}
        onBlur={() => setFocusedEmail(false)}
        selectionColor={Colors.PRIMARY}
      />
      <TextInput
        style={[
          styles.input,
          {
            borderColor: focusedPassword ? Colors.PRIMARY : Colors.DARK_GRAY,
          },
        ]}
        placeholderTextColor={"white"}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        onFocus={() => setFocusedPassword(true)}
        onBlur={() => setFocusedPassword(false)}
        selectionColor={Colors.PRIMARY}
      />
      <TouchableOpacity onPress={pickImage} style={styles.photoButton}>
        <Feather name="camera" size={24} color="white" />
        <Text style={styles.photoButtonText}>Choose Photo</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
        
        <FontAwesome6
          name="user-large"
          size={24}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.registerButtonText} placeholderTextColor={"white"}>Registrar</Text>
      </TouchableOpacity>
      <Toast ref={(ref) => Toast.setRef(ref)} />
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
  title: {
    color: Colors.PRIMARY,
    marginBottom: 50,
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    color: "white",
    marginBottom: 10,
  },
  registerButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  registerButtonText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },
  photoButton: {
    width: "60%",
    padding: 15,
    borderColor: "white",
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    marginBottom: 10,
  },
  photoButtonText: {
    color: "white",
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 12,
    alignSelf: "center",
    borderRadius: 100,
  },
});

export default App;
