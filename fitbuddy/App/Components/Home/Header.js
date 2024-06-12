import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons"; // Importe o ícone desejado

import Colors from "../../Shared/Colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://img.icons8.com/?size=100&id=2yC9SZKcXDdX&format=png&color=a1a09f`,
        }}
        style={styles.userImage}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Busque um exercício"
          style={styles.searchBar}
        />
        <Feather
          name="search"
          size={18}
          color="gray"
          style={styles.searchIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.GRAY,
    borderRadius: 50,
    paddingLeft: 10,
    width: Dimensions.get("screen").width * 0.67,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  searchBar: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontStyle: "italic",
  },
  searchIcon: {
    marginRight: 15,
  },
});
