import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import GoogleMapViewFull from "../Components/Search/GoogleMapViewFull";
import SearchBar from "../Components/Search/SearchBar";
import { UserLocationContext } from "../Context/UserLocationContext";
import GlobalApi from "../Services/GlobalApi";
import BusinessList from "../Components/Search/BusinessList";

export default function Search() {
  const [placeList, setPlaceList] = useState([]);
  const { location } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      GetNearBySearchPlace("gym"); // Pesquisar por locais de exercício
    }
  }, [location]);

  const GetNearBySearchPlace = (type) => {
    if (location) {
      GlobalApi.nearByPlace(location.latitude, location.longitude, type).then(
        (resp) => {
          setPlaceList(resp.data.results);
        }
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: "absolute", zIndex: 20, width: "100%" }}>
        <SearchBar setSearchText={(value) => GetNearBySearchPlace(value)} />
      </View>
      <GoogleMapViewFull placeList={placeList} />
      <View
        style={{
          position: "absolute",
          zIndex: 20,
          bottom: 0,
          width: "100%",
          color: "white",
        }}
      >
        <BusinessList placeList={placeList} />
      </View>
    </View>
  );
}
