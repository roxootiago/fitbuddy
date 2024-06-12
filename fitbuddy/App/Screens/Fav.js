import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../Shared/Colors";

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://ouch-cdn2.icons8.com/4MTV_TACydsWbvfkmhp5i2UiQuDn6z6LtCSTMKmFnuM/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTUw/L2ZiNjIwOTE0LTc4/MDYtNDUwMS1iMzc1/LTdkMjQxNTZjZTg5/Zi5zdmc.png",
        }}
        style={styles.illustration}
      />
      <Text style={styles.headerText}>hmmm... Não encontramos favoritos!</Text>
      <Text
        style={{
          fontSize: 13,
          textAlign: "center",
          fontWeight: 700,
          color: "rgba(255, 104, 38, 0.5)",
          width: "89%",
          marginBottom: 12,
        }}
      >
        Que tal fazer o login para ter acesso à benefícios como:
      </Text>
      <View style={styles.featuresContainer}>
        <Text style={styles.featureText}>
          • Encontrar locais próximos para treinar
        </Text>
        <Text style={styles.featureText}>• Treinos personalizados</Text>
        <Text style={styles.featureText}>• Comunidade engajada</Text>
        <Text style={styles.featureText}>
          • Acesso à relatórios de progresso
        </Text>
        <Text style={styles.featureText}>• Compartilhar progresso com seus amigos</Text>
      </View>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Quero me cadastrar</Text>
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
    padding: 20,
  },
  illustration: {
    width: "60%",
    height: 212, 
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "900",
    color: Colors.PRIMARY, 
    textAlign: "center",
    marginBottom: 1,
  },
  featuresContainer: {
    alignSelf: "stretch",
    marginBottom: 20,
  },
  featureText: {
    fontSize: 14,
    color: Colors.PRIMARY, 
    marginBottom: 5,
  },
  nextButton: {
    backgroundColor: Colors.PRIMARY, 
    padding: 15,
    borderRadius: 25,
    alignSelf: "stretch",
  },
  nextButtonText: {
    fontSize: 18,
    color: "#FFFFFF", 
    textAlign: "center",
  },
});

export default PaymentScreen;
