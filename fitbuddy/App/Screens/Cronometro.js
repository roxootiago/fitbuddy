import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../Shared/Colors";

const CronometroScreen = () => {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSegundos((s) => s + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStopTimer = () => {
    setIsRunning((prevState) => !prevState);
  };

  const resetTimer = () => {
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
    setIsRunning(false);
  };

  useEffect(() => {
    if (segundos === 60) {
      setSegundos(0);
      setMinutos((m) => m + 1);
    }
    if (minutos === 60) {
      setMinutos(0);
      setHoras((h) => h + 1);
    }
  }, [segundos, minutos]);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://ouch-cdn2.icons8.com/fSLsqC8oOv6U1qjbzQBmLGeCIuog-xiw3M2YpEkircE/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjI1/L2NmMTUxMWJjLTJh/YmItNGViMi05MmE1/LWZhNDE5NjA4NTQ4/MS5zdmc.png",
        }}
        style={{ width: "100%", height: 200, top: "-10%" }}
        resizeMode="contain"
      />
      <Text style={styles.timer}>
        {horas < 10 ? `0${horas}` : horas}:
        {minutos < 10 ? `0${minutos}` : minutos}:
        {segundos < 10 ? `0${segundos}` : segundos}
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={startStopTimer}>
          <Text style={styles.buttonText}>
            {isRunning ? "Pausar" : "Iniciar"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.DARK_BACK,
  },
  timer: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: -60,
    color: 'white'
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CronometroScreen;
