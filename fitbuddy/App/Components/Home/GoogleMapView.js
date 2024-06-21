import React, { useContext, useEffect, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "../../Context/UserLocationContext";
import PlaceMarker from "./PlaceMarker"; // Importe o componente PlaceMarker aqui
import Colors from "../../Shared/Colors";

const GoogleMapView = ({ placeList }) => {
  const { location } = useContext(UserLocationContext);
  const [mapRegion, setMapRegion] = useState(null); // Inicialize mapRegion como null

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);

  // Locais estáticos definidos diretamente no componente
  const staticPlaces = [
    // Recife
    {
      name: "Parque da Jaqueira",
      latlng: { latitude: -8.040218, longitude: -34.905045 },
      city: "Recife",
    },
    {
      name: "Parque Dona Lindu",
      latlng: { latitude: -8.138214, longitude: -34.909025 },
      city: "Recife",
    },
    {
      name: "Academia da Cidade Boa Viagem",
      latlng: { latitude: -8.11812, longitude: -34.897623 },
      city: "Recife",
    },
    {
      name: "Parque Santana",
      latlng: { latitude: -8.034294, longitude: -34.911281 },
      city: "Recife",
    },
    {
      name: "Orla de Boa Viagem",
      latlng: { latitude: -8.115376, longitude: -34.88587 },
      city: "Recife",
    },
    {
      name: "Parque Urbano da Macaxeira",
      latlng: { latitude: -8.0, longitude: -34.917 },
      city: "Recife",
    },
    {
      name: "Parque 13 de MAio",
      latlng: { latitude: -8.060586, longitude: -34.877688 },
      city: "Recife",
    },
    // Olinda
    {
      name: "Parque do Carmo",
      latlng: { latitude: -7.993055, longitude: -34.843457 },
      city: "Olinda",
    },
    {
      name: "Praia de Bairro Novo",
      latlng: { latitude: -7.997822, longitude: -34.848089 },
      city: "Olinda",
    },
    // Jaboatão dos Guararapes
    {
      name: "Praia de Piedade",
      latlng: { latitude: -8.164493, longitude: -34.915329 },
      city: "Jaboatão dos Guararapes",
    },
    {
      name: "Praça Nossa Senhora do Rosário",
      latlng: { latitude: -8.112586, longitude: -35.015594 },
      city: "Jaboatão dos Guararapes",
    },
    // Cabo de Santo Agostinho
    {
      name: "Praia de Suape",
      latlng: { latitude: -8.392856, longitude: -34.952242 },
      city: "Cabo de Santo Agostinho",
    },
    {
      name: "Praça de São Francisco",
      latlng: { latitude: -8.283005, longitude: -35.023014 },
      city: "Cabo de Santo Agostinho",
    },
    // Camaragibe
    {
      name: "Parque Aldeia dos Camarás",
      latlng: { latitude: -8.024251, longitude: -34.977927 },
      city: "Camaragibe",
    },
    // Paulista
    {
      name: "Praia do Janga",
      latlng: { latitude: -7.92431, longitude: -34.841278 },
      city: "Paulista",
    },
    {
      name: "Parque Municipal do Paulista",
      latlng: { latitude: -7.945673, longitude: -34.839212 },
      city: "Paulista",
    },
    // Abreu e Lima
    {
      name: "Praça São José",
      latlng: { latitude: -7.908421, longitude: -34.898211 },
      city: "Abreu e Lima",
    },
    {
      name: "Parque Municipal de Abreu e Lima",
      latlng: { latitude: -7.906444, longitude: -34.898882 },
      city: "Abreu e Lima",
    },
    // São Lourenço Da Mata
    {
      name: "Praça de São Lourenço",
      latlng: { latitude: -8.004206, longitude: -34.978942 },
      city: "São Lourenço Da Mata",
    },
    // Igarassu
    {
      name: "Praça de Igarassu",
      latlng: { latitude: -7.835061, longitude: -34.910684 },
      city: "Igarassu",
    },
    // Ilha de Itamaracá
    {
      name: "Praia do Forte Orange",
      latlng: { latitude: -7.748553, longitude: -34.831021 },
      city: "Ilha de Itamaracá",
    },
    // Ipojuca
    {
      name: "Praia de Porto de Galinhas",
      latlng: { latitude: -8.502073, longitude: -35.008578 },
      city: "Ipojuca",
    },
    // Moreno
    {
      name: "Parque Municipal de Moreno",
      latlng: { latitude: -8.118807, longitude: -35.086492 },
      city: "Moreno",
    },
    // Itapissuma
    {
      name: "Praça da Itapissuma",
      latlng: { latitude: -7.776939, longitude: -34.897259 },
      city: "Itapissuma",
    },
  ];

  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 10,
          fontWeight: "600",
          fontFamily: "raleway-bold",
          color: "white",
        }}
      >
        Locais próximos para treinar 🏆
      </Text>
      <View style={{ borderRadius: 20, overflow: "hidden" }}>
        {location ? (
          <MapView
            style={{
              width: Dimensions.get("screen").width * 0.89,
              height: Dimensions.get("screen").height * 0.23,
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={mapRegion}
          >
            {staticPlaces.map((place, index) => (
              <Marker
                key={index}
                coordinate={place.latlng}
                title={place.name}
                description={place.city}
                pinColor={Colors.red}
              />
            ))}

            {placeList.map(
              (item, index) =>
                index <= 4 && <PlaceMarker item={item} key={index} />
            )}
          </MapView>
        ) : null}
      </View>
    </View>
  );
};

export default GoogleMapView;
